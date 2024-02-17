import { useLocation } from "react-router-dom";

import './our-coffee-or-for-your-pleasure-main.scss'

const OurCoffeeOrForYourPleasureMain = () => {
   const location = useLocation();
   const currentPage = location.pathname;

   const bgImagePleasure = currentPage === '/for-your-pleasure' ? ' for-your-pleasure' : '';
   const title = currentPage === '/for-your-pleasure' ? 'For your pleasure' : 'Our Coffee';
   const className = 'our-coffee-main' + bgImagePleasure;


   return (
      <section className={className}>
         <div className="our-coffee-main__container container">
            <div className="our-coffee-main__content">
               <h2 className="our-coffee-main__title">{title}</h2>
            </div>
         </div>
      </section>
   )
}

export default OurCoffeeOrForYourPleasureMain;