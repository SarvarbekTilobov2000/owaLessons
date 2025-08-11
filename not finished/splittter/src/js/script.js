let billInp = document.querySelector('#bill-inp')
let tipBtns = document.querySelectorAll('.tip-btn')
let customTipInp = document.querySelector('.custom-tip')
let peopleInp = document.querySelector('#people')
let amount = document.querySelector('#amount')
let total = document.querySelector('#total')
let resetBtn = document.querySelector('.reset-btn')
let confirmBtn = document.querySelector('.confirm-btn')
let tipOptions = document.querySelector('.tip-options')
let isValid = true

tipBtns.forEach((i) => {
    i.addEventListener('click', (e) => {
        tipBtns.forEach((i) => {
            i.classList.remove('selected')

        })
        e.target.classList.add('selected')
    })
})

confirmBtn.addEventListener('click', (e) => {
    if (billInp.value.trim() == "") {
        isValid = false
        billInp.classList.add('inp-error')
    } else {
        isValid = true;
        billInp.classList.remove('inp-error')
    }

    tipBtns.forEach((i) => {
        if (!i.classList.contains('selected') || customTipInp.value.trim() == "") {
            isValid = false

            tipOptions.classList.add('inp-error')
        } else {
            isValid = false
            tipOptions.classList.remove('inp-error')

        }
    })

    if (peopleInp.value.trim() == "") {
        isValid = false
        peopleInp.classList.add('inp-error')
    } else {
        isValid = true;
        peopleInp.classList.remove('inp-error')

    }
})













