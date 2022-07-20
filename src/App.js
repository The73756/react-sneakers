import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import './components/getScrollWidth';

import Home from './pages/Home';
import Favorites from './pages/Favorites';

  function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);

    const disableScoll = () => {
      if (cartOpened) {
        document.body.classList.add('disable-scroll');
      } else {
        document.body.classList.remove('disable-scroll');
      }
    };    
    disableScoll();

    React.useEffect(() => {
      axios.get('https://62d5284e5112e98e4859cd67.mockapi.io/items')
        .then(res => {setItems(res.data)});

      axios.get('https://62d5284e5112e98e4859cd67.mockapi.io/cart')
        .then(res => {setCartItems(res.data)});
    }, []);

    const onAddToCart = (obj) => {
      axios.post('https://62d5284e5112e98e4859cd67.mockapi.io/cart', obj);
      setCartItems(prev => [...prev, obj]);
    }

    const onRemoveFromCart = (id) => {
      axios.delete(`https://62d5284e5112e98e4859cd67.mockapi.io/cart/${id}`);
      setCartItems(prev => prev.filter(item => item.id !== id));
    }

    const onChangeSearchValue = (e) => {
      setSearchValue(e.target.value)
    }
     
    const onAddToFavorites = (obj) => {
      axios.post('https://62d5284e5112e98e4859cd67.mockapi.io/favorites', obj);
      setFavorites(prev => [...prev, obj]);
    }

  return (
    <div className="container">
      {cartOpened && <Drawer items={cartItems} onClose = {() => setCartOpened(false)} onRemove={onRemoveFromCart}/>}
      <Header onClickCart = {() => setCartOpened(true)} />
      
        <Routes>
          <Route exact path = '/favorites' element={<Favorites/>}></Route>
        </Routes>

        <Routes>
          <Route exact path = '/' element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchValue={onChangeSearchValue} 
              onAddToFavorites={onAddToFavorites}
              onAddToCart={onAddToCart}
            />
          }>
          </Route>
        </Routes>

    </div>
  );
}

export default App;


