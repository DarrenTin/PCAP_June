import Header from './components/Header';
import Home from './components/Home';
// import {items} from './items';
import axios from 'axios';
import {useEffect, useMemo, useReducer, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NotFound from './components/NotFound';
import Details from './components/Details';
import DetailItem from './components/DetailItem';
import { cartReducer, CartTypes, initialCartState } from './reducers/cartReducer';
import CurrentUserContext from './context/CurrentUserContext';
import Cart from './components/Cart';
import Login from './components/Login';
import Orders from './components/Orders';

const storageKey = 'cart';

function App() {
  const [items, setItems] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [cart, dispatch] = useReducer(cartReducer, initialCartState, 
    (initialState) => {
      try {
        const storedCart = JSON.parse(localStorage.getItem(storageKey));
        return storedCart || initialState;
      } catch (error) {
        console.error('Error parsing cart', error);
        return initialState;
      }
  });
  const addToCart = (itemId) => dispatch({ type: CartTypes.ADD, itemId });

  useEffect( () => {
    localStorage.setItem(storageKey, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    axios.get('/api/items')
      .then((response) => setItems(response.data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  useEffect(() => {
    axios.get('/api/auth/current-user')
      .then((response) => setCurrentUser(response.data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  // if(items.length === 0) {
  //   return (<h1>Loading...</h1>)
  // }

  // const CurrentUserContextValue = { currentUser, setCurrentUser };
  const CurrentUserContextValue = useMemo(() => ({ currentUser, setCurrentUser }), [currentUser]);

  return (
    <div className="App">
      <Router>
          {/* to pass the use state into child  */}
          <CurrentUserContext.Provider value={CurrentUserContextValue}>
        <Header cart={ cart }/>
        {items.length === 0 ? <div>Loading...</div>
        :(
        <Routes>
          <Route path='/cart' element={ <Cart cart={cart} dispatch={dispatch} items={items} /> } />
          <Route path="/details" element={ <Details items={items} /> }>
            <Route path=":id" element={ <DetailItem items={items} addToCart={addToCart} /> } />
            <Route index element={ <h1>No Item Selected</h1> } />
          </Route>
          <Route path="/" element={ <Home items={items} /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/orders" element={ <Orders /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      )}
      </CurrentUserContext.Provider>

      </Router>
    </div>
  );
}

export default App;