import { Form } from 'react-bootstrap';

const FilterItem = ({ filtros, name, options, onChange }) => {
  const handleCheckBox = (option) => {
    onChange(name, option);
  };

  return (
    <li className="list-group-item">
      <div className="d-flex flex-column">
        {options.map((option, index) => (
          <div key={index} className="form-check">
            <Form.Check
              name={name}
              onChange={() => handleCheckBox(option)}
              type="radio"
              id={`radio-${index}`}
              label={option}
              checked={filtros[name] === option}
            />
          </div>
        ))}
      </div>
    </li>
  );
};

export default FilterItem;