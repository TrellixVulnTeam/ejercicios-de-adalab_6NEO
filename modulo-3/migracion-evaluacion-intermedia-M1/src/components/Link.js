import '../styles/Link.scss';

const Link = (props) => {
  return (
    <li>
      <a
        className="main_button_blog"
        href="https://adalab.es/blog/"
        target="_blank"
        rel="noreferrer"
      >
        {props.text}
      </a>
    </li>
  );
};

export default Link;
