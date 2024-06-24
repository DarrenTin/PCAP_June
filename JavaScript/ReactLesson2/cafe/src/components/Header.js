import CoffeeLogo from '../images/logo.jpg';
import './Header.css';

function Header() {
    return (
        <header className="header-component">
            <img src={CoffeeLogo} alt="Coffee Logo"/>
            <h1>Kopitiam</h1>
        </header>
    )
}

export default Header;