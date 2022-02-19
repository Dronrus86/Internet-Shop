const form = document.querySelector('#form');
const loginInput = document.querySelectorAll('.login__input');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const fullName = document.querySelector('.fullName');


const email = document.querySelector('.email');
const password = document.querySelector('.password');
const login = document.querySelector('.login');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert(`${firstName.value} ${lastName.value} Вы зарегестрированы`)
    // document.location.href = 'index.html'
    registration();
    loginInput.forEach(element => {
        element.value = '';
    });

    let data = {
        payload:
        {
            "name": firstName.value,
            "username": login.value,
            "email": email.value,
            "password": password.value,
        }
    }
    const url = 'https://'
    fetch(url, {
        method: 'POST',
        headers: {
            "alg": "HS256",
            "typ": "JWT"
        },
        body: JSON.stringify(data),
    });
});



function registration() {
    const loginFullname = document.querySelector('.loginFullname');
    const blok = document.querySelectorAll('.blok');
    blok.forEach(element => {
        element.style.display = 'none';
        fullName.innerText = `Hello ${firstName.value} ${lastName.value[0]}.`
        loginFullname.appendChild(fullName)

    });

}
