import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

flsFunctions.ibg();

import Swiper, { Navigation, Pagination } from  'swiper';

const swiper = new Swiper('.swiper-container', {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 10,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
}
});





