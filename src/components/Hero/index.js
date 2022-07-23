import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import styles from "./Hero.module.scss";

function Hero() {  
	return (
		<div className={styles.hero}>
			<Swiper
				modules={[Navigation]}
				spaceBetween={20}
				rewind={true}
				slidesPerView={1}
				navigation={{}}>

				<SwiperSlide>
					<div className={styles.heroBanner}>
						<a href="#1">
							<img src="img/main-banner.jpg" alt="Реклама кроссовок KERMIT"/>
						</a>
						<button className={`btn-reset ${styles.heroBannerBtn}`}>Купить</button>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.heroBanner}>
						<a href="#2">
							<img src="img/main-banner.jpg" alt="Реклама кроссовок KERMIT"/>
						</a>
						<button className={`btn-reset ${styles.heroBannerBtn}`}>Купить</button>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.heroBanner}>
						<a href="#3">
							<img src="img/main-banner.jpg" alt="Реклама кроссовок KERMIT"/>
						</a>
						<button className={`btn-reset ${styles.heroBannerBtn}`}>Купить</button>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.heroBanner}>
						<a href="#4">
							<img src="img/main-banner.jpg" alt="Реклама кроссовок KERMIT"/>
						</a>
						<button className={`btn-reset ${styles.heroBannerBtn}`}>Купить</button>
					</div>
				</SwiperSlide>
			</Swiper>
	</div>
	);
}


export default Hero;