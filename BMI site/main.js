let links = document.querySelector('.links')
let contents = document.querySelector('.content')
let wrapper = document.querySelector('.wrapper')
let btns = document.querySelector('.btns')
let inputs = document.querySelectorAll('.bmi-calculator .height, .weight')
let bmi = document.getElementById('bmi-value')

function bmiCounter() {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('input', e => {
            let res = inputs[1].value && inputs[1].value / (inputs[0].value*inputs[0].value)*10000
            bmi.textContent = res.toFixed(1)
            if(inputs[i].value === '')inputs.value =0 
        })
    }
}
bmiCounter()




function tab(links, contents) {
    for (let i = 0; i < links.children.length; i++) {
        links.children[i].addEventListener('click', (e) => {
            for (let i = 0; i < contents.children.length; i++) {
                contents.children[i].style = `visibility: hidden;`
            }
            contents.children[i].style = `visibility: visible;`
        })
    }
}
tab(links, contents)

function slider(btns) {
    for (let i = 0; i < btns.children.length; i++) {
        btns.children[i].addEventListener('click', (e) => {
            wrapper.style = `transform:translateX(${i * -40}%)`
        })
    }
}

slider(btns)