import LocationFilter from '../locationFilter/LocationFilter';
import PriceRangeFilter from '../priceRangeFilter/PriceRangeFilter';
import FilterItem from '../filterItem/FilterItem';
import { getBrands } from '../../services/BrandService';
import { useEffect, useState } from 'react';


function FilterList() {
  const storages = ['64 GB', '128 GB', '256 GB', '512 GB'];

  const [brands, setBrands] = useState([]);
  const [brandsErrors, setBrandsErrors] = useState(null);

  useEffect(() => {
    // Llama a getBrand cuando el componente se monta
    getBrand();
  }, []); // El segundo argumento [] asegura que se llame solo una vez al montar el componente

  const getBrand = async () => {
    try {
      const brandData = await getBrands();
      // Si getBrands devuelve un array, puedes mapearlo para obtener solo los nombres
      const brandNames = brandData.map(brand => brand.brandName);
      setBrands(brandNames);
    } catch (error) {
      setBrandsErrors(error.message);
    }
  };

  return (
    <ul className="list-group list-group-flush rounded">
      <LocationFilter />
      <FilterItem title="Storages" options={storages} />
      {/* Verifica si brands está definido antes de acceder a sus propiedades */}
      <FilterItem title="Brands" options={brands && brands.length > 0 ? brands : []} />
      <PriceRangeFilter />
    </ul>
  );
}
export default FilterList;
