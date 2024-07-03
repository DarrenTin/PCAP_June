import axios from 'axios';
import './Cart.css';
import ItemType from '../types/item';
import PropTypes from 'prop-types';
import CartRow from './CartRow';
import { useRef, useState } from 'react';

function Cart( { cart, dispatch, items } ){
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [isEmployeeOfTheMonth, setIsEmployeeOfTheMonth] = useState(false); 
    const debounceRef = useRef(null);

    const subTotal = isEmployeeOfTheMonth ? 0 : cart.reduce((acc, item) => {
        const detailItem = items.find((i) => i.itemId === item.itemId);
        const itemPrice = detailItem.salePrice ?? detailItem.price;
        return item.quantity * itemPrice + acc;
    }, 0);

    // const subTotal = cart.reduce((acc, item) => {
    //     const detailItem = items.find((i) => i.itemId === item.itemId);
    //     const itemPrice = detailItem.salePrice ?? detailItem.price;
    //     return item.quantity * itemPrice + acc;
    // }, 0);

    const taxPercentage = parseInt(zipCode.substring(0, 1) || '0', 10) + 1;
    const taxRate = taxPercentage / 100;
    const tax = subTotal * taxRate;
    const total = subTotal + tax;
    const isFormValid = zipCode.length === 5 && name.trim();

    const submitOrder = (event) => {
        event.preventDefault();
        console.log('name: ', name);
        console.log('phone: ', phone);
        console.log('zipcode: ', zipCode);
    };

    const onNameChange = (newName) => {
        setName(newName);
        if(debounceRef.current){
            clearTimeout(debounceRef.current);
        }
        debounceRef.current = setTimeout(() => {
            axios
            .get(`/api/employees/isEmployeeOfTheMonth?name=${newName}`)
            .then((response) => setIsEmployeeOfTheMonth(
                response?.data?.isEmployeeOfTheMonth,
            ))
        .catch((error) => console.error("Error fetching data: ", error));
        }, 2000);
    }

    return(
        <div className='cart-component'>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <div>Your cart is empty</div>
            ) : (
            <>
            <table>
                <thead>
                    <tr>
                        <th>Quantity</th>
                        <th>Item</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <CartRow key={item.itemId} cartItem={item} items={items} dispatch={dispatch} />
                    ))}
                </tbody>
            </table>
            <div>
                Subtotal: ${subTotal.toFixed(2)}
            </div>

            { zipCode.length === 5
                ? (
                    <>
                    <div>
                        Tax: ${tax.toFixed(2)}
                    </div>
                    <div>
                        Total: ${total.toFixed(2)}
                    </div>
                    </>
                ) : (
                    <div className="Warning">Enter Zip Code to get total</div>
                )}

            <h2>Checkout</h2>
            <form onSubmit={submitOrder}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" onChange={ (event) => onNameChange(event.target.value) } required/>
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" type="tel"  onChange={ (event) => setPhone(event.target.value) } required/>
                <label htmlFor="zipcode">Zip Code</label>
                <input id="zipcode" type="text" maxLength="5" inputMode="numeric" 
                 onChange={ (event) => setZipCode(event.target.value) } required/>
                <button type="submit" disabled={!isFormValid}>Order Now</button>
            </form>
            </>
            )}
        </div>
    );
}

Cart.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        itemId: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
    })).isRequired,
    dispatch: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(ItemType).isRequired,
};

export default Cart;