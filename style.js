
const shop = document.querySelector('.shop')
const show = document.querySelector('.nav__shop__item ')
shop.addEventListener('mousedown', () => {
    show.classList.toggle('show__menu');
})
// button Aktiv
const navItem = document.querySelectorAll('.nav__item');
navItem.forEach(element => {
    element.addEventListener('mousedown', (event) => {
        const navAktiv = document.querySelector('.nav__aktiv');
        navAktiv.classList.remove('nav__aktiv');
        event.target.classList.toggle('nav__aktiv');

    })
});

// 

let addCart = 'В корзину';
let removeCart = 'В корзине';
htmlCatalog = '';

const url = 'https://fakestoreapi.com/products'
fetch(url)
    .then(response => response.json())
    .then(shopProduct => {
        shopProduct.forEach(({ id, title, price, image, rating}) => {
        
            function ratingStar() {
                if (rating.rate <= 3) {
                    return innerHTML = '&#11088;&#11088;'
                } else if (rating.rate >= 3 && rating.rate < 4) {
                    return innerHTML = '&#11088;&#11088;&#11088;'
 
                } else if (rating.rate >= 4 && rating.rate < 5) {
                    return innerHTML = '&#11088;&#11088;&#11088;&#11088;'
                }
            }
 
            htmlCatalog += `
            <li class = "main__product__card">
            <img class = "product__img" src= "${image}"/>
            <p class = "product__title">${title}</p>
           <p>${ratingStar()}</p>
            <p class = "product__price">${price.toLocaleString('en-US',
                {
                    style: 'currency',
                    currency: 'USD'
                })}</p>
            <button class = "product__add">${addCart}</button>
            </li>
            </li>
            `;

        });
        const html = `
        <ul class = "main__products">
        ${htmlCatalog}
        </ul>`

        document.getElementById('main__product').innerHTML = html;
        const cartCount = document.querySelector('.cart__count');
        const productAdd = document.querySelectorAll('.product__add');

        //butoon count

        function count() {
            productAdd.forEach(elem => {
                elem.addEventListener('click', (event) => {
                    const text = event.target.innerText;
                    if (text === `${addCart}`) {
                        event.target.innerText = `${removeCart}`
                        event.target.classList.add('add__aktiv');
                        cartCount.innerHTML++;
                    } else {
                        event.target.innerText = `${addCart}`
                        cartCount.innerHTML--;
                        event.target.classList.remove('add__aktiv');
                    }
                })
            });
        }
        count();

    });



