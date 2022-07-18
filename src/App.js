import React from 'react';
import Card from './components/Card/';
import Header from './components/Header';
import Hero from './components/Hero/';
import Drawer from './components/Drawer';
import './components/getScrollWidth';

  function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
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
      fetch('https://62d5284e5112e98e4859cd67.mockapi.io/items')
      .then(res => res.json())
      .then(json => {
        setItems(json);
      });
    }, []);

    const onAddToCart = (productObj) => {
      setCartItems(prev => [...prev, productObj]);
    }

  return (
    <div className="container">
      {cartOpened && <Drawer items={cartItems} onClose = {() => setCartOpened(false)}/>}
      <Header
        onClickCart = {() => setCartOpened(true)}
      />
      <Hero />
      <main className="content">
        <div className='sneakersHead'>
          <h2 className="subtitle">Все кроссовки</h2>
          <div className='searchBlock'>
            <img src="/img/search.svg" alt="Поиск" />
            <input type="text" placeholder='Поиск...'/>
          </div>
        </div>
        <div className="sneakers">{items.map((obj) => (
          <Card
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
