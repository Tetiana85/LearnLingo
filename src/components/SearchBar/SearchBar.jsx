// // @ts-nocheck
// import {SelectLevel} from './SelectLevel/SelectLevel'
// import {SelectLanguage} from './SelectLanguage/SelectLanguage'
// import {SelectPrice} from './SelectPrice/SelectPrice'
// import css from './SearchBar.module.css';

// export const SearchBar = ({setLanguage, setLvl, setPrice}) => {
//   return (
//     <div className={css.searchbar}>
//         <SelectLanguage setLanguage={setLanguage}/>
//         <SelectLevel setLvl={setLvl}/>
//         <SelectPrice setPrice={setPrice}/>
//     </div>
//   )
// }

import { SelectLevel } from './SelectLevel/SelectLevel';
import { SelectLanguage } from './SelectLanguage/SelectLanguage';
import { SelectPrice } from './SelectPrice/SelectPrice';
import css from './SearchBar.module.css';

export const SearchBar = ({ setLanguage, setLvl, setPrice }) => {
  return (
    <div className={css.searchbar}>
      <SelectLanguage setLanguage={setLanguage} />
      <SelectLevel setLvl={setLvl} />
      <SelectPrice setPrice={setPrice} />
    </div>
  );
};
