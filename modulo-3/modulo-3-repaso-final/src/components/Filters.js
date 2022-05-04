import FilterCountry from './FilterCountry';
import FilterName from './FilterName';
import FilterCity from './FilterCity';

function Filters(props) {
  return (
    <section className="col2">
      <form>
        <FilterCountry handleFilterCountry={props.handleFilterCountry} />
        <FilterName handleFilterName={props.handleFilterName} />
        <FilterCity
          handleFilterCity={props.handleFilterCity}
          city={props.city}
        />
      </form>
    </section>
  );
}
export default Filters;
