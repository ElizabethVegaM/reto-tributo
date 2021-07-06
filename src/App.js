import { useState, useEffect } from 'react';
import './App.css';
import { timeline } from './timeline';
import ListItem from './ListItem';

function App() {
  const [theme, setTheme] = useState('light-theme');
  const [btnTheme, setBtnTheme] = useState('dark-theme');
  const bodyClass = document.body;

  const switchTheme = () => {
    theme === 'light-theme' ? setTheme('dark-theme'): setTheme('light-theme');
    btnTheme === 'dark-theme' ? setBtnTheme('light-theme'): setBtnTheme('dark-theme');
    bodyClass.classList.toggle(theme);
    bodyClass.classList.toggle(btnTheme);
  };

  return (
    <div id="main">
      <header id="header-container">
        <h1 id="title">Marie Curie Tribute Page</h1>
        <p>The first woman to win a Nobel Prize. She made many discoveries that led to what we call modern medicine.</p>
        <button id="theme-switcher" className={btnTheme} onClick={switchTheme}>Dark</button>
      </header>
      <main id="main-section">
        <figure id="img-div">
          <img id="image" src="http://www.uncuyo.edu.ar/ices/cache/curie_800_900.jpg" alt="Marie Curie in her laboratory" />
          <figcaption id="img-caption">
          Maria Salomea Skłodowska-Curie, known as Marie Curie, poses at the laboratory in Paris.
          </figcaption>
        </figure>
        <section id="tribute-info">
          <h3 id="timeline-title">This is a timeline of <span>Marie Curie's</span> life:</h3>
          <ul>
            {timeline.map((el) => <ListItem date={el.date} text={el.text} />)}
          </ul>
          <p>Joliot-Curie’s daughter became a nuclear physicist and their son a biochemist, both making significant scientific contributions. Their grandson is an astrophysicist.</p>
        </section>
        <h3>
          If you have time, you should read more about this incredible woman on her <span><a id="tribute-link" href="https://en.wikipedia.org/wiki/Marie_Curie" target="_blank">Wikipedia entry</a></span>.
        </h3>
      </main>
    </div>
  );
}

export default App;
