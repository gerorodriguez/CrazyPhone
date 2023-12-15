import { useState } from "react"
import { Button, Form } from "react-bootstrap"

const PriceRangeFilter = ({setFilter}) => {

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value)
  }
  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value)
  }

  const handleClick = () => {
    setFilter((prevFilter) => {
      const updated = { ...prevFilter };
      updated.priceRange = {min: minPrice, max: maxPrice};
      return updated;
    });
  }

  return (
    <>
    <li className="list-group-item">
      <h5 className="mt-1 mb-2">Price Range</h5>
      <Form>
        <div className="d-grid d-block mb-3">
          <Form.Group className="mb-2">
            <Form.Label>Min Price</Form.Label>
              <Form.Control
                type="text"
                onChange={handleMinPriceChange}
                value={minPrice}
              />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Max Price</Form.Label>
              <Form.Control
                type="text"
                onChange={handleMaxPriceChange}
                value={maxPrice}
              />
          </Form.Group>
          <Button disabled={maxPrice <= minPrice || (maxPrice == 0 || minPrice == 0 )} onClick={handleClick} variant="secondary">Apply</Button>
        </div>
      </Form>
    </li>
    </>
  )
}

export default PriceRangeFilter