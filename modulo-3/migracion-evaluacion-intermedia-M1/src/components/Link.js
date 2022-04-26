import '../styles/Link.scss';

const Link = (props) => {
  return (
    <li>
      <a
        className={props.className}
        href={props.href}
        target="_blank"
        rel="noreferrer"
      >
        {props.text}
      </a>
    </li>
  );
};

export default Link;
