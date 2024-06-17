import { useState } from 'react';
import { LoadData } from '../../components/LoadData/LoadData';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { useAuth } from '../../hooks/use-auth';
import css from './TeachersPage.module.css';

const TeachersPage = () => {
  useAuth();

  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(null);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const handlePriceChange = (price) => {
    setSelectedPrice(price);
  };

  return (
    <main className={css.main}>
      <SearchBar
        setLanguage={handleLanguageChange}
        setPrice={handlePriceChange}
      />
      <LoadData
        selectedLanguage={selectedLanguage}
        selectedPrice={selectedPrice}
      />
    </main>
  );
};

export default TeachersPage;
