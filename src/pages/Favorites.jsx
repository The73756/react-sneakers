import React from "react";
import Card from "../components/Card";
import {AppContext} from "../App";

function Favorites() {
	const {favorites, onAddToFavorites} = React.useContext(AppContext);

	return (
		<main className="content">
			<div className='sneakersHead'>
				<h2 className="subtitle">Мои закладки</h2>
				<div className='searchBlock'>
				</div>
			</div>
			<div className="sneakers">
			{favorites
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