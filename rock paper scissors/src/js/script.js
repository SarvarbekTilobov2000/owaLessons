let score = document.querySelector('.score')
let btnsWrap = document.querySelector('.btn-wrap')
let btns = document.querySelectorAll('.btns')
let resBtns = document.querySelectorAll('.res-btn')
let rulesBtn = document.querySelector('.rules-btn')
let play = document.querySelector('.playAgain')
let crosBtn = document.querySelector('.cross-btn')
let resultWrap = document.querySelector('.result-wrap')
let rulestWrap = document.querySelector('.rules-wrap')
let resultCardH1 = document.querySelector('.result h1')

btns.forEach((i, ind) => {
    i.addEventListener('click', (e) => {
        btnsWrap.classList.toggle('hide')
        resultWrap.classList.toggle('hide');
        resBtns[0].setAttribute('src', e.target.getAttribute('src'))
        resBtns[1].setAttribute('src', btns[Math.floor(Math.random() * btns.length)].getAttribute('src'))
        let v0 = resBtns[0].getAttribute('src');
        let v1 = resBtns[1].getAttribute('src');
        if (v0 == v1) resultCardH1.textContent = `DRAW`//  durrang
        if (v0 == "src/img/paper.png" && v1 == "src/img/rock.png") resultCardH1.textContent = `YOU WIN`, score.textContent = Number(score.textContent) + 2
        if (v0 == "src/img/paper.png" && v1 == "src/img/scissors.png") resultCardH1.textContent = `YOU LOSE`, score.textContent = Number(score.textContent) + 1
        if (v0 == "src/img/rock.png" && v1 == "src/img/paper.png") resultCardH1.textContent = `YOU LOSE`, score.textContent = Number(score.textContent) + 1
        if (v0 == "src/img/rock.png" && v1 == "src/img/scissors.png") resultCardH1.textContent = `YOU WIN`, score.textContent = Number(score.textContent) + 2
        if (v0 == "src/img/scissors.png" && v1 == "src/img/paper.png") resultCardH1.textContent = `YOU WIN`, score.textContent = Number(score.textContent) + 2
        if (v0 == "src/img/scissors.png" && v1 == "src/img/rock.png") resultCardH1.textContent = `YOU LOSE`, score.textContent = Number(score.textContent) + 1
    })
})

rulesBtn.addEventListener('click', (e) => {
    rulestWrap.classList.toggle('hide')
})

play.addEventListener('click', (e) => {
    btnsWrap.classList.toggle('hide')
    resultWrap.classList.toggle('hide');
    resultCardH1.textContent = ''
})

crosBtn.addEventListener('click', (e) => {
    rulestWrap.classList.toggle('hide')
})




