/* eslint-disable react/react-in-jsx-scope */
import { useTranslation } from 'react-i18next';
import './projects.css';
import Bar from '../components/Bar';
import Tile from '../components/Tile';

// Most recent and largest first. Ids are translation keys under experience.items.
const WORK = [
  {
    id: 'civic',
    tags: ['Next.js', 'TypeScript', 'GraphQL', 'MongoDB', 'PostgreSQL / PostGIS', 'AWS EKS'],
    featured: true,
  },
  {
    id: 'migration',
    tags: ['C# / .NET', 'REST APIs', 'OAuth', 'AWS CDK', 'DynamoDB', 'Azure', 'Cosmos DB', 'WooCommerce', 'Shopify'],
  },
  {
    id: 'cloud',
    tags: ['Terraform', 'AWS CDK', 'EKS', 'Helm', 'Docker', 'Lambda', 'VPC', 'Step Functions', 'Azure'],
    featured: true,
  },
  { id: 'independent', tags: ['PixiJS v8', 'WebGL', 'LLM', 'WebExtensions', 'Firefox Add-ons'] },
];

export default function Experience() {
  const { t } = useTranslation();

  return (
    <div className="desktop">
      <Bar />
      <main className="tiles projects">
        <Tile title={t('experience.title')} className="tile-intro">
          <h1 className="projects-heading">{t('experience.heading')}</h1>
          <p>{t('experience.intro')}</p>
          <h2 className="strengths-label">{t('experience.strengthsLabel')}</h2>
          <ul className="tags strengths">
            {t('experience.strengths', { returnObjects: true }).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Tile>

        {WORK.map(({ id, tags, featured }) => {
          const item = (key) => t(`experience.items.${id}.${key}`);
          return (
            <Tile
              key={id}
              title={item('file')}
              className={`tile-project tile-work${featured ? ' tile-featured' : ''}`}
            >
              <h2>{item('title')}</h2>
              {(item('period') || item('role')) && (
                <p className="work-meta">
                  {item('role') && <span>{item('role')}</span>}
                  {item('period') && <span>{item('period')}</span>}
                </p>
              )}
              <p>{item('summary')}</p>
              <ul className="bullets">
                {t(`experience.items.${id}.bullets`, { returnObjects: true }).map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {tags.length > 0 && (
                <ul className="tags">
                  {tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              )}
            </Tile>
          );
        })}
      </main>
    </div>
  );
}
