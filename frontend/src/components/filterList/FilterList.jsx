import LocationFilter from '../locationFilter/LocationFilter';
import PriceRangeFilter from '../priceRangeFilter/PriceRangeFilter';
import FilterItem from '../filterItem/FilterItem';


function FilterList() {
  const storages = ['64 GB', '128 GB', '256 GB', '512 GB'];
  const brands = ['Apple', 'Samsung', 'Redmi', 'Motorola'];
  return (
    <ul className="list-group list-group-flush rounded">
      <LocationFilter/>
      <FilterItem title="Storages" options={storages}/>
      <FilterItem title="Brands" options={brands}/>
      <PriceRangeFilter/>
    </ul>
  );
}
export default FilterList;
