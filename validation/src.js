let inputs = document.querySelectorAll('input')

document.querySelector('form').addEventListener('submit', (e) => {
    let isValide = true

    let name = document.querySelector('.name')
    let email = document.querySelector('.email')
    let location = document.querySelector('.location')
    let number = document.querySelector('.number')
    let id = document.querySelector('.id')
    let password = document.querySelector('.password')
    let confirm_password = document.querySelector('.confirm_password')

    function clearErr() {
        document.querySelectorAll('.error-message').forEach(error => error.remove())

        inputs.forEach(input => {
            input.style.border = 'none'
        })

        isValide = true
    }

    function errorMessage(message, input) {
        let errEll = document.createElement('p')
        errEll.classList.add('error-message')
        errEll.style = `color: red; font - style: italic; font - size: 15px`
        errEll.textContent = message
        input.insertAdjacentElement('afterend', errEll)
        input.style.border = '2px solid red'
        isValide = false
    }

    clearErr()

    if (!name.value.trim()) errorMessage("Ismda xatolik", name)
    if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i.test(email.value.trim())) errorMessage("Emailda xatolik", email)
    if (!location.value.trim()) errorMessage('Joylashuvda xatolik', location)
    if (!/^(^\+251|^251|^0)?(9|7)\d{8}$/.test(number.value.trim())) errorMessage('Telefon raqamda xatolik', number)
    if (!id.value.trim()) errorMessage("ID'da xatolik", id)
    if (!/^[a-zA-Z0-9]{6,}$/.test(password.value.trim())) errorMessage("Parolda xatolik", password);
    if (confirm_password.value.trim() !== password.value.trim()) errorMessage("Parollar mos emas", confirm_password);
    if (isValide) { inputs.forEach(i => i.value = ''); setTimeout(alert(`muvaffaqiyatli ro'yxatdan o'tildi`), 1000) }

})





