import Card from "../components/Card";

function Favorites({ items, onAddToFavorites }) {
	return (
		<main className="content">
			<div className='sneakersHead'>
				<h2 className="subtitle">Мои закладки</h2>
				<div className='searchBlock'>
				</div>
			</div>
			<div className="sneakers">
			{items
				.map((item, index) => (
					<Card
						key={index}
						favorited={true}
						onFavorite={onAddToFavorites}
						{...item}
					/>
				))}
			</div>
		</main>
	);
}

export default Favorites;