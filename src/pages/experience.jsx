/* eslint-disable react/react-in-jsx-scope */
import { useTranslation } from 'react-i18next';
import './projects.css';
import Bar from '../components/Bar';
import Tile from '../components/Tile';

// Work done at Westpoint, largest first. Ids are translation keys under experience.items.
const WESTPOINT = [
  {
    id: 'civic',
    tags: [
      'Next.js', 'TypeScript', 'GraphQL', 'MongoDB', 'PostgreSQL / PostGIS', 'GeoJSON',
      'AWS EKS', 'Kubernetes', 'Helm', 'Docker', 'Lambda', 'SQS', 'SNS', 'Step Functions',
    ],
  },
  {
    id: 'internal',
    tags: [
      'Next.js', 'React', 'C# / .NET', 'Node.js', 'Express', 'Terraform', 'AWS CDK',
      'Lambda', 'API Gateway', 'VPC', 'DynamoDB', 'Step Functions', 'Azure', 'Cosmos DB',
    ],
  },
];

const INDEPENDENT_TAGS = ['PixiJS v8', 'WebGL', 'Capacitor', 'LLM', 'WebExtensions', 'Cloudflare Workers', 'Firefox Add-ons'];

const tagList = (tags) => (
  <ul className="tags">
    {tags.map((tag) => <li key={tag}>{tag}</li>)}
  </ul>
);

export default function Experience() {
  const { t } = useTranslation();
  const item = (id, key) => t(`experience.items.${id}.${key}`);
  const bullets = (id) => (
    <ul className="bullets">
      {t(`experience.items.${id}.bullets`, { returnObjects: true }).map((bullet) => (
        <li key={bullet}>{bullet}</li>
      ))}
    </ul>
  );

  return (
    <div className="desktop">
      <Bar />
      <main className="tiles projects">
        <Tile title={t('experience.title')} className="tile-intro">
          <h1 className="projects-heading">{t('experience.heading')}</h1>
          <p>{t('experience.intro')}</p>
          <h2 className="strengths-label">{t('experience.strengthsLabel')}</h2>
          <ul className="tags strengths">
            {t('experience.strengths', { returnObjects: true }).map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>
        </Tile>

        <Tile title={item('westpoint', 'file')} className="tile-project tile-work tile-featured tile-wide">
          <h2>{item('westpoint', 'title')}</h2>
          <p className="work-meta">
            <span>{item('westpoint', 'role')}</span>
            <span>{item('westpoint', 'period')}</span>
          </p>
          <p>{item('westpoint', 'summary')}</p>
          <div className="work-sections">
            {WESTPOINT.map(({ id, tags }) => (
              <section key={id} className="work-section">
                <h3>{item(id, 'title')}</h3>
                <p>{item(id, 'summary')}</p>
                {bullets(id)}
                {tagList(tags)}
              </section>
            ))}
          </div>
        </Tile>

        <Tile title={item('independent', 'file')} className="tile-project tile-work tile-wide">
          <h2>{item('independent', 'title')}</h2>
          <p>{item('independent', 'summary')}</p>
          {bullets('independent')}
          {tagList(INDEPENDENT_TAGS)}
        </Tile>
      </main>
    </div>
  );
}
