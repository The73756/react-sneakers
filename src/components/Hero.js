import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

function Hero() {  
	return (
		<div className="hero">
			<Swiper
				modules={[Navigation]}
				spaceBetween={20}
				rewind={true}
				slidesPerView={1}
				navigation={{}}>

				<SwiperSlide>
					<div className="heroBanner">
						<a href="#" className='heroBannerLink'>
							<img src="/img/main-banner.jpg" alt="Реклама кроссовок KERMIT"/>
						</a>
						<button className='btn-reset heroBannerBtn'>Купить</button>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="heroBanner">
						<a href="#" className='heroBannerLink'>
							<img src="/img/main-banner.jpg" alt="Реклама кроссовок KERMIT"/>
						</a>
						<button className='btn-reset heroBannerBtn'>Купить</button>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="heroBanner">
						<a href="#" className='heroBannerLink'>
							<img src="/img/main-banner.jpg" alt="Реклама кроссовок KERMIT"/>
						</a>
						<button className='btn-reset heroBannerBtn'>Купить</button>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="heroBanner">
						<a href="#" className='heroBannerLink'>
							<img src="/img/main-banner.jpg" alt="Реклама кроссовок KERMIT"/>
						</a>
						<button className='btn-reset heroBannerBtn'>Купить</button>
					</div>
				</SwiperSlide>
			</Swiper>
	</div>
	);
}


export default Hero;