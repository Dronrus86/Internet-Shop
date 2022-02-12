const login = document.querySelector('.login');
const password = document.querySelector('.password');
const btn = document.querySelector('.btn');

function form() {

    btn.addEventListener('click', () => {
        if (login.value == '' && password.value == '') {
            login.value = 'Введите логин'
            password.value = 'Введите пароль'
        } else if (login.value != 1 && password.value != 1) {
            login.value = 'Err Login'
            password.value = 'Err Password'

        } else if (login.value == 1 && password.value == 1) {
            document.location.href = 'index.html'
        }
    })
}
clearInput();
form();

function clearInput() {
    const input = document.querySelectorAll('input');
    input.forEach(element => {
        element.addEventListener('mousedown', () => {
            element.value = '';
        });
    });

}
