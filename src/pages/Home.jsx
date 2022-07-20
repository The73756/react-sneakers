import Card from '../components/Card/';
import Hero from '../components/Hero/';

function Home({ items, searchValue, onChangeSearchValue, onAddToFavorites, onAddToCart }) {
	return (

		<main className="content">
			<Hero />
			<div className='sneakersHead'>
				<h2 className="subtitle">{searchValue ? `Поиск по запросу "${searchValue}"` : 'Все кроссовки'}</h2>
				<div className='searchBlock'>
					<img src="/img/search.svg" alt="Поиск" />
					<input onChange={onChangeSearchValue} value={searchValue} type="text" placeholder='Поиск...'/>
				</div>
			</div>
			<div className="sneakers">
				{items
					.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
					.map((item, index) => (
						<Card
							key={index}
							onFavorite={(obj) => onAddToFavorites(obj)}
							onPlus={(obj) => onAddToCart(obj)}
							{...item}
						/>
				))}
			</div>
		</main>
	);
}

export default Home;