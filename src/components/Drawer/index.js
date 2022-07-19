import styles from "./Drawer.module.scss";

function Drawer({ onClose, onRemove, items = [] }) { 
	const closeDrawer = (e) => {
		const target = e.target;
		if (target && (target.classList.contains(styles.drawerOverlay) || target.classList.contains(styles.cartClose))) {
			onClose();
		}
	}
	return (
		<div className={styles.drawerOverlay} onClick={closeDrawer}>
			<div className={styles.drawer}>
				<div className={styles.drawerHeader}>
				<h3>Корзина</h3>
					<button className={`btn-reset itemBtn ${styles.cartBtnDelete} ${styles.cartClose}`} aria-label="Закрыть корзину">
						<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/>
						</svg>
					</button>
				</div>

				{
					items.length > 0 ? <div>
						<div className={styles.cartWrapper}>
							{items.map((obj) => (
								<div className={styles.cartItem} key={obj.id}>
									<div className={styles.cartImg} style={{ backgroundImage: `url(${obj.imageUrl})`}}></div>
									<div className={styles.cartItemMeta}>
										<h4>{obj.title}</h4>
										<b>{obj.price}руб.</b>
									</div>
									<button className={`btn-reset itemBtn ${styles.cartBtnDelete}`} onClick={() => onRemove(obj.id)} aria-label="Убрать из корзины">
										<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/>
										</svg>
									</button>
								</div>
							))}
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
					:	<div className={styles.cartEmpty}>
						<img src="/img/empty-cart.png" width={120} height={120} alt="" aria-hidden="true"/>
						<h3 className={styles.cartEmptyTitle}>Корзина Пуста</h3>
						<p className={styles.cartEmptyDescr}>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
						<button className={`btn-reset greenBtn greenBtnReverse ${styles.cartClose}`}>
							Вернуться назад
							<img width={16} height={14} src="/img/full-arrow-left.svg" alt="" aria-hidden="true"/>
						</button>
					</div>
				}
			</div>
		</div>
	);
}
export default Drawer;