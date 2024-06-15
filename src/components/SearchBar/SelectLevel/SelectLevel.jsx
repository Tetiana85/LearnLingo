import { levels } from '../../../lib/info';
import css from './SelectLevel.module.css';

export const SelectLevel = ({ setLvl }) => {

  const handleChange = (e) => {
    const value = e.target.value;
    setLvl(value ? value : null);
  };

  return (
    <div className={css.searchContainer}>
      <div className={css.selectContainer}>
        <label htmlFor="level" className={css.labelSelect}>Level of knowledge</label>
        <select
          id="level"
          className={css.customSelect}
          onChange={handleChange}
          defaultValue=""
        >
          <option value="" disabled>Level</option>
          {levels.map((level) => (
            <option key={level.value} value={level.value} className={css.customOption}>
              {level.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

