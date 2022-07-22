import React from "react";
import Card from "../components/Card";
import {AppContext} from "../App";

function Favorites() {
	const {favorites, onAddToCart, onRemoveFavorite } = React.useContext(AppContext);

	return (
		<main className="content">
			<div className='sneakersHead'>
				<h2 className="subtitle">Мои закладки</h2>
			</div>
			<div className="sneakers">
			{favorites
				.map((item, index) => (
					<Card
						key={index}
						isFavoritePage={true}
						onFavorite 	//просто флаг для отображения кнопки добавления в избранные
						onPlus={(obj) => onAddToCart(obj)}
						onRemoveFavorite={onRemoveFavorite}
						{...item}
					/>
				))}
			</div>
		</main>
	);
}

export default Favorites;