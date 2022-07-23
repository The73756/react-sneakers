import React from "react";
import Card from "../components/Card";
import { AppContext } from "../App";
import { NoItems } from "./NoItems";

function Favorites() {
	const {favorites, onAddToCart, onRemoveFavorite } = React.useContext(AppContext);

	return (
		<main className={`${favorites.length > 0 ? 'content' : 'content noItems'}`}>
			{
			favorites.length > 0 
			?
				<>
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
				</>
			:
				<NoItems 
					title={'Закладок нет :('}
					img={'/img/no-favorites.png'}
					descr={'Вы ничего не добавляли в закладки'}
				/> 
			}
		</main>
	);
}

export default Favorites;