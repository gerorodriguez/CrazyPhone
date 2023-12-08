import { Form } from 'react-bootstrap';

const FilterItem = ({ title, options }) => {
  return (
    <li className="list-group-item">
      <h5 className="mt-1 mb-1">{title}</h5>
      <div className="d-flex flex-column">
        {options.map((option, index) => (
          <div key={index} className="form-check">
            <Form.Check
              type="checkbox"
              id={`checkbox-${index}`}
              label={option}
            />
          </div>
        ))}
      </div>
    </li>
  );
};

export default FilterItem;