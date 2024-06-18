// import { useState } from 'react';
// import { LoadData } from '../../components/LoadData/LoadData';
// import { SearchBar } from '../../components/SearchBar/SearchBar';
// import { useAuth } from '../../hooks/use-auth';
// import css from './TeachersPage.module.css';

// const TeachersPage = () => {
//   useAuth();

//   const [selectedLanguage, setSelectedLanguage] = useState('');
//   const [selectedPrice, setSelectedPrice] = useState(null);

//   const handleLanguageChange = (language) => {
//     setSelectedLanguage(language);
//   };

//   const handlePriceChange = (price) => {
//     setSelectedPrice(price);
//   };

//   return (
//     <main className={css.main}>
//       <SearchBar
//         setLanguage={handleLanguageChange}
//         setPrice={handlePriceChange}
//       />
//       <LoadData
//         selectedLanguage={selectedLanguage}
//         selectedPrice={selectedPrice}
//       />
//     </main>
//   );
// };

// export default TeachersPage;

// =========1

// import { useState } from 'react';
// import { LoadData } from '../../components/LoadData/LoadData';
// import { SearchBar } from '../../components/SearchBar/SearchBar';
// import { useAuth } from '../../hooks/use-auth';
// import css from './TeachersPage.module.css';

// const TeachersPage = () => {
//   useAuth();

//   const [selectedLanguage, setSelectedLanguage] = useState('');
//   const [selectedPrice, setSelectedPrice] = useState(null);

//   const handleLanguageChange = (language) => {
//     setSelectedLanguage(language);
//   };

//   const handlePriceChange = (price) => {
//     setSelectedPrice(price);
//   };

//   return (
//     <main className={css.main}>
//       <SearchBar
//         setLanguage={handleLanguageChange}
//         setPrice={handlePriceChange}
//       />
//       <LoadData
//         selectedLanguage={selectedLanguage}
//         selectedPrice={selectedPrice}
//       />
//     </main>
//   );
// };

// export default TeachersPage;

import { useEffect, useState } from 'react';
import { LoadData } from '../../components/LoadData/LoadData';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { useAuth } from '../../hooks/use-auth';
import css from './TeachersPage.module.css';
import { getAllFiltered } from '../../../api';

const TeachersPage = () => {
  useAuth();

  const [language, setLanguage] = useState(null);
  const [lvl, setLvl] = useState(null);
  const [price, setPrice] = useState(null);

  // local state for filtered teachers
  const [filtered, setFiltered] = useState(null);

  useEffect(() => {
    const getFilteredTeachers = async () => {
      try {
        const filteredTeachers = await getAllFiltered(language, lvl, price);
        setFiltered(filteredTeachers);
      } catch (error) {
        console.error('Error fetching filtered teachers:', error);
      }
    };

    getFilteredTeachers();
  }, [language, lvl, price]);

  return (
    <main className={css.main}>
      <SearchBar
        setLanguage={setLanguage}
        setLvl={setLvl}
        setPrice={setPrice}
      />
      <LoadData filtered={filtered} lvl={lvl} />
    </main>
  );
};

export default TeachersPage;
