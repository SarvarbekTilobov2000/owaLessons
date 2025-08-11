let inp = document.querySelector('.inp')
let res = document.querySelector('.res')
let random = document.querySelector('.random')

let w = document.querySelector('.random')
let h = document.querySelector('.random')
let t = document.querySelector('.random')
let bgC = document.querySelector('.random')
let b = document.querySelector('.random')


inp.addEventListener('change', () => {
    res.style = ` background-color: ${inp.value};`
})




let Arr = ['red', 'green', 'blue', 'yellow', 'pink', 'black', 'white', 'purple', 'orange', 'brown']
random.addEventListener('click', () => {
    res.style = `background-color:${Arr[Math.trunc(Math.random() * 10 + 1)]}`
})

let show = document.querySelector('.show')

show.addEventListener('click', () => {
    res.style = `width: ${w.value};`
})
h.addEventListener('change', () => {
    res.style = `height: ${w.value};`
})
t.addEventListener('change', () => {
    res.textContent = t.value
})
bgC.addEventListener('change', () => {
    res.style = ` background-color: ${w.value};`
})
b.addEventListener('change', () => {
    res.style = `border-radius:${w.value};`
})


