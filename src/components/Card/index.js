import styles from "./Card.module.scss";

function Card(props) {  
	return(
		<article className={styles.card}>
			<button className={`btn-reset itemBtn ${styles.likeBtn}`} onClick={(e) => {props.onClickFavorite(e, styles.likeBtnActive)}} aria-label="Добавить в избранные">
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
			</button>
			<img width={133} height={112} src={props.imageUrl} alt={props.title} />
			<h3 className={styles.cardTitle}>{props.title}</h3>
			<div className={styles.cardMetaWrapper}>
				<div className={styles.cardMeta}>
					<p>Цена:</p>
					<b>{props.price}руб.</b>
				</div>
					<button className={`btn-reset itemBtn ${styles.cardBtn}`} onClick={(e) => {props.onClickPlus(e, styles.cardBtnActive)}} aria-label="Добавить в корзину">
						<svg className={styles.check} viewBox="0 0 100 100">
							<path d="M20,55 L40,75 L77,27" fill="none" stroke="#18c91b" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
						</svg>

						<svg className={styles.plus} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/>
						</svg>

						{/* <img width={11} height={11} src="/img/plus.svg" alt="" aria-hidden="true" /> */}
					</button>
			</div>
		</article>
	);
}

export default Card;

