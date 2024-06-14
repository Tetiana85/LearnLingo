import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Loader } from '../Loader/Loader';

const SharedLayout = () => {
  return (
    <div className='container'>
      <Header />
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
      <Footer/>
    </div>
  );
};

export default SharedLayout;
