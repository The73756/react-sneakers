import styles from "./Card.module.scss";

function Card(props) {  
	return(
		<article className={styles.card}>
			<div className="likeBtn">
				<label className="like itemBtn">
					<input type="checkbox" className="checkbox" aria-label="Добавить в избранные"/>
					<div className="like-icon">
						<svg viewBox="0 0 32 32" className="below">
							<path
								d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"
								fill="#eae"
								strokeWidth="2"
							/>
						</svg>
						<svg viewBox="0 0 32 32" className="front">
							<path
								d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"
								strokeWidth="2"
							/>
						</svg>
					</div>
				</label>
			</div>
			<img width={133} height={112} src={props.imageUrl} alt={props.title} />
			<h3 className={styles.cardTitle}>{props.title}</h3>
			<div className={styles.cardMetaWrapper}>
				<div className={styles.cardMeta}>
					<p>Цена:</p>
					<b>{props.price}руб.</b>
				</div>
					<button className="btn-reset cardBtn itemBtn" onClick={props.onClick} aria-label="Добавить в корзину">
						<svg viewBox="0 0 100 100">
							<path d="M20,55 L40,75 L77,27" fill="none" stroke="#18c91b" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
						<img className='btnImage' width={11} height={11} src="/img/plus.svg" alt="" aria-hidden="true" />
					</button>
			</div>
		</article>
	);
}

export default Card;

