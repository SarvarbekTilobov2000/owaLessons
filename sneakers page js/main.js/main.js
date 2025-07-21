let tabContent = document.querySelectorAll('.tab-contents img')
let tabLink = document.querySelectorAll('.tab-link')
let body = document.querySelector('body')
let btns = document.querySelectorAll('.content-wrap button')
let modalWrap = document.querySelector('.modal-wrap')
let cross = document.querySelector('.cross')
let items = document.querySelectorAll('.item')
let content = document.querySelector('.content')
let counter = 1

tabLink.forEach((it, ind) => {
    it.addEventListener('click', () => {
        tabContent.forEach((item, inx) => {
            if (ind === inx) {
                item.classList.remove('hide'); item.classList.add('active')
            } else { item.classList.remove('active'); item.classList.add('hide') }
        })
    })
})

tabContent.forEach((i) => {
    i.addEventListener('click', (e) => {
        modalWrap.classList.toggle('hide')
        // body.style = `overflow: hidden !important;`
    })
})

cross.addEventListener('click', (e) => {
    modalWrap.classList.toggle('hide')
    body.style = `overflow: auto`
})


btns[1].addEventListener('click', (e) => {
    counter++
    if (counter > items.length) { counter = 1 }
    content.setAttribute('src', `images/tab-imgs/img-${counter}.png`)
    items[counter - 1].style = `border: #D46407 solid 2px;`

})


btns[0].addEventListener('click', (e) => {
    counter--
    if (counter < 1) { counter = items.length }
    content.setAttribute('src', `images/tab-imgs/img-${counter}.png`)
})









