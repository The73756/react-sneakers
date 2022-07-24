import React from "react";
import axios from "axios";

import Card from "../components/Card";
import { NoItems } from "./NoItems";

function Orders() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [orders, setOrders] = React.useState([]);

	React.useEffect(() => {
		(async () => {
			try {
				const { data } = await axios.get('https://62d5284e5112e98e4859cd67.mockapi.io/orders');
				setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
				setIsLoading(false);
			} catch (error) {
				alert('Ошибка при загрузке заказов!');
				console.error(error);
			}
		})();
	}, []);

	return (
		<main className="content">
			<div className='sneakersHead'>
				<h2 className="subtitle">Мои заказы</h2>
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
				orders.length > 0 
			?
				<>
					<div className="sneakers">
					{orders.map((item, index) => (
							<Card
								key={index}
								loading={isLoading}
								{...item}
							/>
						))}
					</div>
				</>
			:
				<div className="noItems">
					<NoItems 
						title={'Заказов нет :('}
						img={'img/no-orders.png'}
						descr={'Вы ничего еще не заказывали ранее'}
					/> 
				</div>
			}
		</main>
	);
}

export default Orders;