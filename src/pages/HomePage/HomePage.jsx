import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import girlPng from '../../assets/img/hero.png';
import girlWebp from '../../assets/img/hero.webp';
import girlPng2x from '../../assets/img/hero@2x.png';
import girlWebp2x from '../../assets/img/hero@2x.webp';
import css from './HomePage.module.css';
import { nanoid } from 'nanoid';

const HomePage = () => {
  useAuth();

  const tutorDetails = [
    { value: '32,000 +', details: 'Experienced tutors' },
    { value: '300,000 +', details: '5-star tutor reviews' },
    { value: '120 +', details: 'Subjects taught' },
    { value: '200 +', details: 'Tutor nationalities' },
  ];

  useEffect(() => {
    document.body.classList.add('home-page');

    return () => {
      document.body.classList.remove('home-page');
    };
  }, []);

  return (
    <main>
      <div className={css.heroWrp}>
        <div className={css.heroDesc}>
          <h1 className={css.heroTitle}>
            Unlock your potential with the best{' '}
            <span className={css.heroSmall}>language</span> tutors
          </h1>
          <p className={css.heroText}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <Link className={css.heroLink} to="/teachers">
            Get started
          </Link>
        </div>
        <div>
          <picture>
            <source
              type="image/webp"
              srcSet={`${girlWebp} 1x, ${girlWebp2x} 2x`}
            />
            <source
              type="image/png"
              srcSet={`${girlPng} 1x, ${girlPng2x} 2x`}
            />
            <img
              className={css.heroImg}
              srcSet={girlPng}
              alt="Girl with notebook"
            />
          </picture>
        </div>
      </div>
      <ul className={css.heroList}>
        {tutorDetails.map(({ value, details }) => (
          <li className={css.heroItem} key={nanoid()}>
            <p className={css.heroTotal}>{value}</p>
            <p className={css.heroBenefits}>{details}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default HomePage;
