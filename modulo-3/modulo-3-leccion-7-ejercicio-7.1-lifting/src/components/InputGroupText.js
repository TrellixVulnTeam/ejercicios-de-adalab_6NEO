const InputGroupText = (props) => {
  const handleName = (ev) => {
    props.handleChange(ev.target.value);
  };

  return (
    <div className="input-group-text">
      <label className="label-text" htmlFor="name">
        {props.title}
      </label>
      <input
        className="input-text"
        type="text"
        name="name"
        id="name"
        value={props.value}
        placeholder={props.placeholder}
        onChange={handleName}
      />
    </div>
  );
};

export default InputGroupText;
