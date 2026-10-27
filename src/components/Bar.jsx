/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../i18n';

export default function Bar() {
  const { t, i18n } = useTranslation();
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setClock(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const locale = i18n.language === 'pt' ? 'pt-BR' : 'en-US';

  return (
    <header className="bar">
      <nav className="workspaces" aria-label={t('bar.pages')}>
        <NavLink to="/" end>
          1
          <span>{t('bar.home')}</span>
        </NavLink>
        <NavLink to="/experience">
          2
          <span>{t('bar.experience')}</span>
        </NavLink>
        <NavLink to="/projects">
          3
          <span>{t('bar.projects')}</span>
        </NavLink>
      </nav>
      <p className="bar-motto">I use arch btw</p>
      <div className="bar-right">
        <div className="lang-switch" role="group" aria-label={t('bar.language')}>
          {LANGUAGES.map((lang) => (
            <button
              key={lang}
              type="button"
              lang={lang === 'pt' ? 'pt-BR' : 'en'}
              aria-pressed={i18n.language === lang}
              onClick={() => i18n.changeLanguage(lang)}
            >
              {lang}
            </button>
          ))}
        </div>
        <time className="bar-clock" dateTime={clock.toISOString()}>
          {clock.toLocaleTimeString(locale)}
        </time>
      </div>
    </header>
  );
}
