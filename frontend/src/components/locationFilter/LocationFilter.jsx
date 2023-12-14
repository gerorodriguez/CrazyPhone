import { Link } from "react-router-dom";

const LocationFilter = () => {

  const locations = [
    'Buenos Aires',
    'Santa Fe',
    'Rosario',
    'Córdoba',
  ];

  return (
    <>
      <li className="list-group-item d-none d-lg-block">
        <h5 className="mt-1 mb-2">Location</h5>
        <div className="d-flex flex-wrap my-2">
          {locations.map((v, i) => {
            return (
              <Link
                key={i}
                to="/products"
                className="btn btn-sm btn-outline-dark rounded-pill me-2 mb-2"
                replace
              >
                {v}
              </Link>
            );
          })}
        </div>
      </li>
    </>
  )
}

export default LocationFilter