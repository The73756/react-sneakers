import React from "react";
import Card from "../components/Card";
import { AppContext } from "../App";
import { NoItems } from "./NoItems";

function Favorites() {
	const {favorites, onAddToCart, onRemoveFavorite, isLoading } = React.useContext(AppContext);

	return (
		<main className="content">
			<div className='sneakersHead'>
				<h2 className="subtitle">Мои закладки</h2>
			</div>
			{
				isLoading ? 
				<>
					<div className="sneakers">
						{[...Array(4)].map((item, index) => (
							<Card
								key={index}
								loading={isLoading}
								{...item}
							/>
						))}
					</div>
				</>
				:
			 		favorites.length > 0 
				?
				<>
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
				<div className="noItems">
					<NoItems 
						title={'Закладок нет :('}
						img={'img/no-favorites.png'}
						descr={'Вы ничего не добавляли в закладки'}
					/> 
				</div>
			}
		</main>
	);
}

export default Favorites;