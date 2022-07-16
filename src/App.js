import Card from './components/Card';
import Header from './components/Header';
import Hero from './components/Hero';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="container clear">
      <Drawer />
      <Header />
      <Hero />
      <main className="content">
        <div className='sneakersHead'>
          <h2 className="subtitle">Все кроссовки</h2>
          <div className='searchBlock'>
            <img src="/img/search.svg" alt="Поиск" />
            <input type="text" placeholder='Поиск...'/>
          </div>
        </div>
        <div className="sneakers">
          <Card />
        </div>
      </main>
    </div>
  );
}

export default App;
