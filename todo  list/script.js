let ul = document.querySelector('ul')
let note = document.querySelector('.note')
let modal = document.querySelector('.modal')
let inp = document.querySelector('.inp')
let btn1 = document.querySelector('.btn1')
let cencel = document.querySelector('.cencel')
let apply = document.querySelector('.apply')
let img = document.querySelector('.detective')
let checkboxs = document.querySelectorAll('.checkbox')
let allBtn = document.querySelector('.all_btn')
let night_btn = document.querySelector('.night_btn')

function addTodoF() {
    btn1.addEventListener('click', () => {
        modal.classList.add('show')
        modal.style = `backdrop-filter:blur(5px);
        background-color: rgba(0, 0, 0, 0.45);`
    })
}

function cencelF() {
    cencel.addEventListener('click', () => {
        modal.classList.remove('show')
        inp.value = ''
    })
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            modal.classList.remove('show')
        }
    })
}
function applyF() {
    apply.addEventListener('click', () => {
        let li = document.createElement('li')
        if (inp.value !== "") {
            li.innerHTML = `
            <label for=""><input type="checkbox" class="checkbox"><span>${inp.value}</span></label>
            `
            ul.prepend(li)
            let checkbox = document.querySelector('.checkbox')
            inp.value = ''
            if (ul.children.length !== 0) {
                img.style = `display:none;`
            }
            modal.classList.remove('show')
        }
    })
}

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
    })
}
addTodoF()
cencelF()
applyF()
allChecked()
nightMode()







