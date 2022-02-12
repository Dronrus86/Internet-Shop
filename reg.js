const form = document.querySelector('#form');
const loginInput = document.querySelectorAll('.login__input');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const fullName = document.querySelector('.fullName');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert(`${firstName.value} ${lastName.value} Вы зарегестрированы`)
    document.location.href = 'index.html'
    registration();
    loginInput.forEach(element => {
    element.value = '';
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
