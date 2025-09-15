let dL = `2025-05-07`

let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')
let seconds = document.querySelector('.seconds')
let days = document.querySelector('.days')

function getTimeRemaining(deadline) {
    let now = new Date()
    let timerDate = new Date(deadline)
    console.log(timerDate);

}


// setInterval(() => {
//     let now = new Date()
//     days.innerText = addZero(now.getDate())
//     hours.innerText = addZero(now.getHours())
//     minutes.innerText = addZero(now.getMinutes())
//     seconds.innerText = addZero(now.getSeconds())

// }, 1000)

function addZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`
    }
    return num
}

getTimeRemaining(dL)

