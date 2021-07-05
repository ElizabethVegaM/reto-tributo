import './App.css';
import { timeline } from './timeline';
import ListItem from './ListItem';

function App() {
  const switchButton = {
    

  }
  return (
    <div id="container" className="light-theme">
      <header id="header-container">
        <h1>Marie Curie Tribute Page</h1>
        <p>The first woman to win a Nobel Prize. She made many discoveries that led to what we call modern medicine.</p>
        <button id="theme-button" className="dark-theme">Dark</button>
      </header>
      <main id="main-section">
        <figure id="img-container">
          <img src="http://www.uncuyo.edu.ar/ices/cache/curie_800_900.jpg" alt="Marie Curie in her laboratory" />
          <figcaption>
          Maria Salomea Skłodowska-Curie, known as Marie Curie, poses at the laboratory in Paris.
          </figcaption>
        </figure>
        <section id="timeline-section">
          <h3 id="timeline-title">This is a timeline of <span>Marie Curie's</span> life:</h3>
          <ul>
            {timeline.map((el) => <ListItem date={el.date} text={el.text} />)}
          </ul>
          <p>Joliot-Curie’s daughter became a nuclear physicist and their son a biochemist, both making significant scientific contributions. Their grandson is an astrophysicist.</p>
        </section>
        <h3>
          If you have time, you should read more about this incredible woman on her <span><a href="https://en.wikipedia.org/wiki/Marie_Curie" target="_blank">Wikipedia entry</a></span>.
        </h3>
      </main>
    </div>
  );
}

export default App;
