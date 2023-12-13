import { useEffect, useState } from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import FilterItem from './filterItem/FilterItem';

function FilterList({ publications, setFilteredPublications }) {
  const storages = ['64 GB', '128 GB', '256 GB', '512 GB'];
  const BRANDS = ['Apple', 'Samsung', 'Motorola', 'Xiaomi', 'HOLA'];

  const initialState = {
    brands: '',
    storage: '',
    priceRange: { min: 0, max: 0 },
  };

  const [filtros, setFiltros] = useState(initialState);

  const applyFilters = () => {
    let result = publications;

    if (filtros.brands) {
      result = result.filter(
        (publication) => filtros.brands === publication.brand,
      );
    }

    if (filtros.storage) {
      result = result.filter(
        (publication) => filtros.storage === publication.storage,
      );
    }

    // Aquí podrías agregar más lógica de filtrado, como por rango de precios

    return result;
  };

  useEffect(() => {
    const filtered = applyFilters();
    setFilteredPublications(filtered);
  }, [filtros, publications]);

  const handleFilterChange = (filterCategory, value) => {
    setFiltros((prevFiltros) => {
      const updated = { ...prevFiltros };
      updated[filterCategory] = updated[filterCategory] === value ? '' : value;
      return updated;
    });
  };

  const clearFilters = () => {
    setFiltros(initialState);
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
            filtros={filtros}
            setFiltros={setFiltros}
            name={'brands'}
            options={BRANDS}
            onChange={handleFilterChange}
          />
        </div>
      </li>
      <li className="list-group-item">
        <h5 className="mt-1 mb-1">Storage</h5>
        <div className="d-flex flex-column">
          <FilterItem
            filtros={filtros}
            setFiltros={setFiltros}
            name={'storage'}
            options={storages}
            onChange={handleFilterChange}
          />
        </div>
      </li>
      <li className="list-group-item">
        <h5 className="mt-1 mb-2">Price Range</h5>
        <div className="d-grid d-block mb-3">
          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Min"
              defaultValue="100000"
            />
            <label htmlFor="floatingInput">Min Price</label>
          </div>
          <div className="form-floating mb-2">
            <InputGroup
              type="text"
              className="form-control"
              placeholder="Max"
              defaultValue="500000"
            />
            <label htmlFor="floatingInput">Max Price</label>
          </div>
          <button className="btn btn-dark">Apply</button>
        </div>
      </li>
    </ul>
  );
}

export default FilterList;
