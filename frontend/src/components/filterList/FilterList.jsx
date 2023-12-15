import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import FilterItem from './filterItem/FilterItem';
import PriceRangeFilter from './priceRangeFilter/PriceRangeFilter';
import { getBrands } from '../../services/BrandService';

function FilterList({ publications, setFilteredPublications }) {
  const storages = [{key: 64, value: "64 GB"}, {key: 128, value: "128 GB"}, {key: 256, value: "256 GB"}, {key: 512, value: "512 GB"}];
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const brands = await getBrands();
        console.log('Brands:', brands);
        setBrands(brands);
      } catch (error) {
        console.error('Error al obtener las marcas:', error);
      }
    };

    fetchBrands();
  }, []);

  const initialState = {
    brand: '',
    storage: '',
    priceRange: { min: 0, max: 0 },
  };

  const [filter, setFilter] = useState(initialState);

  const applyFilters = () => {
    let result = publications;
    console.log(result);
    if (filter.brand) {
      result = result.filter(
        (publication) => filter.brand === publication?.brand?.brandName,
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
            options={brands.map((brand) => brand.brandName)}
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
            options={storages.map((storage) => storage.key)}
            onChange={handleFilterChange}
          />
        </div>
      </li>
      <PriceRangeFilter setFilter={setFilter} />
    </ul>
  );
}

export default FilterList;
