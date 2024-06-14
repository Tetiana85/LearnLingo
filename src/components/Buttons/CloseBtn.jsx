import { ReactComponent as IconClose } from 'assets/icons/close-btn.svg'
import css from './BtnStyles.module.css';

export const CloseBtn = ({ closeModal }) => {
  return (
    <button className={css.btnCross} type="button" onClick={closeModal}>
      <IconClose />
    </button>
  );
};