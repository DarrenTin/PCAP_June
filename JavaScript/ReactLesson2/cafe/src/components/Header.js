import CoffeeLogo from '../images/logo.jpg';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header-component">
            <Link to="/">
                <img src={CoffeeLogo} alt="Coffee Logo"/>
                <h1>Kopitiam</h1>
            </Link>
        </header>
    )
}

export default Header;