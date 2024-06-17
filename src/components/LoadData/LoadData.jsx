import { useState, useEffect } from 'react';
import {
  ref,
  query,
  onValue,
  orderByChild,
  startAt,
  endAt,
} from 'firebase/database';
import { db } from '../../../firebase';
import { TeachersCard } from '../TeachersCard/TeachersCard';
import { nanoid } from 'nanoid';
import { showErrorToast } from '../ErrorMessages/errorMessages';
import css from './LoadData.module.css';

const LoadData = ({ selectedLanguage, selectedPrice }) => {
  const [loadedData, setLoadedData] = useState([]);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [noMoreData, setNoMoreData] = useState(false);
  const limit = 4;

  useEffect(() => {
    const loadDataFromFB = async () => {
      const newData = [];
      let queryRef;
      try {
        if (selectedLanguage) {
          queryRef = query(
            ref(db, 'teachers'),
            orderByChild('languages').equalTo(selectedLanguage)
          );
        } else {
          queryRef = query(
            ref(db, 'teachers'),
            orderByChild('id'),
            startAt(String(currentOffset)),
            endAt(String(currentOffset + limit - 1))
          );
        }

        onValue(queryRef, (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const teacher = childSnapshot.val();
            if (!selectedPrice || teacher.price_per_hour === selectedPrice) {
              newData.push(teacher);
            }
          });
          setLoadedData((prevData) => [...prevData, ...newData]);
          setCurrentOffset((prevOffset) => prevOffset + limit);

          if (newData.length < limit) setNoMoreData(true);
        });
      } catch (error) {
        showErrorToast(error.message);
      }
    };

    setLoadedData([]);
    setCurrentOffset(0);
    setNoMoreData(false);
    loadDataFromFB();
  }, [selectedLanguage, selectedPrice, currentOffset]);

  const handleLoadMore = () => {
    setCurrentOffset((prevOffset) => prevOffset + limit);
  };

  return (
    <>
      {loadedData.length > 0 && (
        <ul className={css.cardsList}>
          {loadedData.map((teacher) => (
            <li className={css.cardsItem} key={nanoid()}>
              <TeachersCard card={teacher} />
            </li>
          ))}
        </ul>
      )}
      {!noMoreData && (
        <button className={css.cardsLoadMoreBtn} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </>
  );
};

export default LoadData;
