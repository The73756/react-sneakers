import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import './components/getScrollWidth';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';

export const AppContext = React.createContext({});

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const disableScoll = () => {
    const cssDuration = getComputedStyle(document.querySelector(':root')).getPropertyValue('--duration').slice(0, -1); //ms
    const dur = cssDuration * 1000; //second

    if (cartOpened) {
      document.body.classList.add('disable-scroll');
    } else {
      setTimeout(() => {
        document.body.classList.remove('disable-scroll');
      }, dur);
    }
  };    
  disableScoll();

  React.useEffect(() => {
    try {
      ((async () => {
        const [ cartResponse, favoritesResponse, itemsResponse ] = await Promise.all([
          axios.get('https://62d5284e5112e98e4859cd67.mockapi.io/cart'),
          axios.get('https://62d5284e5112e98e4859cd67.mockapi.io/favorites'),
          axios.get('https://62d5284e5112e98e4859cd67.mockapi.io/items')
        ]); 

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      }))();
    } catch (error) {
      alert('Ошибка все капец сайт лег');
      console.error(error);
    }
  }, []);

  const onRemoveFromCart = (id) => {
    try {
      axios.delete(`https://62d5284e5112e98e4859cd67.mockapi.io/cart/${id}`);
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(id)));
    } catch (error) {
      alert('Ошибка при удалении из корзины');
      console.error(error);
    }
  };

  const onAddToCart = async (obj) => {
    try {
      if (cartItems.find(cartObj => Number(cartObj.id) === Number(obj.id))) {
        setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
        await axios.delete(`https://62d5284e5112e98e4859cd67.mockapi.io/cart/${obj.id}`);    
      } else {
        setCartItems(prev => [...prev, obj]);
        await axios.post('https://62d5284e5112e98e4859cd67.mockapi.io/cart', obj);
      }
    } catch (error) {
      alert('Ошибка при добавлении в корзину');
      console.error(error);
    }
  };

  const onAddToFavorites = async (obj) => {
    try {
      if (favorites.find(favObj => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://62d5284e5112e98e4859cd67.mockapi.io/favorites/${obj.id}`); 
        setFavorites(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post('https://62d5284e5112e98e4859cd67.mockapi.io/favorites', obj);
        setFavorites(prev => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в избранное');
      console.error(error);
    }
  };

  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  const isItemFavorited = (id) => {
    return favorites.some((obj) => Number(obj.id) === Number(id));
  }

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, setCartItems, isItemAdded, onAddToFavorites, isItemFavorited, onAddToCart }}>
      <div className="container">
        <Drawer items={cartItems} onClose = {() => setCartOpened(false)} onRemove={onRemoveFromCart} opened={cartOpened}/>
        <Header onClickCart = {() => setCartOpened(true)} />
          <Routes>
            <Route exact path = '/favorites' element={<Favorites />}></Route>
            <Route exact path = '/orders' element={<Orders />}></Route>
            <Route exact path = '/' element={
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchValue={onChangeSearchValue} 
                onAddToFavorites={onAddToFavorites}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }>
            </Route>    
          </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;


