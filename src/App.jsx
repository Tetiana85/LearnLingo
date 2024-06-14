import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { useAuth } from './hooks/use-auth';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const TeachersPage = lazy(() => import('./pages/TeachersPage/TeachersPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));

function App() {
  const location = useLocation();
  const { isAuth } = useAuth();

  if(location.pathname === "/") {
    location.pathname = "/home";
  }

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        {isAuth ? (
          <Route path="/favorites" element={<FavoritesPage />} />
        ) : (
          <Route path="/home" element={ <Navigate redirectTo="/home" />}/>
        )}
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
