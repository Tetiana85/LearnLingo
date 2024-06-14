import { useCallback, useEffect } from 'react';
import { PopupContainer } from '../../PopupContainer';
import { CloseBtn } from '../Buttons/CloseBtn';
import css from './PopUp.module.css';

export const PopUp = ({ children, setIsShowModal }) => {
    useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleKeyDown = useCallback(
        (evt) => {
        if (evt.code === 'Escape') {
            setIsShowModal(false);
        }
        },
        [setIsShowModal]
    );
    
    const handleOverlayClick = useCallback(
        (evt) => {
        if (evt.target === evt.currentTarget) {
            setIsShowModal(false);
        }
        },
    [setIsShowModal]
  );

    return (
        <PopupContainer>
            <div className={css.backdrop} onClick={handleOverlayClick}>
                <div className={css.popup}>
                    <CloseBtn closeModal={() => setIsShowModal(false)} />
                    {children}
                </div>
            </div>
        </PopupContainer>
    )
}
