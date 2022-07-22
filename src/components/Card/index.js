import React from 'react';
import ContentLoader from "react-content-loader";
import { AppContext } from "../../App";

import styles from "./Card.module.scss";

function Card({ title, price, imageUrl, id, onFavorite, onPlus, loading = false }) {
	const { isItemAdded, isItemFavorited } = React.useContext(AppContext);

	const onClickPlus = () => {
		onPlus({ title, price, imageUrl, id });
	};

	const onClickFavorite = () => {
		onFavorite({ title, price, imageUrl, id });
	};

	return(
		<article className={styles.card}>
			{
				loading ? 
					<ContentLoader
						speed={2}
						width={155}
						height={250}
						viewBox="0 0 155 265"
						backgroundColor="#f3f3f3"
						foregroundColor="#ecebeb">
						<rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
						<rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
						<rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
						<rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
						<rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
					</ContentLoader> 
				: 
				<>
					{ onFavorite && <button 
						className={`btn-reset itemBtn ${styles.likeBtn} ${isItemFavorited(id) ? styles.likeBtnActive : ''}`} 
						onClick={onClickFavorite} 
						aria-label="Добавить в избранные">
						<span className={styles.likeIcon}>
							<svg viewBox="0 0 32 32" className={styles.below}>
								<path
									d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"
									fill="#eae"
									strokeWidth="2"
								/>
							</svg>
							<svg viewBox="0 0 32 32" className={styles.front}>
								<path
									d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"
									strokeWidth="2"
								/>
							</svg>
						</span>
					</button>}
					<img width='100%' height={135} src={imageUrl} alt={title} />
					<h3 className={styles.cardTitle}>{title}</h3>
					<div className={styles.cardMetaWrapper}>
						<div className={styles.cardMeta}>
							<p>Цена:</p>
							<b>{price}руб.</b>
						</div>
						{ onPlus && <button 
							className={`btn-reset itemBtn ${styles.cardBtn} ${isItemAdded(id) ? styles.cardBtnActive : ''}`} 
							onClick={onClickPlus} 
							aria-label="Добавить в корзину">
							<svg className={styles.check} viewBox="0 0 100 100">
								<path d="M20,55 L40,75 L77,27" fill="none" stroke="#18c91b" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
							<svg className={styles.plus} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/>
							</svg>
						</button>}
					</div>
				</>
			}
		</article>
	);
}

export default Card;

