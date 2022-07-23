import React from 'react';
import styles from "./Drawer.module.scss";

const Info = ({ title, img, descr }) => {
	return (
		<div className={styles.cartEmpty}>
			<img src={img} alt="" aria-hidden="true"/>
			<h3 className={styles.cartEmptyTitle}>{title}</h3>
			<p className={styles.cartEmptyDescr}>{descr}</p>
			<button className={`btn-reset greenBtn greenBtnReverse ${styles.cartClose}`}>
				Вернуться назад
				<img width={16} height={14} src="img/full-arrow-left.svg" alt="" aria-hidden="true"/>
			</button>
		</div>
	)
}

export default Info;