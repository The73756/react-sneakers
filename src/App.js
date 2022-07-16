import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

function App() {
  function toggleClass(e) {
    e.preventDefault();
    e.target.classList.toggle('cardBtnActive');
  }
  return (
    <div className="container clear">
      <div className="drawerOverlay drawerActive">
        <div className="drawer">
          <div className="drawerHeader">
          <h3>Корзина</h3>
            <button className="btn-reset itemBtn cartBtnDelete" aria-label="Убрать из корзины">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/>
              </svg>
            </button>
          </div>
          <div className="cartWrapper">
            <div className="cartItem">
              <div className='cartImg' style={{ backgroundImage: 'url("/img/sneakers/1.jpg")'}}></div>
              <div className='cartItemMeta'>
                <h4>Зеленые кроссовки Nike Blazer Mid Suede</h4>
                <b>12 999руб.</b>
              </div>
                <button className="btn-reset cartBtnDelete itemBtn" aria-label="Убрать из корзины">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/>
                  </svg>
                </button>
            </div>
            <div className="cartItem">
              <div className='cartImg' style={{ backgroundImage: 'url("/img/sneakers/1.jpg")'}}></div>
              <div className='cartItemMeta'>
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
          <div className="drawerBottom">
            <ul>
              <li className= "drawerBottomItem">
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
              <li className= "drawerBottomItem">
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
      <header className="d-flex justify-between align-center">
        <div className="d-flex align-center">
          <img width={40} height={40} src="img/logo.png" alt="" />
          <div>
            <h1 className="title">React sneakers</h1>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <button className="btn-reset headerBtn cartBtn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9118 7.99735 16.5455 7.54548 16.5455C7.09361 16.5455 6.72729 16.9118 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z" stroke="#9B9B9B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9118 16.9973 16.5455 16.5455 16.5455C16.0936 16.5455 15.7273 16.9118 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z" stroke="#9B9B9B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091" stroke="#9B9B9B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button> 
            <span className="cartPrice">1205 руб</span>
          </li>
          <li>
            <button className="btn-reset headerBtn favoritesBtn">
              <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.1003 0C16.7293 0 18.0976 0.54932 19.2052 1.64796C20.3129 2.7466 20.8668 4.08759 20.8668 5.67092C20.8668 6.44643 20.7039 7.23002 20.3781 8.02169C20.0523 8.81335 19.6939 9.51616 19.303 10.1301C18.912 10.7441 18.2523 11.5357 17.3238 12.5051C16.3953 13.4745 15.6134 14.2581 14.9781 14.8559C14.3428 15.4537 13.3248 16.3665 11.9239 17.5944L10.4089 18.9515L8.89403 17.6429C7.52572 16.3827 6.51577 15.4537 5.8642 14.8559C5.21262 14.2581 4.42258 13.4745 3.49408 12.5051C2.56559 11.5357 1.90586 10.7441 1.51492 10.1301C1.12397 9.51616 0.773748 8.81335 0.464249 8.02169C0.15475 7.23002 0 6.44643 0 5.67092C0 4.08759 0.553841 2.7466 1.66152 1.64796C2.7692 0.54932 4.12123 0 5.71759 0C7.60717 0 9.17095 0.727041 10.4089 2.18112C11.6469 0.727041 13.2107 0 15.1003 0ZM10.5067 16.0918C12.1031 14.6701 13.2677 13.6118 14.0008 12.9171C14.7338 12.2224 15.5401 11.3903 16.4198 10.4209C17.2994 9.45153 17.9102 8.60332 18.2523 7.87628C18.5944 7.14924 18.7654 6.41412 18.7654 5.67092C18.7654 4.63691 18.4152 3.78061 17.7148 3.10204C17.0143 2.42347 16.1428 2.08418 15.1003 2.08418C14.3184 2.08418 13.5772 2.31037 12.8768 2.76276C12.1764 3.21514 11.6795 3.79677 11.3863 4.50765H9.43158C9.17095 3.79677 8.69041 3.21514 7.98997 2.76276C7.28952 2.31037 6.53206 2.08418 5.71759 2.08418C4.67507 2.08418 3.81173 2.42347 3.12757 3.10204C2.44342 3.78061 2.10134 4.63691 2.10134 5.67092C2.10134 6.41412 2.26423 7.14924 2.59002 7.87628C2.91581 8.60332 3.52666 9.45153 4.42258 10.4209C5.3185 11.3903 6.13297 12.2224 6.866 12.9171C7.59902 13.6118 8.74743 14.6701 10.3112 16.0918L10.4089 16.1888L10.5067 16.0918Z" fill="#9B9B9B"/>
              </svg>
            </button>  
          </li>
          <li>
            <button className="btn-reset headerBtn userBtn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 10C0 4.579 4.579 0 10 0C15.421 0 20 4.579 20 10C20 13.19 18.408 16.078 16 17.924V18H15.898C14.23 19.245 12.187 20 10 20C7.813 20 5.77 19.245 4.102 18H4V17.924C1.592 16.078 0 13.189 0 10ZM7.12347 15.236C6.59154 15.6639 6.22136 16.2604 6.074 16.927C7.242 17.604 8.584 18 10 18C11.416 18 12.758 17.604 13.926 16.927C13.7785 16.2605 13.4082 15.6641 12.8764 15.2362C12.3445 14.8083 11.6827 14.5744 11 14.573H9C8.3173 14.5742 7.6554 14.808 7.12347 15.236ZM13.7677 13.4117C14.5877 13.9574 15.2286 14.7329 15.61 15.641C17.077 14.182 18 12.176 18 10C18 5.663 14.337 2 10 2C5.663 2 2 5.663 2 10C2 12.176 2.923 14.182 4.39 15.641C4.77144 14.7329 5.41227 13.9574 6.23227 13.4117C7.05227 12.866 8.01501 12.5742 9 12.573H11C11.985 12.5742 12.9477 12.866 13.7677 13.4117ZM6 8C6 5.72 7.72 4 10 4C12.28 4 14 5.72 14 8C14 10.28 12.28 12 10 12C7.72 12 6 10.28 6 8ZM8 8C8 9.178 8.822 10 10 10C11.178 10 12 9.178 12 8C12 6.822 11.178 6 10 6C8.822 6 8 6.822 8 8Z" fill="#9B9B9B"/>
              </svg>
            </button> 
          </li>
        </ul>
      </header>
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
      <main className="content">
        <div className='sneakersHead'>
          <h2 className="subtitle">Все кроссовки</h2>
          <div className='searchBlock'>
            <img src="/img/search.svg" alt="Поиск" />
            <input type="text" placeholder='Поиск...'/>
          </div>
        </div>
        <div className="sneakers">
          <article className="card">
            <div className="cardLikeBtn">
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
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Зеленые кроссовки Nike Blazer Mid Suede" />
            <h3 className="cardTitle">Мужские Кроссовки Nike Blazer Mid Suede</h3>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column cardMeta">
                <p>Цена:</p>
                <b>12 999руб.</b>
              </div>
                <button className="btn-reset cardBtn itemBtn" onClick={toggleClass} aria-label="Добавить в корзину">
                  <svg viewBox="0 0 100 100">
                    <path d="M20,55 L40,75 L77,27" fill="none" stroke="#18c91b" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <img className='btnImage' width={11} height={11} src="/img/plus.svg" alt="" aria-hidden="true" />
                </button>
            </div>
          </article>
          <article className="card">
            <div className="cardLikeBtn">
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
          <img width={133} height={112} src="/img/sneakers/2.jpg" alt="Зеленые кроссовки Nike Blazer Mid Suede" />
          <h3 className="cardTitle">Мужские Кроссовки Nike Air Max 270</h3>
          <div className="d-flex justify-between">
            <div className="d-flex flex-column cardMeta">
              <p>Цена:</p>
              <b>12 999руб.</b>
            </div>
            <button className="btn-reset cardBtn itemBtn" onClick={toggleClass} aria-label="Добавить в корзину">
              <svg viewBox="0 0 100 100">
                <path d="M20,55 L40,75 L77,27" fill="none" stroke="#18c91b" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <img width={11} height={11} src="/img/plus.svg" alt="" aria-hidden="true" />
            </button>
          </div>
          </article>
          <article className="card">
            <div className="cardLikeBtn">
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
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt="Зеленые кроссовки Nike Blazer Mid Suede" />
            <h3 className="cardTitle">Мужские Кроссовки Nike Blazer Mid Suede</h3>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column cardMeta">
                <p>Цена:</p>
                <b>8 499 руб.</b>
              </div>
                <button className="btn-reset cardBtn itemBtn" onClick={toggleClass} aria-label="Добавить в корзину">
                  <svg viewBox="0 0 100 100">
                    <path d="M20,55 L40,75 L77,27" fill="none" stroke="#18c91b" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <img width={11} height={11} src="/img/plus.svg" alt="" aria-hidden="true" />
                </button>
            </div>
          </article>
          <article className="card">
            <div className="cardLikeBtn">
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
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Зеленые кроссовки Nike Blazer Mid Suede" />
            <h3 className="cardTitle">Кроссовки Puma X Aka Boku Future Rider</h3>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column cardMeta">
                <p>Цена:</p>
                <b>8 999 руб.</b>
              </div>
                <button className="btn-reset cardBtn itemBtn" onClick={toggleClass} aria-label="Добавить в корзину">
                  <svg viewBox="0 0 100 100">
                    <path d="M20,55 L40,75 L77,27" fill="none" stroke="#18c91b" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <img width={11} height={11} src="/img/plus.svg" alt="" aria-hidden="true" />
                </button>
            </div>
          </article>
          <article className="card">
            <div className="cardLikeBtn">
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
            <img width={133} height={112} src="/img/sneakers/5.jpg" alt="Зеленые кроссовки Nike Blazer Mid Suede" />
            <h3 className="cardTitle">Мужские Кроссовки Under Armour Curry 8</h3>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column cardMeta">
                <p>Цена:</p>
                <b>15 199 руб.</b>
              </div>
                <button className="btn-reset cardBtn itemBtn" onClick={toggleClass} aria-label="Добавить в корзину">
                  <svg viewBox="0 0 100 100">
                    <path d="M20,55 L40,75 L77,27" fill="none" stroke="#18c91b" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <img width={11} height={11} src="/img/plus.svg" alt="" aria-hidden="true" />
                </button>
            </div>
          </article>
          <article className="card">
            <div className="cardLikeBtn">
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
            <img width={133} height={112} src="/img/sneakers/6.jpg" alt="Зеленые кроссовки Nike Blazer Mid Suede" />
            <h3 className="cardTitle">Мужские Кроссовки Nike Kyrie 7</h3>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column cardMeta">
                <p>Цена:</p>
                <b>11 299 руб.</b>
              </div>
                <button className="btn-reset cardBtn itemBtn" onClick={toggleClass} aria-label="Добавить в корзину">
                  <svg viewBox="0 0 100 100">
                    <path d="M20,55 L40,75 L77,27" fill="none" stroke="#18c91b" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <img width={11} height={11} src="/img/plus.svg" alt="" aria-hidden="true" />
                </button>
            </div>
          </article>
          <article className="card">
            <div className="cardLikeBtn">
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
            <img width={133} height={112} src="/img/sneakers/7.jpg" alt="Зеленые кроссовки Nike Blazer Mid Suede" />
            <h3 className="cardTitle">Мужские Кроссовки Jordan Air Jordan 11</h3>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column cardMeta">
                <p>Цена:</p>
                <b>10 799 руб.</b>
              </div>
                <button className="btn-reset cardBtn itemBtn" onClick={toggleClass} aria-label="Добавить в корзину">
                  <svg viewBox="0 0 100 100">
                    <path d="M20,55 L40,75 L77,27" fill="none" stroke="#18c91b" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <img width={11} height={11} src="/img/plus.svg" alt="" aria-hidden="true" />
                </button>
            </div>
          </article>
          <article className="card">
            <div className="cardLikeBtn">
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
            <img width={133} height={112} src="/img/sneakers/8.jpg" alt="Зеленые кроссовки Nike Blazer Mid Suede" />
            <h3 className="cardTitle">Мужские Кроссовки Nike LeBron XVIII</h3>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column cardMeta">
                <p>Цена:</p>
                <b>16 499 руб.</b>
              </div>
                <button className="btn-reset cardBtn itemBtn" onClick={toggleClass} aria-label="Добавить в корзину">
                  <svg viewBox="0 0 100 100">
                    <path d="M20,55 L40,75 L77,27" fill="none" stroke="#18c91b" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <img width={11} height={11} src="/img/plus.svg" alt="" aria-hidden="true" />
                </button>
            </div>
          </article>
          <article className="card">
            <div className="cardLikeBtn">
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
            <img width={133} height={112} src="/img/sneakers/9.jpg" alt="Зеленые кроссовки Nike Blazer Mid Suede" />
            <h3 className="cardTitle">Мужские Кроссовки Nike Lebron XVIII Low</h3>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column cardMeta">
                <p>Цена:</p>
                <b>13 999 руб.</b>
              </div>
                <button className="btn-reset cardBtn itemBtn" onClick={toggleClass} aria-label="Добавить в корзину">
                  <svg viewBox="0 0 100 100">
                    <path d="M20,55 L40,75 L77,27" fill="none" stroke="#18c91b" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <img width={11} height={11} src="/img/plus.svg" alt="" aria-hidden="true" />
                </button>
            </div>
          </article>
          <article className="card">
            <div className="cardLikeBtn">
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
            <img width={133} height={112} src="/img/sneakers/10.jpg" alt="Зеленые кроссовки Nike Blazer Mid Suede" />
            <h3 className="cardTitle">Мужские Кроссовки Nike Blazer Mid Suede</h3>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column cardMeta">
                <p>Цена:</p>
                <b>8 499 руб.</b>
              </div>
                <button className="btn-reset cardBtn itemBtn" onClick={toggleClass} aria-label="Добавить в корзину">
                  <svg viewBox="0 0 100 100">
                    <path d="M20,55 L40,75 L77,27" fill="none" stroke="#18c91b" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <img width={11} height={11} src="/img/plus.svg" alt="" aria-hidden="true" />
                </button>
            </div>
          </article>
          <article className="card">
            <div className="cardLikeBtn">
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
            <img width={133} height={112} src="/img/sneakers/11.jpg" alt="Зеленые кроссовки Nike Blazer Mid Suede" />
            <h3 className="cardTitle">Кроссовки Puma X Aka Boku Future Rider</h3>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column cardMeta">
                <p>Цена:</p>
                <b>8 999 руб.</b>
              </div>
                <button className="btn-reset cardBtn itemBtn" onClick={toggleClass} aria-label="Добавить в корзину">
                  <svg viewBox="0 0 100 100">
                    <path d="M20,55 L40,75 L77,27" fill="none" stroke="#18c91b" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <img width={11} height={11} src="/img/plus.svg" alt="" aria-hidden="true" />
                </button>
            </div>
          </article>
          <article className="card">
            <div className="cardLikeBtn">
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
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Зеленые кроссовки Nike Blazer Mid Suede" />
            <h3 className="cardTitle">Мужские Кроссовки Nike Kyrie Flytrap IV</h3>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column cardMeta">
                <p>Цена:</p>
                <b>11 299 руб.</b>
              </div>
                <button className="btn-reset cardBtn itemBtn" onClick={toggleClass} aria-label="Добавить в корзину">
                  <svg viewBox="0 0 100 100">
                    <path d="M20,55 L40,75 L77,27" fill="none" stroke="#18c91b" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <img width={11} height={11} src="/img/plus.svg" alt="" aria-hidden="true" />
                </button>
            </div>
          </article> 
        </div>
      </main>
    </div>
  );
}

export default App;
