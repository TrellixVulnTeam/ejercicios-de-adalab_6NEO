import '../styles/App.scss';
import logo from '../images/adalab-logo-155x61.png';

function App() {
  return (
    <>
      <header className="header">
        <section>
          <a
            className="logo_image"
            rel="noreferrer"
            href="https://adalab.es/"
            target="_blank"
          >
            <img
              title="Logo Adalab"
              src={logo}
              alt="Aquí aparece el logo de Adalab"
            />
          </a>
        </section>
        <nav>
          <ul className="buttons">
            <li>
              <a
                className="main_button_blog"
                href="https://adalab.es/blog/"
                target="_blank"
                rel="noreferrer"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="main_button"
                href="https://adalab.es/contacto/"
                target="_blank"
                rel="noreferrer"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <h1 className="box_item">Creando diversidad digital</h1>
      </main>
    </>
  );
}

export default App;
