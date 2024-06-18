// import { useState, useEffect } from 'react';
// import {
//   ref,
//   query,
//   onValue,
//   orderByChild,
//   startAt,
//   endAt,
// } from 'firebase/database';
// import { db } from '../../../firebase';
// import { TeachersCard } from '../TeachersCard/TeachersCard';
// import { nanoid } from 'nanoid';
// import { showErrorToast } from '../ErrorMessages/errorMessages';
// import css from './LoadData.module.css';

// const LoadData = ({ selectedLanguage, selectedPrice }) => {
//   const [loadedData, setLoadedData] = useState([]);
//   const [currentOffset, setCurrentOffset] = useState(0);
//   const [noMoreData, setNoMoreData] = useState(false);
//   const limit = 4;

//   useEffect(() => {
//     const loadDataFromFB = async () => {
//       const newData = [];
//       let queryRef;
//       try {
//         if (selectedLanguage) {
//           queryRef = query(
//             ref(db, 'teachers'),
//             orderByChild('languages').equalTo(selectedLanguage)
//           );
//         } else {
//           queryRef = query(
//             ref(db, 'teachers'),
//             orderByChild('id'),
//             startAt(String(currentOffset)),
//             endAt(String(currentOffset + limit - 1))
//           );
//         }

//         onValue(queryRef, (snapshot) => {
//           snapshot.forEach((childSnapshot) => {
//             const teacher = childSnapshot.val();
//             if (!selectedPrice || teacher.price_per_hour === selectedPrice) {
//               newData.push(teacher);
//             }
//           });
//           setLoadedData((prevData) => [...prevData, ...newData]);
//           setCurrentOffset((prevOffset) => prevOffset + limit);

//           if (newData.length < limit) setNoMoreData(true);
//         });
//       } catch (error) {
//         showErrorToast(error.message);
//       }
//     };

//     setLoadedData([]);
//     setCurrentOffset(0);
//     setNoMoreData(false);
//     loadDataFromFB();
//   }, [selectedLanguage, selectedPrice, currentOffset]);

//   const handleLoadMore = () => {
//     setCurrentOffset((prevOffset) => prevOffset + limit);
//   };

//   return (
//     <>
//       {loadedData.length > 0 && (
//         <ul className={css.cardsList}>
//           {loadedData.map((teacher) => (
//             <li className={css.cardsItem} key={nanoid()}>
//               <TeachersCard card={teacher} />
//             </li>
//           ))}
//         </ul>
//       )}
//       {!noMoreData && (
//         <button className={css.cardsLoadMoreBtn} onClick={handleLoadMore}>
//           Load more
//         </button>
//       )}
//     </>
//   );
// };

// export default LoadData;

// =========1
// import { useState, useEffect } from 'react';
// import {
//   ref,
//   query,
//   onValue,
//   orderByKey,
//   startAt,
//   endBefore,
//   orderByChild,
// } from 'firebase/database';
// import { db } from '../../../firebase';
// import { TeachersCard } from '../TeachersCard/TeachersCard';
// import { nanoid } from 'nanoid';
// import { showErrorToast } from '../ErrorMessages/errorMessages';
// import css from './LoadData.module.css';

// export const LoadData = ({ languageFilter }) => {
//   const [loadedData, setLoadedData] = useState([]);
//   const [currentOffset, setCurrentOffset] = useState(4);
//   const [noMoreData, setNoMoreData] = useState(true);
//   const dataLength = loadedData.length;
//   const limit = 4;

//   useEffect(() => {
//     loadDataFromFB();
//   }, [languageFilter]);

//   const loadDataFromFB = async () => {
//     let queryRef;
//     if (languageFilter) {
//       // Запит для фільтрації за мовою
//       queryRef = query(
//         ref(db, 'teachers'),
//         orderByKey(),
//         startAt(String(currentOffset)),
//         endBefore(String(currentOffset + limit)),
//         orderByChild('language').equalTo(languageFilter)
//       );
//     } else {
//       // Запит без фільтрації
//       const baseFetch = query(
//         ref(db),
//         orderByKey(),
//         endBefore(String(currentOffset))
//       );
//       const updFetch = query(
//         ref(db),
//         orderByKey(),
//         startAt(String(currentOffset)),
//         endBefore(String(currentOffset + limit))
//       );
//       queryRef = dataLength > 0 ? updFetch : baseFetch;
//     }

//     try {
//       onValue(queryRef, (snapshot) => {
//         const newData = [];
//         snapshot.forEach((childSnapshot) => {
//           newData.push(childSnapshot.val());
//         });
//         setLoadedData([...loadedData, ...newData]);
//         setCurrentOffset(dataLength + limit);

//         if (newData.length < limit && dataLength > 0) setNoMoreData(false);
//       });
//     } catch (error) {
//       showErrorToast(error.message);
//     }
//   };

//   return (
//     <>
//       {dataLength > 0 && (
//         <ul className={css.cardsList}>
//           {loadedData.map((card) => (
//             <li className={css.cardsItem} key={nanoid()}>
//               <TeachersCard card={card} />
//             </li>
//           ))}
//         </ul>
//       )}
//       {noMoreData && dataLength > 0 && (
//         <button className={css.cardsLoadMoreBtn} onClick={loadDataFromFB}>
//           Load more
//         </button>
//       )}
//     </>
//   );
// };

import { useState, useEffect } from 'react';
import { TeachersCard } from '../TeachersCard/TeachersCard';
import css from './LoadData.module.css';
import { getAllTeachers } from '../../../api';
import { NoFindContainer } from '../NoFindTeacher/NoFindTeacher';

export const LoadData = ({ filtered, lvl }) => {
  const [teachersPerPage, setTeachersPerPage] = useState(4);
  const [favoritesPerPage, setFavoritesPerPage] = useState(4);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const getTeachersData = async () => {
      const teachersData = await getAllTeachers(teachersPerPage);
      setTeachers(teachersData);
    };
    getTeachersData();
  }, [teachersPerPage]);

  const handleShowMore = () => {
    setTeachersPerPage((prev) => prev + 4);
  };

  const favoritesShowMore = () => {
    setFavoritesPerPage((prev) => prev + 4);
  };

  return (
    <>
      <ul className={css.cardsList}>
        {filtered && filtered.length > 0
          ? filtered.slice(0, favoritesPerPage).map((teach, index) => (
              <li className={css.cardsItem} key={index}>
                <TeachersCard card={teach} lvl={lvl} />
              </li>
            ))
          : teachers.length > 0 &&
            teachers.map((teach, index) => (
              <li className={css.cardsItem} key={index}>
                <TeachersCard card={teach} lvl={lvl} />
              </li>
            ))}
        {filtered && filtered.length === 0 && <NoFindContainer />}
      </ul>
      {teachers.length < 30 && !filtered && (
        <button
          className={css.cardsLoadMoreBtn}
          type="button"
          onClick={handleShowMore}
        >
          Show more
        </button>
      )}
      {filtered && filtered.length > favoritesPerPage && (
        <button
          className={css.cardsLoadMoreBtn}
          type="button"
          onClick={favoritesShowMore}
        >
          Show more
        </button>
      )}
    </>
  );
};
