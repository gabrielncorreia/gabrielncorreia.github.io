/* eslint-disable react/react-in-jsx-scope */
import { Trans, useTranslation } from 'react-i18next';
import './projects.css';
import Bar from '../components/Bar';
import Tile from '../components/Tile';

const GITHUB = 'https://github.com/gabrielncorreia';

// Strongest first. `repo` is the GitHub repo name and the translation key;
// `live` means it is deployed to GitHub Pages at gabrielncorreia.github.io/<repo>.
const PROJECTS = [
  {
    repo: 'TFC',
    name: 'Trybe Futebol Clube',
    tags: ['TypeScript', 'Node.js', 'Express', 'Sequelize', 'MySQL', 'JWT', 'Docker', 'Mocha'],
    featured: true,
  },
  {
    repo: 'recipe-app', name: 'Recipes App', tags: ['React', 'Hooks', 'Context API'], live: true,
  },
  {
    repo: 'trivia', name: 'Trivia', tags: ['React', 'Redux'], live: true,
  },
  { repo: 'starwars-planets', name: 'Star Wars Planets', tags: ['React', 'Hooks', 'Context API'] },
  {
    repo: 'trybewallet', name: 'TrybeWallet', tags: ['React', 'Redux'], live: true,
  },
  { repo: 'frontend-online-store', name: 'Front-end Online Store', tags: ['React'] },
  {
    repo: 'trybetunes', name: 'TrybeTunes', tags: ['React'], live: true,
  },
  { repo: 'shopping-cart', name: 'Shopping Cart', tags: ['JavaScript'] },
];

// Personal work without public repos yet; ids are translation keys under projects.side.
const SIDE_PROJECTS = [
  { id: 'ecclesia', tags: ['PixiJS v8', 'Vite', 'TypeScript', 'React'] },
  { id: 'crivo', tags: ['LLM', 'WebExtensions', 'Firefox', 'Chromium'] },
  { id: 'instagram', tags: ['WebExtensions', 'Firefox Add-ons'] },
];

export default function Projects() {
  const { t } = useTranslation();

  return (
    <div className="desktop">
      <Bar />
      <main className="tiles projects">
        <Tile title={t('projects.title')} className="tile-intro">
          <h1 className="projects-heading">{t('projects.heading')}</h1>
          <p>
            <Trans
              i18nKey="projects.intro"
              components={{
                github: <a href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>,
              }}
            />
          </p>
        </Tile>

        <h2 className="section-heading">{t('projects.trybeHeading')}</h2>
        {PROJECTS.map(({
          repo, name, tags, featured, live,
        }) => (
          <Tile
            key={repo}
            title={repo}
            className={`tile-project${featured ? ' tile-featured' : ''}`}
          >
            <h2>{name}</h2>
            <p>{t(`projects.items.${repo}`)}</p>
            <ul className="tags">
              {tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
            <div className="project-links">
              {live && (
                <a href={`https://gabrielncorreia.github.io/${repo}/`} target="_blank" rel="noreferrer">
                  {t('projects.liveDemo')}
                </a>
              )}
              <a href={`${GITHUB}/${repo}`} target="_blank" rel="noreferrer">
                {t('projects.viewCode')}
              </a>
            </div>
          </Tile>
        ))}

        <h2 className="section-heading">{t('projects.sideHeading')}</h2>
        {SIDE_PROJECTS.map(({ id, tags }) => (
          <Tile key={id} title={id} className="tile-project">
            <h2>{t(`projects.side.${id}.name`)}</h2>
            <p>{t(`projects.side.${id}.about`)}</p>
            <ul className="tags">
              {tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </Tile>
        ))}
      </main>
    </div>
  );
}
