import Header from './components/Header';
import Home from './components/Home';
// import {items} from './items';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NotFound from './components/NotFound';
import Details from './components/Details';
import DetailItem from './components/DetailItem';

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get('/api/items')
      .then((response) => setItems(response.data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);
  if(items.length === 0) {
    return (<h1>Loading...</h1>)
  }
  return (
    <div className="App">
      <Router>
        <Header />
        {items.length === 0 ? <div>Loading...</div>
        :(
        <Routes>
          <Route path="/details" element={ <Details items={items} /> }>
            <Route path=":id" element={ <DetailItem items={items} /> } />
            <Route index element={ <h1>No Item Selected</h1> } />
          </Route>
          <Route path="/" element={ <Home items={items} /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      )}
      </Router>
    </div>
  );
}

export default App;