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

import { prices } from '../../../lib/info';
import css from './SelectPrice.module.css';

export const SelectPrice = ({ setPrice }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    setPrice(value ? Number(value) : null);
  };

  return (
    <div className={css.searchContainer}>
      <div className={css.selectContainer}>
        <label htmlFor="price" className={css.labelSelect}>
          Price
        </label>
        <select
          id="price"
          className={css.customSelect}
          onChange={handleChange}
          defaultValue=""
        >
          <option value="" disabled>
            $/hour
          </option>
          {prices.map((price) => (
            <option key={price.value} value={price.value}>
              {price.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

// import { prices } from '../../../lib/info';
// import css from './SelectPrice.module.css';

// export const SelectPrice = ({ setPrice }) => {
//   const handleChange = (e) => {
//     const value = e.target.value;
//     // Assuming your prices array contains objects with 'min' and 'max' properties
//     const selectedPriceRange = prices.find((price) => price.value === value);
//     setPrice(
//       selectedPriceRange
//         ? { min: selectedPriceRange.min, max: selectedPriceRange.max }
//         : null
//     );
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
