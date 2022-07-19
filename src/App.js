import React from 'react';
import axios from 'axios';
import Card from './components/Card/';
import Header from './components/Header';
import Hero from './components/Hero/';
import Drawer from './components/Drawer';
import './components/getScrollWidth';

  function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
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

    const onAddToCart = (productObj) => {
      axios.post('https://62d5284e5112e98e4859cd67.mockapi.io/cart', productObj);
      setCartItems(prev => [...prev, productObj]);
    }

    const onRemoveFromCart = (id) => {
      // axios.delete(`'https://62d5284e5112e98e4859cd67.mockapi.io/cart/${id}'`);
      setCartItems(prev => prev.filter(item => item.id !== id));
    }

    const onChangeSearchValue = (e) => {
      setSearchValue(e.target.value)
    }

  return (
    <div className="container">
      {cartOpened && <Drawer items={cartItems} onClose = {() => setCartOpened(false)} onRemove={onRemoveFromCart}/>}
      <Header
        onClickCart = {() => setCartOpened(true)}
      />
      <Hero />
      <main className="content">
        <div className='sneakersHead'>
          <h2 className="subtitle">{searchValue ? `Поиск по запросу "${searchValue}"` : 'Все кроссовки'}</h2>
          <div className='searchBlock'>
            <img src="/img/search.svg" alt="Поиск" />
            <input onChange={onChangeSearchValue} value={searchValue} type="text" placeholder='Поиск...'/>
          </div>
        </div>
        <div className="sneakers">
          {items
            .filter((obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
            .map((obj, index) => (
              <Card
                key={index}
                title={obj.name}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onClickFavorite={(e, activeClass) => {
                  e.preventDefault();
                  e.target.classList.toggle(activeClass);
                }}
                onPlus={onAddToCart}
              />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;


