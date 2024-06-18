import { NavLink } from 'react-router-dom';
import { ReactComponent as IconLogin } from 'assets/icons/log-in.svg';
import { ReactComponent as IconLogout } from 'assets/icons/log-out.svg';
import css from './BurgerMenu.module.css';

export const BurgerMenu = ({
  show,
  onClose,
  setShowLoginPopup,
  setShowRegisterPopup,
  logout,
  isAuth,
  name,
}) => {
  return (
    <div className={`${css.burgerMenu} ${show ? css.show : ''}`}>
      <div className={css.burgerHeader}>
        <button className={css.closeButton} onClick={onClose}>
          ✖
        </button>
      </div>
      <nav className={css.nav}>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `${css.burgerLink} ${isActive ? css.active : ''}`
          }
          onClick={onClose}
        >
          Home
        </NavLink>
        <NavLink
          to="/teachers"
          className={({ isActive }) =>
            `${css.burgerLink} ${isActive ? css.active : ''}`
          }
          onClick={onClose}
        >
          Teachers
        </NavLink>
        {isAuth && (
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `${css.burgerLink} ${isActive ? css.active : ''}`
            }
            onClick={onClose}
          >
            Favorites
          </NavLink>
        )}
      </nav>
      <div className={css.authButtons}>
        {isAuth ? (
          <>
            <button
              className={css.burgerBtn}
              onClick={() => {
                logout();
                onClose();
              }}
            >
              <IconLogout className={css.burgerBtnIcon} />
              Log out
            </button>
            <p className={css.burgerBtnReg}>{name}</p>
          </>
        ) : (
          <>
            <button
              className={css.burgerBtn}
              type="button"
              onClick={() => {
                setShowLoginPopup(true);
                onClose();
              }}
            >
              <IconLogin className={css.burgerBtnIcon} />
              Log in
            </button>
            <button
              className={`${css.burgerBtn} ${css.burgerBtnReg}`}
              type="button"
              onClick={() => {
                setShowRegisterPopup(true);
                onClose();
              }}
            >
              Registration
            </button>
          </>
        )}
      </div>
    </div>
  );
};
