import Header from '../header/Header.jsx';
import {Outlet} from 'react-router-dom';
import {useContext} from 'react';
import {ThemeContext} from '../../contexts/theme/theme.context.jsx';
import {Spinner} from "react-bootstrap";
import {APIContext} from "../../services/ApiContext.jsx";

const Layout = () => {
    const {theme} = useContext(ThemeContext);
    const {isLoading} = useContext(APIContext);

    return (
        <div className={`${theme === 'dark' ? 'bg-dark' : 'bg-light'} ${isLoading && 'opacity-25'} `}>
            <Header/>
            {isLoading ? <Spinner style={{position: 'absolute', left: 0, right: 0, bottom: 0, top: 0, margin: "auto"}}/> : (
                <main><Outlet/></main>
            )}
        </div>
    );
};

export default Layout;
