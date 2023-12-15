import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme/theme.context';
import './Spinner.css'

const Spinner = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`spinner ${theme === "dark" && "dark-theme-spinner"}`} />
  )
}

export default Spinner