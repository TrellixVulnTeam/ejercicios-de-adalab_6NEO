import logo from '../images/adalab-logo-155x61.png';
import Link from './Link';
import '../styles/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <section>
        <a
          className="logo_image"
          href="https://adalab.es/"
          target="_blank"
          rel="noreferrer"
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
          <Link text="Blog" href="https://adalab.es/blog/" />
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
  );
};

export default Header;
