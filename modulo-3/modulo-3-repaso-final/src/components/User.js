function User(props) {
  return (
    <a href="#">
      <img
        className=""
        alt={props.user.fullName}
        src={props.user.image.large}
      />
      <h4 className="card__title">{props.user.fullName}</h4>
      <p className="card__description">{props.user.age}</p>
    </a>
  );
}
export default User;
