let billInp = document.querySelector('#bill-inp')
let tipBtns = document.querySelectorAll('.tip-btn')
let customTipInp = document.querySelector('.custom-tip')
let peopleInp = document.querySelector('#people')
let amount = document.querySelector('#amount')
let total = document.querySelector('#total')
let resetBtn = document.querySelector('.reset-btn')
let confirmBtn = document.querySelector('.confirm-btn')
let tipOptions = document.querySelector('.tip-options')
let isValid = false

tipBtns.forEach((i, _, arr) => {
    i.addEventListener('click', (e) => {
        arr.forEach((i) => {
            i.classList.remove('selected')
            amountInterest = e.target
        })
        e.target.classList.add('selected')
    })
})

confirmBtn.addEventListener('click', (e) => {
    if (billInp.value.trim() == "") {
        billInp.classList.add('inp-error')
        isValid = false
    } else {
        billInp.classList.remove('inp-error')
        isValid = true
    }

    let selected = [...tipBtns].some(item => item.classList.contains('selected'));
    let customFilled = customTipInp.value !== ""
    if (selected || customFilled) {
        isValid = false
        tipOptions.classList.remove('inp-error')
    } else {
        isValid = true
        tipOptions.classList.add('inp-error')
    }

    if (peopleInp.value.trim() == "") {
        isValid = false
        peopleInp.classList.add('inp-error')
    } else {
        isValid = true;
        peopleInp.classList.remove('inp-error')
    }

    if (isValid) {
        let a = [...tipBtns].filter((i) => { i.classList.cont       ains('selected')})
        console.log(a);

        amount.textContent = `$${(billInp.value / 100 * parseInt(customFilled.textContent)) / peopleInp.value}`

        total.textContent = `$${billInp.value / peopleInp.value}`;
    }
})

resetBtn.addEventListener('click', () => {
    document.body.querySelectorAll('input').forEach(e => e.value = '')
    amount.textContent = '$ 0'
    total.textContent = '$ 0'
    tipBtns.forEach((i) => {
        i.classList.remove('selected')
    })
})














