let lastName = document.querySelector('.lastName')
let firstName = document.querySelector('.firstName')
let email = document.querySelector('.email')
let radios = document.querySelectorAll('div')
let textarea = document.querySelector('.textarea')
let checkbox = document.querySelector('.checkbox')
let btn = document.querySelector('.submitBtn')
let form = document.querySelector('form')
let span = document.querySelector('.err')
let message = document.querySelector('.message')

let isValidate = true
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let labels = document.querySelectorAll('label')
    labels.forEach((i) => {
        if (i.children[1].value == '') {
            i.children[1].style = `border:red solid 2px;`
            isValidate = false
        } else {
            i.children[1].style = `border: rgba(0, 0, 0, 0.297) 2px solid;`
            isValidate = true
        }
    })

    let a = 0
    radios.forEach((i) => { return i.children[0].checked ? a++ : a })
    if (a == 1) {
        radios.forEach((i) => { i.style = `border: rgba(0, 0, 0, 0.297) 2px solid;`; isValidate = true })
    } else if (a == 0) {
        radios.forEach((i) => { i.style = `border:red solid 2px;`; isValidate = false })
    }

    if (!checkbox.checked) {
        span.style = `display:block;`
        isValidate = false
    } else {
        span.style = `display:none`
        isValidate = true
    }

    if (isValidate) {
        message.style = `display:block;`
        labels.forEach((i) => {
            i.children[1].value = ``
        })
        radios.forEach((i) => { return i.children[0].checked = false })
        checkbox.checked = false

        setTimeout(() => {
            message.style = `display:none;`
        }, 3000)
    } else {
        console.log('test');
    }
})

console.log(form.children);
