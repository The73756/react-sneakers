import React from 'react';
import { Link } from 'react-router-dom';

export const NoItems = ({ title, img, descr }) => {
	return (
		<div className="noItemsWrapper">
			<img src={img} width={70} height={70} alt="" aria-hidden="true"/>
			<h2>{title}</h2>
			<p>{descr}</p>	
			<Link to="/">
				<div className="greenBtn greenBtnReverse">
					Вернуться назад
					<img width={16} height={14} src="img/full-arrow-left.svg" alt="" aria-hidden="true"/>
				</div>
			</Link>
		</div>
	)
}