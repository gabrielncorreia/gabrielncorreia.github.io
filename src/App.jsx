/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './App.css';
import Bar from './components/Bar';
import Tile from './components/Tile';
import PixelPortrait from './components/PixelPortrait';
import awsIcon from './images/aws.svg';
import helmIcon from './images/helm.svg';
import pixiIcon from './images/pixijs.svg';
import localstackIcon from './images/localstack.png';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';
const icon = (path) => `${DEVICON}/${path}.svg`;

// iconClass: devicon font icons, for logos that are black and need the text color.
const STACK = [
  {
    group: 'frontend',
    items: [
      { name: 'React', icon: icon('react/react-original') },
      { name: 'Next.js', iconClass: 'devicon-nextjs-plain' },
      { name: 'TypeScript', icon: icon('typescript/typescript-original') },
      { name: 'JavaScript', icon: icon('javascript/javascript-plain') },
      { name: 'Vite', icon: icon('vitejs/vitejs-original') },
      { name: 'PixiJS', icon: pixiIcon },
    ],
  },
  {
    group: 'backend',
    items: [
      { name: 'Node.js', icon: icon('nodejs/nodejs-original') },
      { name: 'Express', iconClass: 'devicon-express-original' },
      { name: 'GraphQL', icon: icon('graphql/graphql-plain') },
      { name: 'C# / .NET', icon: icon('csharp/csharp-original') },
    ],
  },
  {
    group: 'data',
    items: [
      { name: 'MongoDB', icon: icon('mongodb/mongodb-original') },
      { name: 'PostgreSQL / PostGIS', icon: icon('postgresql/postgresql-original') },
      { name: 'DynamoDB', icon: icon('dynamodb/dynamodb-original') },
    ],
  },
  {
    group: 'cloud',
    items: [
      // Local copy with white lettering; devicon's dark wordmark vanishes on the panel.
      { name: 'AWS', icon: awsIcon },
      { name: 'Azure', icon: icon('azure/azure-original') },
    ],
  },
  {
    group: 'devops',
    items: [
      { name: 'Terraform', icon: icon('terraform/terraform-original') },
      // CDK has no logo of its own; AWS docs brand it with the AWS mark.
      { name: 'AWS CDK', icon: awsIcon },
      { name: 'Docker', icon: icon('docker/docker-original') },
      { name: 'Kubernetes', icon: icon('kubernetes/kubernetes-plain') },
      // Recolored light: the official navy disappears on the panel.
      { name: 'Helm', icon: helmIcon },
      { name: 'LocalStack', icon: localstackIcon },
      { name: 'Git', icon: icon('git/git-original') },
      { name: 'Linux', icon: icon('linux/linux-original') },
    ],
  },
  {
    group: 'mobile',
    items: [
      { name: 'React Native', icon: icon('reactnative/reactnative-original') },
      { name: 'Capacitor', icon: icon('capacitor/capacitor-original') },
    ],
  },
];

const CERTIFICATIONS = [
  { name: 'AWS Certified Developer – Associate', code: 'DVA-C02', icon: awsIcon },
  { name: 'Microsoft Certified: Azure Developer Associate', code: 'AZ-204', icon: icon('azure/azure-original') },
];

const CONTACTS = [
  { label: 'email', text: 'gabrielncorreia@proton.me', href: 'mailto:gabrielncorreia@proton.me' },
  { label: 'linkedin', text: 'in/gabrielncorreia', href: 'https://www.linkedin.com/in/gabrielncorreia/' },
  { label: 'github', text: 'gabrielncorreia', href: 'https://github.com/gabrielncorreia' },
];

function App() {
  const { t } = useTranslation();

  return (
    <div className="desktop">
      <Bar />
      <main className="tiles home">
        <Tile title={t('home.portraitTitle')} className="tile-portrait">
          <PixelPortrait />
        </Tile>

        <Tile title={t('home.aboutTitle')} className="tile-about">
          <h1 className="hero-name">Gabriel N. Correia</h1>
          <p className="hero-role">{t('home.role')}</p>
          <p className="hero-bio">{t('home.bio')}</p>
          <div className="hero-actions">
            <Link className="pixel-button" to="/experience">{t('home.ctaExperience')}</Link>
            <Link className="text-link" to="/projects">{t('home.cta')}</Link>
          </div>
        </Tile>

        <Tile title={t('home.stackTitle')} className="tile-stack">
          <div className="stack-groups">
            {STACK.map(({ group, items }) => (
              <section key={group} className="stack-group">
                <h2>{t(`home.stackGroups.${group}`)}</h2>
                <ul>
                  {items.map(({ name, icon: src, iconClass }) => (
                    <li key={name}>
                      {src && <img src={src} alt="" width="18" height="18" />}
                      {iconClass && <i className={iconClass} aria-hidden="true" />}
                      {name}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </Tile>

        <Tile title={t('home.certsTitle')} className="tile-certs">
          <ul className="cert-list">
            {CERTIFICATIONS.map(({ name, code, icon: src }) => (
              <li key={code}>
                <img src={src} alt="" width="32" height="32" />
                <div>
                  <p>{name}</p>
                  <p className="cert-code">{code}</p>
                </div>
              </li>
            ))}
          </ul>
        </Tile>

        <Tile title={t('home.contactTitle')} className="tile-contact">
          <ul className="contact-list">
            {CONTACTS.map(({ label, text, href }) => (
              <li key={label}>
                <span>{label}</span>
                <a href={href} target="_blank" rel="noreferrer">{text}</a>
              </li>
            ))}
          </ul>
        </Tile>
      </main>
    </div>
  );
}

export default App;
