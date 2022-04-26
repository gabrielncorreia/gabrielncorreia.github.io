/* eslint-disable react/react-in-jsx-scope */
import './projects.css';
import artWithPixels from '../images/art-with-pixels.gif';
import gif1 from '../images/iai0p5j9cuszzpqxdmws.gif';
// import gif2 from '../images/1444070216325387.gif';

export default function Projects() {
  return (
    <main id="main-projects-div">
      <header id="my-projects-header">
        <h1>My Projects</h1>
        <h4>Aqui estão alguns dos projetos que fiz ao longo da Trybe.</h4>
      </header>
      <div id="gifs-div">
        <img src={gif1} alt="" />
        <h4>Page under construction!!</h4>
        <hr />
      </div>
      <section id="projects-section">
        <div className="projetos-div">
          <h3>Projetos do Módulo de Fundamento</h3>
          <div className="projetos-fundamento-div">
            <div className="projeto-fundamento-1">
              <img src={artWithPixels} width="250px" alt="" />
              <p>O objetivo desse trabalho...</p>
            </div>
            <div className="projeto-fundamento-1">
              <img src={artWithPixels} width="250px" alt="" />
              <p>O objetivo desse trabalho...</p>
            </div>
          </div>
        </div>
        <div className="projetos-div">
          <h3>Projetos do Módulo de Front-End</h3>
          <div className="projetos-fundamento-div">
            <div className="projeto-fundamento-1">
              <img src={artWithPixels} width="250px" alt="" />
              <p>O objetivo desse trabalho...</p>
            </div>
            <div className="projeto-fundamento-1">
              <img src={artWithPixels} width="250px" alt="" />
              <p>O objetivo desse trabalho...</p>
            </div>
          </div>
        </div>
        <div className="projetos-div">
          <h3>Projetos do Módulo de Back-End</h3>
          <div className="projetos-fundamento-div">
            <div className="projeto-fundamento-1">
              <img src={artWithPixels} width="250px" alt="" />
              <p>O objetivo desse trabalho...</p>
            </div>
            <div className="projeto-fundamento-1">
              <img src={artWithPixels} width="250px" alt="" />
              <p>O objetivo desse trabalho...</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
