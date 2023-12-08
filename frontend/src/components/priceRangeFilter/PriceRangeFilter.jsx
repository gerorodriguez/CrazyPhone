
const PriceRangeFilter = () => {
  return (
    <>
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
            <input
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
    </>
  )
}

export default PriceRangeFilter