import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import FilterItem from './filterItem/FilterItem';
import PriceRangeFilter from './priceRangeFilter/PriceRangeFilter';

function FilterList({ publications, setFilteredPublications }) {
  const storages = ['64 GB', '128 GB', '256 GB', '512 GB'];
  const BRANDS = ['Apple', 'Samsung', 'Motorola', 'Xiaomi'];

  const initialState = {
    brand: '',
    storage: '',
    priceRange: { min: 0, max: 0 },
  };

  const [filter, setFilter] = useState(initialState);

  const applyFilters = () => {
    let result = publications;

    if (filter.brand) {
      result = result.filter(
        (publication) => filter.brand === publication.brand,
      );
    }

    if (filter.storage) {
      result = result.filter(
        (publication) => filter.storage === publication.storage,
      );
    }

    result = result.filter((publication) => {
      if (filter.priceRange.min === 0 && filter.priceRange.max === 0) {
        return true;
      }
      return (
        publication.price >= filter.priceRange.min &&
        publication.price <= filter.priceRange.max
      );
    });

    return result;
  };

  useEffect(() => {
    const filtered = applyFilters();
    setFilteredPublications(filtered);
  }, [filter, publications]);

  const handleFilterChange = (filterCategory, value) => {
    setFilter((prevFiltros) => {
      const updated = { ...prevFiltros };
      updated[filterCategory] = updated[filterCategory] === value ? '' : value;
      return updated;
    });
  };

  const clearFilters = () => {
    setFilter(initialState);
  };

  return (
    <ul className="list-group list-group-flush rounded ml-auto">
      <li className="list-group-item d-none d-lg-block">
        {/*<h5 className="mt-1 mb-2">Filtrar</h5>*/}
        <Button variant="secondary" onClick={clearFilters}>
          Limpiar Filtros
        </Button>
      </li>
      <li className="list-group-item">
        <h5 className="mt-1 mb-1">Marcas</h5>
        <div className="d-flex flex-column">
          <FilterItem
            filter={filter}
            setFilter={setFilter}
            name={'brand'}
            options={BRANDS}
            onChange={handleFilterChange}
          />
        </div>
      </li>
      <li className="list-group-item">
        <h5 className="mt-1 mb-1">Storage</h5>
        <div className="d-flex flex-column">
          <FilterItem
            filter={filter}
            setFilter={setFilter}
            name={'storage'}
            options={storages}
            onChange={handleFilterChange}
          />
        </div>
      </li>
      <PriceRangeFilter setFilter={setFilter} />
    </ul>
  );
}

export default FilterList;
