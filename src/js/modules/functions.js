// Проверка поддержки webp, добавление класса webp или no-webp для HTML

export function isWebp() {
    // Проверка поддержки webp
    function testWebP(callback) {

        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    // Добавление класса _webp или _no-webp для HTML
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className)
    });
}

export async function ibg() {
    const images = document.querySelectorAll(".ibg");
    if (images.length > 0) {
        await Promise.all(
            await Object.keys(images).map(async (i) => {
                if (images[i].querySelector('img')) {
                    images[i].style.backgroundImage = `url(${images[i].querySelector('img').getAttribute('src')})`;
                }
            })
        )
    }
}

ibg().then(() => {
    console.log('images BG added correctly')
}).catch(err => {
    console.log('Error: ', err)
    throw err;
});


const menuBtn = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
menuBtn.addEventListener('click', function (e) {

    e.preventDefault();
    menuBtn.classList.toggle('icon-menu_active');
    menuBody.classList.toggle('active');
});
