const FilterCity = (props) => {
  const handleChangeCity = (ev) => {
    props.handleFilterCity(ev.target.value);
  };
  return (
    <>
      <label className="form__label display-block" htmlFor="city">
        Ciudad:
      </label>

      <label className="display-block" htmlFor=""></label>
      <p>{props.value}</p>
      <input
        name="location"
        type="checkbox"
        value={props.city}
        onChange={handleChangeCity}
      />
      {/* <label className="display-block" htmlFor="">
        Tullamore
      </label>
      <input
        name="location"
        type="checkbox"
        value="Tullamore"
        onChange={handleChangeCity}
      />
      <label className="display-block" htmlFor="">
        Valencia
      </label>
      <input
        name="location"
        type="checkbox"
        value="Valencia"
        onChange={handleChangeCity}
      />
      <label className="display-block" htmlFor="">
        Köyliö
      </label>
      <input
        name="location"
        type="checkbox"
        value="Köyliö"
        onChange={handleChangeCity}
      />
      <label className="display-block" htmlFor="">
        Madrid
      </label>
      <input
        name="location"
        type="checkbox"
        value="Madrid"
        onChange={handleChangeCity}
      />
      <label className="display-block" htmlFor="">
        Orange
      </label>
      <input
        name="location"
        type="checkbox"
        value="Orange"
        onChange={handleChangeCity}
      />
      <label className="display-block" htmlFor="">
        Folkestad
      </label>
      <input
        name="location"
        type="checkbox"
        value="Folkestad"
        onChange={handleChangeCity}
      />
      <label className="display-block" htmlFor="">
        Ely
      </label>
      <input
        name="location"
        type="checkbox"
        value="Ely"
        onChange={handleChangeCity}
      />
      <label className="display-block" htmlFor="">
        Invercargill
      </label>
      <input
        name="location"
        type="checkbox"
        value="Invercargill"
        onChange={handleChangeCity}
      />
      <label className="display-block" htmlFor="">
        Muğla
      </label>
      <input
        name="location"
        type="checkbox"
        value="Muğla"
        onChange={handleChangeCity}
      /> */}
    </>
  );
};

export default FilterCity;
