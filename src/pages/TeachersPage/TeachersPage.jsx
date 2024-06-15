// import { LoadData } from "../../components/LoadData/LoadData";
// import { SearchBar } from "../../components/SearchBar/SearchBar"; 
// import css from './TeachersPage.module.css';

// const TeachersPage = () => {
//   return (
//     <main className={css.main}>
//       <SearchBar /> 
//       <LoadData />
//     </main>
//   );
// }

// export default TeachersPage;




// import { useState } from 'react';
// import { LoadData } from '../../components/LoadData/LoadData';
// import { SelectLanguage } from '../../components/SearchBar/SelectLanguage/SelectLanguage';
// import css from './TeachersPage.module.css';

// export const TeachersPage = () => {
//   const [language, setLanguage] = useState(null);

//   return (
//     <main className={css.main}>
//       <SelectLanguage setLanguage={setLanguage} /> 
//       <LoadData languageFilter={language} />
//     </main>
//   );
// }


import { useState } from 'react';
import { LoadData } from "../../components/LoadData/LoadData";
import { SearchBar } from "../../components/SearchBar/SearchBar"; 
import css from './TeachersPage.module.css';

const TeachersPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  return (
    <main className={css.main}>
      <SearchBar setLanguage={setSelectedLanguage} /> 
      <LoadData selectedLanguage={selectedLanguage} />
    </main>
  );
}

export default TeachersPage;



