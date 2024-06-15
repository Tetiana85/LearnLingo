// import { languages } from '../../../lib/info';
// import css from './SelectLanguage.module.css';

// export const SelectLanguage = ({ setLanguage }) => {

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setLanguage(value ? value : null);
//   };

//   return (
//     <div className={css.searchContainer}>
//       <div className={css.selectContainer}>
//         <label htmlFor="langs" className={css.labelSelect}>Languages</label>
//         <select
//           id="langs"
//           className={css.customSelect}
//           onChange={handleChange}
//           defaultValue=""
//         >
//           <option value="" disabled>Language</option>
//           {languages.map((language) => (
//             <option key={language.value} value={language.value} className={css.customOption}>
//               {language.label}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

import { languages } from '../../../lib/info';
import css from './SelectLanguage.module.css';

export const SelectLanguage = ({ setLanguage }) => {

const handleChange = (e) => {
    if(e === null) {
      setLanguage(null);
     return;
    } else {
      setLanguage(e.value);
    }
  };

  return (
    <div className={css.searchContainer}>
      <div className={css.selectContainer}>
        <label htmlFor="langs" className={css.labelSelect}>Languages</label>
        <select
          id="langs"
          className={css.customSelect}
          onChange={handleChange}
          defaultValue=""
        >
          <option value="" disabled>Language</option>
          {languages.map((language) => (
            <option key={language.value} value={language.value} className={css.customOption}>
              {language.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};









