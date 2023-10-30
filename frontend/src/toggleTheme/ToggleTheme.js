import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { ThemeContext } from '../../services/theme/theme.context';
import useTranslate from '../../custom/useTranslate';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const translate = useTranslate();

  return (
    <Button size="lg" className="m-3" onClick={toggleTheme} variant="primary">
      {/* Cambiar a tema {theme === "light" ? "oscuro" : "claro"} */}
      {theme === 'light'
        ? translate('dark_theme_change')
        : translate('light_theme_change')}
    </Button>
  );
};

export default ToggleTheme;
