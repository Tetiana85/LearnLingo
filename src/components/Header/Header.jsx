import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuth, signOut } from "firebase/auth";
import { useAuth } from '../../hooks/use-auth';
import { removeUser } from '../../redux/auth/auth.reducer';
import { PopUp } from '../PopUp/PopUp';
import { SignUp } from "../SignUp/SignUp";
import { Login } from "../Login/Login";
import Logo from '../Logo/Logo';
import { ReactComponent as IconLogin } from 'assets/icons/log-in.svg'
import { ReactComponent as IconLogout } from 'assets/icons/log-out.svg'
import css from './Header.module.css';

export const Header = () => {
  const dispatch = useDispatch();
  const { isAuth, name } = useAuth();
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  
  const handleClick = async () => { 
    const auth = getAuth();
    dispatch(removeUser());
    await signOut(auth);
  }

  useEffect(() => { 
    if (isAuth) { 
      setShowLoginPopup(false);
      setShowRegisterPopup(false);
    }
  },[isAuth])

  return (
    <header className={css.header}>
      <Logo/>
      <nav className={css.headerNav}>
        <NavLink
          to="/home"
          className={({isActive}) => `${css.headerLink} ${isActive ? css.active : ''}`}>
          Home
        </NavLink>
        <NavLink
          to="/teachers"
          className={({isActive}) => `${css.headerLink} ${isActive ? css.active : ''}`}>
          Teachers
        </NavLink>
        {isAuth ?
          <NavLink
            to="/favorites"
            className={({ isActive }) => `${css.headerLink} ${isActive ? css.active : ''}`}>
            Favorites
          </NavLink> : null}
      </nav>
      <div className={css.headerSignup}>
        {isAuth
          ? <>
              <button className={css.headerBtn} onClick={handleClick}>
                <IconLogout className={css.headerBtnIcon} />
                Log out
              </button>
              <p className={css.headerBtnReg}>{name}</p>
            </>
          : <>
            <button className={css.headerBtn} type='button' onClick={() => setShowLoginPopup(true)}>
              <IconLogin className={css.headerBtnIcon}/>
              Log in
            </button>
            <button className={`${css.headerBtn} ${css.headerBtnReg}`} type='button' onClick={() => setShowRegisterPopup(true)}>Registration</button>
          </>}
      </div>
      {showLoginPopup && <PopUp setIsShowModal={setShowLoginPopup}><Login/></PopUp>}
      {showRegisterPopup && <PopUp setIsShowModal={setShowRegisterPopup}><SignUp/></PopUp>}
    </header>
  );
};