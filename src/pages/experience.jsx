/* eslint-disable react/react-in-jsx-scope */
import { useTranslation } from 'react-i18next';
import './projects.css';
import Bar from '../components/Bar';
import Tile from '../components/Tile';

// Westpoint projects, largest first. Ids are translation keys under experience.items.
const WESTPOINT = [
  {
    id: 'civic',
    tags: [
      'Next.js', 'TypeScript', 'GraphQL', 'Node.js', 'MongoDB', 'PostgreSQL / PostGIS', 'GeoJSON',
      'AWS EKS', 'Kubernetes', 'Helm', 'Docker', 'Lambda', 'SQS', 'SNS', 'Step Functions',
    ],
  },
  {
    id: 'internal',
    tags: [
      'React', 'Next.js', 'Node.js', 'Express', 'C# / .NET', 'Terraform', 'AWS CDK', 'Lambda',
      'API Gateway', 'VPC', 'Transit Gateway', 'DynamoDB', 'Azure', 'Cosmos DB', 'OAuth',
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
  const list = (id, key) => t(`experience.items.${id}.${key}`, { returnObjects: true });
  const bullets = (id) => (
    <ul className="bullets">
      {list(id, 'bullets').map((bullet) => <li key={bullet}>{bullet}</li>)}
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

          <h3 className="strengths-label">{t('experience.highlightsLabel')}</h3>
          <ul className="highlight-list">
            {list('westpoint', 'highlights').map(({ title, text }) => (
              <li key={title}>
                <h4>{title}</h4>
                <p>{text}</p>
              </li>
            ))}
          </ul>

          {WESTPOINT.map(({ id, tags }) => (
            <section key={id} className="work-project" aria-labelledby={`work-${id}`}>
              <div className="work-project-head">
                <h3 id={`work-${id}`}>{item(id, 'title')}</h3>
                <p className="work-meta">{item(id, 'meta')}</p>
                <p>{item(id, 'summary')}</p>
              </div>
              {bullets(id)}
              <div className="work-project-stack">
                <h4 className="strengths-label">{t('experience.stackLabel')}</h4>
                {tagList(tags)}
              </div>
            </section>
          ))}
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
