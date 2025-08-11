let cardNumber = document.querySelector('.card-number')
let cardName = document.querySelector('.card-name')
let cardMonth = document.querySelector('.card-month')
let cardYear = document.querySelector('.card-year')
let cardCvc = document.querySelector('.card-cvc')
let inpName = document.querySelector('.input-name')
let inpNumber = document.querySelector('.input-number')
let inpMonth = document.querySelector('.input-month')
let inpYear = document.querySelector('.input-year')
let inpCvc = document.querySelector('.input-cvc')
let confirmBtn = document.querySelector('.confirm-btn')
let inputs = document.querySelectorAll('.c-2')
let card = {}

confirmBtn.addEventListener('click', () => {
    if (inpName.value === "" || inpName.value.trim().split('').filter((i) => i == " ") > 2 && inpName.value.trim().split(' ').filter((i) => { return /^[A-Za-z]+$/.test(i) }).join('')) {
        inpName.classList.add('input-error')
        // inpName tekshirish bloki
    } else {
        inpName.classList.remove('input-error')
    }
    if (inpNumber.value.length !== 16 || isNaN(inpNumber.value)) {
        inpNumber.classList.add('input-error')
        // inpNumber tekshirish bloki
    } else {
        inpNumber.classList.remove('input-error')
    }
    if (inpMonth.value.length == 0 || isNaN(inpMonth.value) || inpMonth.value < 1 || inpMonth.value > 31) {
        inpMonth.classList.add('input-error')
        // inpMonth tekshirish bloki
    } else {
        inpMonth.classList.remove('input-error')
    }
    if (inpYear.value.length == 0 || isNaN(inpYear.value) || inpYear.value < 2000 || inpYear.value > 2026) {
        inpYear.classList.add('input-error')
        // inpYear tekshirish bloki
    } else {
        inpYear.classList.remove('input-error')
    }
    if (inpCvc.value.length == 0 || isNaN(inpCvc.value)) {
        inpCvc.classList.add('input-error')
        // inpCvc tekshirish bloki
    } else {
        inpCvc.classList.remove('input-error')
    }
    let b = !!document.querySelectorAll('.input-error').length
    if (!b) {
        card.name = cardName.innerHTML = inpName.value.split(' ').map((i) => {
            return i.slice(0, 1).toUpperCase() + i.slice(1)
        }).join(' ').trim()
        card.number = cardNumber.innerText = inpNumber.value.slice(0, 4) + " " + inpNumber.value.slice(4, 8)
            + ' ' + inpNumber.value.slice(8, 12) + ' ' + inpNumber.value.slice(12)
        card.month = cardMonth.innerText = inpMonth.value
        card.year = cardYear.innerText = inpYear.value
        card.cvc = cardCvc.innerText = inpCvc.value
        console.log(card);
        empty()
    }

    function empty() {
        inpName.value = ''
        inpNumber.value = ''
        inpYear.value = ''
        inpMonth.value = ''
        inpCvc.value = ''
    }

})






