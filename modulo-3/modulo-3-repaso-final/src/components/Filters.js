import FilterCountry from './FilterCountry';
function Filters(props) {
  return (
    <section className="col2">
      <form>
        <FilterCountry handleFilterCountry={props.handleFilterCountry} />
        {/*<FilterCity />
        <FilterName />*/}
      </form>
    </section>
  );
}
export default Filters;
