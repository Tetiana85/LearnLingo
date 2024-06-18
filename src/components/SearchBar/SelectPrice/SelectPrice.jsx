// import { prices } from "../../../lib/info";
// import css from './SelectPrice.module.css';

// export const SelectPrice = ({ setPrice }) => {

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setPrice(value ? value : null);
//   };

//   return (
//     <div className={css.searchContainer}>
//       <div className={css.selectContainer}>
//         <label htmlFor="price" className={css.labelSelect}>Price</label>
//         <select
//           id="price"
//           className={css.customSelect}
//           onChange={handleChange}
//           defaultValue=""
//         >
//           <option value="" disabled>$/hour</option>
//           {prices.map((price) => (
//             <option key={price.value} value={price.value}>
//               {price.label}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// =======1

// import { prices } from '../../../lib/info';
// import css from './SelectPrice.module.css';

// export const SelectPrice = ({ setPrice }) => {
//   const handleChange = (e) => {
//     const value = e.target.value;
//     setPrice(value ? Number(value) : null);
//   };

//   return (
//     <div className={css.searchContainer}>
//       <div className={css.selectContainer}>
//         <label htmlFor="price" className={css.labelSelect}>
//           Price
//         </label>
//         <select
//           id="price"
//           className={css.customSelect}
//           onChange={handleChange}
//           defaultValue=""
//         >
//           <option value="" disabled>
//             $/hour
//           </option>
//           {prices.map((price) => (
//             <option key={price.value} value={price.value}>
//               {price.label}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

import Select from 'react-select';
import { prices } from '../../../lib/info';
import css from './SelectPrice.module.css';

export const SelectPrice = ({ setPrice }) => {
  const handleChange = (e) => {
    if (e === null) {
      setPrice(null);
      return;
    } else {
      setPrice(e.value);
    }
  };

  const customStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      border: state.isFocused
        ? '1px solid var(--accent-color)'
        : '1px solid var(--accent-light)',
      '&:hover': {
        border: '1px solid var(--accent-color)',
      },
      boxShadow: state.isFocused ? null : baseStyles.boxShadow,
      outline: 'none',
      width: '144px',
      height: '48px',
      background: '#fff',
      borderRadius: '14px',
      fontSize: '18px',
      fontWeight: '500',
      color: '#121417',
      cursor: 'pointer',
      fontFamily: 'Roboto, sans-serif',
    }),
    placeholder: (baseStyles) => ({
      ...baseStyles,
      color: '#121417',
      fontSize: '18px',
      fontWeight: '500',
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      fontFamily: 'Roboto, sans-serif',
      border: 'none',
      fontSize: '18px',
      fontWeight: '500',
      lineHeight: '1.11111',
      outline: 'none',
      color: state.isFocused ? 'var(--dark-color)' : 'rgba(18, 20, 23, 0.2)',
    }),
    valueContainer: (baseStyles) => ({
      ...baseStyles,
      borderRadius: '14px',
      boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02)',
    }),
    clearIndicator: (baseStyles) => ({
      ...baseStyles,
      display: 'none',
    }),
    dropdownIndicator: (baseStyles) => ({
      ...baseStyles,
      color: '#121417',
      '&:hover': {
        color: '#121417',
      },
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
  };

  return (
    <div className={css.searchContainer}>
      <div className={css.selectContainer}>
        <label htmlFor="price" className={css.labelSelect}>
          Price
        </label>
        <Select
          options={prices}
          placeholder={'$/hour'}
          onChange={handleChange}
          maxMenuHeight={272}
          isClearable={true}
          styles={customStyles}
        />
      </div>
    </div>
  );
};
