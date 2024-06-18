// import { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { useAuth } from '../../hooks/use-auth';
// import { PopUp } from '../PopUp/PopUp';
// import { SignUp } from '../SignUp/SignUp';
// import { Login } from '../Login/Login';
// import Logo from '../Logo/Logo';
// import { ReactComponent as IconLogin } from 'assets/icons/log-in.svg';
// import { ReactComponent as IconLogout } from 'assets/icons/log-out.svg';
// import css from './Header.module.css';

// export const Header = () => {
//   const { isAuth, name, logout } = useAuth();
//   const [showLoginPopup, setShowLoginPopup] = useState(false);
//   const [showRegisterPopup, setShowRegisterPopup] = useState(false);

//   useEffect(() => {
//     if (isAuth) {
//       setShowLoginPopup(false);
//       setShowRegisterPopup(false);
//     }
//   }, [isAuth]);

//   return (
//     <header className={css.header}>
//       <Logo />
//       <nav className={css.headerNav}>
//         <NavLink
//           to="/home"
//           className={({ isActive }) =>
//             `${css.headerLink} ${isActive ? css.active : ''}`
//           }
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/teachers"
//           className={({ isActive }) =>
//             `${css.headerLink} ${isActive ? css.active : ''}`
//           }
//         >
//           Teachers
//         </NavLink>
//         {isAuth ? (
//           <NavLink
//             to="/favorites"
//             className={({ isActive }) =>
//               `${css.headerLink} ${isActive ? css.active : ''}`
//             }
//           >
//             Favorites
//           </NavLink>
//         ) : null}
//       </nav>
//       <div className={css.headerSignup}>
//         {isAuth ? (
//           <>
//             <button className={css.headerBtn} onClick={logout}>
//               <IconLogout className={css.headerBtnIcon} />
//               Log out
//             </button>
//             <p className={css.headerBtnReg}>{name}</p>
//           </>
//         ) : (
//           <>
//             <button
//               className={css.headerBtn}
//               type="button"
//               onClick={() => setShowLoginPopup(true)}
//             >
//               <IconLogin className={css.headerBtnIcon} />
//               Log in
//             </button>
//             <button
//               className={`${css.headerBtn} ${css.headerBtnReg}`}
//               type="button"
//               onClick={() => setShowRegisterPopup(true)}
//             >
//               Registration
//             </button>
//           </>
//         )}
//       </div>
//       {showLoginPopup && (
//         <PopUp setIsShowModal={setShowLoginPopup}>
//           <Login />
//         </PopUp>
//       )}
//       {showRegisterPopup && (
//         <PopUp setIsShowModal={setShowRegisterPopup}>
//           <SignUp />
//         </PopUp>
//       )}
//     </header>
//   );
// };

import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import { PopUp } from '../PopUp/PopUp';
import { SignUp } from '../SignUp/SignUp';
import { Login } from '../Login/Login';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import Logo from '../Logo/Logo';
import { ReactComponent as IconLogin } from 'assets/icons/log-in.svg';
import { ReactComponent as IconLogout } from 'assets/icons/log-out.svg';
import { ReactComponent as BurgerIcon } from 'assets/icons/burger.svg';
import css from './Header.module.css';

export const Header = () => {
  const { isAuth, name, logout } = useAuth();
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  useEffect(() => {
    if (isAuth) {
      setShowLoginPopup(false);
      setShowRegisterPopup(false);
    }
  }, [isAuth]);

  return (
    <header className={css.header}>
      <Logo />
      <nav className={css.headerNav}>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `${css.headerLink} ${isActive ? css.active : ''}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/teachers"
          className={({ isActive }) =>
            `${css.headerLink} ${isActive ? css.active : ''}`
          }
        >
          Teachers
        </NavLink>
        {isAuth ? (
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `${css.headerLink} ${isActive ? css.active : ''}`
            }
          >
            Favorites
          </NavLink>
        ) : null}
      </nav>
      <div className={css.headerSignup}>
        {isAuth ? (
          <>
            <button className={css.headerBtn} onClick={logout}>
              <IconLogout className={css.headerBtnIcon} />
              Log out
            </button>
            <p className={css.headerBtnReg}>{name}</p>
          </>
        ) : (
          <>
            <button
              className={css.headerBtn}
              type="button"
              onClick={() => setShowLoginPopup(true)}
            >
              <IconLogin className={css.headerBtnIcon} />
              Log in
            </button>
            <button
              className={`${css.headerBtn} ${css.headerBtnReg}`}
              type="button"
              onClick={() => setShowRegisterPopup(true)}
            >
              Registration
            </button>
          </>
        )}
      </div>
      <button
        className={css.burgerButton}
        onClick={() => setShowBurgerMenu(!showBurgerMenu)}
      >
        <BurgerIcon />
      </button>
      {showBurgerMenu && (
        <BurgerMenu
          show={showBurgerMenu}
          onClose={() => setShowBurgerMenu(false)}
          setShowLoginPopup={setShowLoginPopup}
          setShowRegisterPopup={setShowRegisterPopup}
          logout={logout}
          isAuth={isAuth}
          name={name}
        />
      )}
      {showLoginPopup && (
        <PopUp setIsShowModal={setShowLoginPopup}>
          <Login />
        </PopUp>
      )}
      {showRegisterPopup && (
        <PopUp setIsShowModal={setShowRegisterPopup}>
          <SignUp />
        </PopUp>
      )}
    </header>
  );
};
