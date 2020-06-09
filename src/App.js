import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function App() {
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }

  return (
    <div className="App">
        <nav style={{ width: '100%', padding: '2rem 0', backgroundColor:'gray' }}>
        <button onClick={() => handleClick('ru')}>ru</button>
      <button onClick={() => handleClick('en')}>en</button>
      <h1>{t('Welcome to React')}</h1>
        </nav>
        <header className="App-header"> 
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <h3> {t('Welcome.1')} </h3> <h3> {t('To.1')} </h3>
          </p>
        </header>
    </div>
  );
}

export default App;