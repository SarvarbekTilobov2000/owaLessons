let minutes = document.querySelector('.minutes')
let seconds = document.querySelector('.seconds')
let links = document.querySelectorAll('nav p')
let colors = document.querySelectorAll('.color ul li')
let fonts = document.querySelectorAll('.font ul li')
let inputs = document.querySelectorAll('.inputs input')
let settingBtn = document.querySelector('.setting')
let modal = document.querySelector('.set-wrapper')
let modalWrapper = document.querySelector('.set-wrapper')
let applyBtn = document.querySelector('.apply')
let PI = 2 * Math.PI * 90
let TIME = 0.1 * 60
let isRunning = false
let timeInterval = null
let content = document.querySelector('.content')
minutes.textContent = 25;
seconds.textContent = '00'

function formatTime(time) {
    let minutes = Math.floor(time / 60).toString().padStart(2, '0')
    let seconds = Math.floor(time % 60).toString().padStart(2, '0')
    return `${minutes}:${seconds}`
}
function updateProgress() {

}  



links.forEach((link) => {
    link.addEventListener('click', (e) => {
        links.forEach(i => i.classList.remove('active'))
        e.target.classList.add('active')
    })
})

fonts.forEach((item, ind, arr) => {
    item.addEventListener('click', (e) => {
        arr.forEach(i => i.classList.remove('active-font'))
        item.classList.add('active-font')

        if (ind == 0) document.body.style = `font-family: "Kumbh Sans", sans-serif;`
        if (ind = 1) document.body.style = `font-family: "Roboto Slab", serif;`
        if (ind = 2) document.body.style = `font-family: "Space Mono", monospace;`
    })
})

colors.forEach((item, ind, arr) => {
    item.addEventListener('click', (e) => {
        arr.forEach(i => i.classList.remove('active-color'))
        item.classList.toggle('active-color')

        if (ind == 0) links.item.style = `background-color: tomato; `;
        if (ind == 1) links.item.style = `background - color: #70F3F8; `;
        if (ind == 2) links.item.style = `background - color: #D881F8; `
    })
})

modalWrapper.addEventListener('click', (e) => {
    if (e.target.classList == 'cros' || e.target == modalWrapper) {
        modal.classList.toggle('hide')
        inputs.forEach(i => { i.classList.remove('input-error'), i.value = '' })
    }
})

settingBtn.addEventListener('click', (e) => {
    modal.classList.toggle('hide')
})

let isValidate = true
applyBtn.addEventListener('click', (e) => {

    inputs.forEach((input, ind, arr) => {
        if (!input.value) {
            input.classList.add('input-error')
            isValidate = false
        } else {
            input.classList.remove('input-error')
            isValidate.isValidate = true
        }
    })

    if (isValidate) {
        modal.classList.toggle('hide')

        function timer() {
            let valueSec = inputs[0].value * 60
            let valueMin = inputs[0].value - 1
            let interval = setInterval(() => {
                valueSec--
                if (valueSec % 60 == 0) valueMin--
                seconds.textContent = valueSec % 60
                minutes.textContent = valueMin
                if (valueSec == 0) {
                    clearInterval(interval)
                }
            }, 1000)

        }
        timer()
    }

    // let sec = 0;
    // let min = inputs[0];
    // let interval = setInterval(() => {
    //     sec--;
    //     if (sec === 10) {
    //         min--;
    //         sec = 0;
    //     }
    //     let formattedMin = String(min).padStart(2, '0');
    //     let formattedSec = String(sec).padStart(2, '0');
    //     minutes.textContent = `${ formattedMin }:${ formattedSec } `;
    // }, 1000);
})

formatTime(TIME)













