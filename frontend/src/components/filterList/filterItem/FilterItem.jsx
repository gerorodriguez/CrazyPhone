import { Form } from 'react-bootstrap';

const FilterItem = ({ filter, name, options, onChange }) => {
  const handleCheckBox = (option) => {
    onChange(name, option);
  };

  return (
      <div className="d-flex flex-column">
        {options.map((option, index) => (
          <div key={index} className="form-check">
            <Form.Check
              name={name}
              onChange={() => handleCheckBox(option)}
              type="radio"
              id={`radio-${index}`}
              label={`${option} `}
              checked={filter[name] === option}
            />
          </div>
        ))}
      </div>
  );
};

export default FilterItem;