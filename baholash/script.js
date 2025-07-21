let items = document.querySelectorAll('ul li')
let btn = document.querySelector('.btn')
let box2 = document.querySelector('.box2')
let box = document.querySelector('.box')
let h4 = document.querySelector('.box2 h4')
let b = false
let c
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', (e) => {
        let a = i
        for (let i = 0; i <= a; i++) {
            items[i].style = `
            background-color: #E06912;
            color: #fff;
            `
        }
        b = true
        if (b) {
            btn.addEventListener('click', (e) => {
                box.classList.toggle('hide')
                box2.classList.toggle('show')
                h4.textContent = `You selected ${i + 1} out of 5`
            })
        }
    })
}


