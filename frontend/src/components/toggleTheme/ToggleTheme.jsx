import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { ThemeContext } from '../../contexts/theme/theme.context';
import { BsMoon, BsSun } from 'react-icons/bs';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const buttonStyles = {
    backgroundColor: 'transparent',
  };

  return (
    <Button
      variant={`${theme === 'dark' ? 'dark' : 'light'}`}
      size="lg"
      style={buttonStyles}
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsMoon /> : <BsSun />}
    </Button>
  );
};

export default ToggleTheme;
