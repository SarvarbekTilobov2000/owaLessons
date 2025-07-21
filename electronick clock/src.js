let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')
let seconds = document.querySelector('.seconds')

setInterval(() => {
    let now = new Date()
    hours.innerText = addZero(now.getHours())
    minutes.innerText = addZero(now.getMinutes())
    seconds.innerText = addZero(now.getSeconds())
}, 1000)

function addZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`
    }
    return num
}



