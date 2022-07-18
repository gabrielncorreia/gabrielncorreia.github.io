/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import mailIcon from './images/gmailicon.png';

function App() {
  const [clock, setClock] = useState(new Date());

  function refreshClock() {
    setClock(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <main className="App">
      <div id="main-div">
        <div id="main-header-div">
          <h4>Gabriel N. Correia - Portfolio</h4>
          <h4>{clock.toLocaleTimeString()}</h4>
        </div>
        <div id="img-textbox-div">
          <div id="img-div" />
          <div id="header-textbox-div">
            <div id="header-div"><h4>I use arch btw</h4></div>
            <div id="textbox-div">
              <div id="about-me-div">
                <h4>About Me</h4>
                <p>
                  Sou estudante de Desenvolvimento de Software Web na
                  Trybe e graduado em Ciências Econômicas pelo Moura
                  Lacerda.
                  O meu trabalho de conclusão de curso em ciências
                  econômicas, sobre Bitcoin e Blockchain, foi o que
                  me levou a me apaixonar por programação e entender a
                  importância dessa habilidade para o futuro.
                </p>
              </div>
              <div id="skills-div">
                <h4>Technologies I Use</h4>
                <div id="skills-icon-div">
                  <img alt="react" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
                  <img alt="js" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
                  <img alt="typescript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                  <img alt="HTML" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                  <img alt="CSS" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                  {/* <img alt="Python" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" /> */}
                  <img alt="nodejs" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                  <img alt="mysql" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                  <img alt="jest" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
                  <img alt="linux" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
                  <img alt="docker" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
                  <i className="devicon-express-original" />
                  <img alt="git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                  <img alt="redux" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                  <img alt="sequelize" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" />
                  <img alt="vscode" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
                </div>
              </div>
              <div id="check-projects-div">
                <h4>Check out some of my projects</h4>
                <div id="button-div">
                  <Link to="/projects">
                    <button type="button" id="my-projects-button">My Projects Page</button>
                  </Link>
                </div>
              </div>
              <div id="contact-div">
                <h4>How to contact me</h4>
                <div id="icons-div">
                  <a href="mailto:gncorreia@proton.me" target="_blank" rel="noreferrer">
                    <img src={mailIcon} alt="protonmail" srcSet="" />
                  </a>
                  <a href="https://www.linkedin.com/in/gncorreia/" target="_blank" rel="noreferrer">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="linkedin" srcSet="" />
                  </a>
                  <a href="https://github.com/gncorreia" target="_blank" rel="noreferrer">
                    <i className="devicon-github-original" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
