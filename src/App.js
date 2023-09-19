import logo from './assets/logo.png';
import cdaRezidential from './assets/cda-rezidential.png';
import arhitext from './assets/arhitext.png';
import church from './assets/church.png';
import './App.scss';
import Project from './components/project'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
const projects = [
    {
        link: 'https://arhitext.com',
        image: arhitext
    },
    {
        link: 'https://cdarezidential.ro',
        image: cdaRezidential
    },
    {
        link: 'https://orthodoxchurchliverpool.co.uk/',
        image: church
    },
];
const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};
function App() {
    const listItems = projects.map(project =>
        <Project key={crypto.randomUUID()} {...project}/>
      );
  return (
    <div className="App">
        <div className="flex-container">	
        <header className="App-header">
            <img src={logo} className="logo" alt="logo" />
            <nav>
                <button>latest websites</button> 
            </nav>
        </header>
        <section id="main" className="w-100">
            <ul className="proiecte">
                {listItems}
            </ul>
        </section>
        <button className="back-to-top" onClick={goToTop}>
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
        </div>
        <footer>
            <a className="social" href="https://github.com/raluseru">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className="social" href="https://www.linkedin.com/in/raluca-s-a742019a/">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <div className='copyright'>© Copyright 2023 Lalu</div>
        </footer>
    </div>
  );
}

export default App;
