let ul = document.querySelector('ul')
let modal = document.querySelector('.modal')
let modal_wrap = document.querySelector('.modal .wrap')
let inp = document.querySelector('.inp')
let checkbox_div = document.querySelector('.checkbox_div')
let img = document.querySelector('.detective')
let checkboxs = document.querySelectorAll('.checkbox')
let allBtn = document.querySelector('.all_btn')
let night_btn = document.querySelector('.night_btn')

checkbox_div.addEventListener('click', (e) => {
    e.target.nextElementSibling.style = `text-decoration: line-through;`
    e.target.style = `background-image: url(/src/img/checkbox_div.png);
    background-size: cover;`
    e.target.classList.add('checked')
})

// function addTodoF() {
//     //     btn1.addEventListener('click', () => {
//     //         modal.classList.add('show')
//     //         modal.style = `backdrop-filter:blur(5px);
//     //         background-color: rgba(0, 0, 0, 0.45);`
//     //     })
// }
// function cencelF() {
//     // cencel.addEventListener('click', () => {
//     //     modal.classList.remove('show')
//     //     inp.value = ''
//     // })
//     modal.addEventListener('click', (e) => {
//         if (e.target.classList.contains('modal')) {
//             modal.classList.remove('show')
//         }
//     })
// }

function addTodoF() {
    let li = document.createElement('li')
    if (inp.value.trim() !== "") {
        li.innerHTML = `
            <label for=""><input type="checkbox" class="checkbox"><span>${inp.value}</span></label>
            `
        ul.insertAdjacentElement('afterbegin', li)
        let checkbox = document.querySelector('.checkbox')
        inp.value = ''
        if (ul.children.length !== 0) {
            img.style = `display:none;`
        }
        console.log(checkbox_div.getAttribute("class"));

    }
   
}

window.addEventListener('keydown', (e) => { if (e.key === 'Enter') addTodoF() })

function allChecked() {
    allBtn.addEventListener('click', (e) => {
        let liItems = document.querySelectorAll('ul li')
        liItems.forEach((el) => {
            if (el.querySelector('input').checked) {
                el.querySelector('input').checked = false
            } else {
                el.querySelector('input').checked = true
            }
        });

    })
}

function nightMode() {
    night_btn.addEventListener('click', (e) => {
        document.body.classList.toggle('night_body')
        modal_wrap.style = `background-color: #051336;`
    })
}
addTodoF()
allChecked()
nightMode()







