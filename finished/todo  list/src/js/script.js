let ul = document.querySelector('ul')
let note = document.querySelector('.note')
let modal = document.querySelector('.modal')
let modal_wrap = document.querySelector('.modal .wrap')
let inp = document.querySelector('.inp')
let btn1 = document.querySelector('.btn1')
let cencel = document.querySelector('.cencel')
let apply = document.querySelector('.apply')
let img = document.querySelector('.detective')
let checkboxs = document.querySelectorAll('.checkbox')
let allBtn = document.querySelector('.all_btn')
let night_btn = document.querySelector('.night_btn')

function addTodoF() {
    modal.classList.add('show')
    modal.style = `backdrop-filter:blur(5px);
        background-color: rgba(0, 0, 0, 0.45);`
    inp.focus()
}

function cencelF() {
    modal.classList.remove('show')
    inp.value = ''
}

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        modal.classList.remove('show')
    }
})

function applyF() {
    let li = document.createElement('li')
    if (inp.value !== "") {
        li.innerHTML = `
        <label for="">
        <div>
               <input type="checkbox" class="checkbox">
            <span>${inp.value}</span>
        </div>
        <button class='crosBtn'>delete</button>
    </label>
            `
        ul.insertAdjacentElement('afterbegin', li)
        let checkbox = document.querySelector('.checkbox')
        inp.value = ''
        if (ul.children.length !== 0) {
            img.style = `display:none;`
        }
        modal.classList.remove('show')
    }

    document.querySelectorAll('.crosBtn').forEach((i) => {
        i.addEventListener('click', (e) => {
            i.parentElement.parentElement.remove()
            if (!ul.children.length ) {
                img.style = `display:block;`  
            }
        })
    })
}

function all() {
    document.querySelectorAll('ul li input').forEach((el) => {
        console.log('all items');

    });
}

function nightMode() {
    document.body.classList.toggle('night_body')
    // document.body.style = `background-image:url(/src/img/bg2-Cus1jx0Y.jpg);`
    modal_wrap.style = `background-color: #051336;`
}

// document.querySelector('nav  button').forEach((e) => {
// console.log();

// })



btn1.addEventListener('click', addTodoF)
cencel.addEventListener('click', cencelF)
night_btn.addEventListener('click', nightMode)
modal_wrap.addEventListener('keydown', (e) => { if (e.key == `Enter`) applyF() })
apply.addEventListener('click', applyF)
allBtn.addEventListener('click', all)
