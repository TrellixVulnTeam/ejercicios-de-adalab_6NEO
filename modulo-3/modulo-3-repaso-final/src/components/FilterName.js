const FilterName = (props) => {
  const handleSearchName = (ev) => {
    props.handleFilterName(ev.target.value);
  };
  return (
    <>
      <label className="form__label display-block" htmlFor="name">
        Filtrar por nombre:
      </label>
      <input
        className="form__input-text"
        type="search"
        name="name"
        id="name"
        placeholder="Introduce el nombre"
        value={props.filterName}
        onChange={handleSearchName}
      />
    </>
  );
};
export default FilterName;
