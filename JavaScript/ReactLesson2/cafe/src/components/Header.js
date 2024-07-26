import CoffeeLogo from '../images/logo.jpg';
import './Header.css';
import { Link } from 'react-router-dom';
import CartIcon from '../images/cart.svg';
import UserDetails from './UserDetails';

function Header( { cart } ) {
    const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    return (
        <header className="header-component">
            <Link to="/">
                <img src={CoffeeLogo} alt="Coffee Logo"/>
                <h1>Kopitiam</h1>
            </Link>
            <div className='menu'>
                <Link to="/cart">
                    <img src={CartIcon} alt='Cart' />
                    <div className='badge'>{cartQuantity}</div>
                </Link>
                <UserDetails />
            </div>
        </header>
    )
}

export default Header;