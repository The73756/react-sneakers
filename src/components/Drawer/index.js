import styles from "./Drawer.module.scss";

function Drawer() {  
	return (
		<div className={styles.drawerOverlay}>
			<div className={styles.drawer}>
				<div className={styles.drawerHeader}>
				<h3>Корзина</h3>
					<button className="btn-reset itemBtn cartBtnDelete" aria-label="Убрать из корзины">
						<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/>
						</svg>
					</button>
				</div>
				<div className={styles.cartWrapper}>
					<div className={styles.cartItem}>
						<div className={styles.cartImg} style={{ backgroundImage: 'url("/img/sneakers/1.jpg")'}}></div>
						<div className={styles.cartItemMeta}>
							<h4>Зеленые кроссовки Nike Blazer Mid Suede</h4>
							<b>12 999руб.</b>
						</div>
							<button className="btn-reset cartBtnDelete itemBtn" aria-label="Убрать из корзины">
								<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/>
								</svg>
							</button>
					</div>
				</div>
				<div className={styles.drawerBottom}>
					<ul>
						<li className={styles.drawerBottomItem}>
							<span>Итого:</span>
							<div></div>
							<b>21 498 руб. </b>
						</li>
						<li className={styles.drawerBottomItem}>
							<span>Налог 5%:</span>
							<div></div>
							<b>1074 руб. </b>
						</li>
					</ul>
					<button className="btn-reset greenBtn">
						Оформить заказ <img width={16} height={14} src="/img/full-arrow.svg" alt="" aria-hidden="true"/>
					</button>
				</div>
			</div>
		</div>
	);
}
export default Drawer;