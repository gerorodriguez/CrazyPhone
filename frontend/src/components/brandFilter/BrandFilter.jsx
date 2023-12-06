import { useState } from "react";


const BrandFilter = ({ brands, onFilterChange }) => {
  const [selectedBrand, setSelectedBrand] = useState('');

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
    onFilterChange(brand);
  };

  return (
    <div>
      <h5>Filtrar por Marca</h5>
      <select
        className="form-select"
        value={selectedBrand}
        onChange={(e) => handleBrandChange(e.target.value)}
      >
        <option value="">Todas las marcas</option>
        {brands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BrandFilter;
