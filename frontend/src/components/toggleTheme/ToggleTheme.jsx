import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { ThemeContext } from '../../contexts/theme/theme.context';
import { BsFillMoonFill } from 'react-icons/bs';
import { BsMoon } from 'react-icons/bs';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const buttonStyles = {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'black', // Color del icono
  };

  return (
    <Button
      size="lg"
      style={buttonStyles}
      className="position-absolute top-0 end-0 mx-2"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsMoon /> : <BsFillMoonFill />}
    </Button>
  );
};

export default ToggleTheme;
