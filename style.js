const API_URL_PRODUCTS = 'https://fakestoreapi.com/products';
const API_URL_ORDER = 'https://fakestoreapi.com/order'
// Button Aktiv

function aktivBut() {
    const navItem = document.querySelectorAll('.nav__item');
    navItem.forEach(element => {
        element.addEventListener('mousedown', (event) => {
            const navAktiv = document.querySelector('.nav__aktiv');
            navAktiv.classList.remove('nav__aktiv');
            event.target.classList.toggle('nav__aktiv');
        })
    });
}
aktivBut()

//Show Menu

const shop = document.querySelector('.shop')
const show = document.querySelector('.nav__shop__item ')
shop.addEventListener('mousedown', () => {
    show.classList.toggle('show__menu');
})

// Show Cart

const cart = document.querySelector('.cart__add')
const cartShow = document.querySelector('.cart')
cart.addEventListener('click', () => {
    cartShow.classList.toggle('show__cart');
})
// Fetch

let addCart = 'В корзину';
let removeCart = 'В корзине';
htmlCatalog = '';

fetch(API_URL_PRODUCTS)
    .then(response => response.json())
    .then(shopProduct => {
        shopProduct.forEach(({ id, title, price, image, rating }) => {
//Function sale
            // function sale() {
            //     if (sale) {
            //         return innerHTML = "<img class = 'sale' src ='img/sale.png'/>"
            //     } else if(!sale) {
            //         return innerHTML = "";
            //     }
            // }
// Function Star
            function ratingStar() {
                if (rating.rate <= 3) {
                    return innerHTML = '&#11088;&#11088;'
                } else if (rating.rate >= 3 && rating.rate < 4) {
                    return innerHTML = '&#11088;&#11088;&#11088;'
                } else if (rating.rate >= 4 && rating.rate < 5) {
                    return innerHTML = '&#11088;&#11088;&#11088;&#11088;&#11088;'
                }
            }
            htmlCatalog += `   
            <li  id='${id}' class = "main__product__card">
            <img  class = "product__img" src= "${image}"/>
            <p   class = "product__title">${title}</p>
            <p>${ratingStar()}</p>
            <p  class = "product__price">${price.toLocaleString('en-US',
                {
                    style: 'currency',
                    currency: 'USD'
                })}</p>
            <button class = "product__add">${addCart}</button>          
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


        function count() {
            productAdd.forEach(elem => {
                elem.addEventListener('click', (event) => {
                    // // let data = {
                    // //     id:event.target.parentElement.id}
                    //     fetch(API_URL_ORDER, {
                    //         method: 'POST',
                    //         headers: {
                    //             "alg": "HS256",
                    //             "typ": "JWT"
                    //         },
                    //         body: JSON.stringify(data),

                    //     });
                    //     console.log(data);
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


