let bars = document.querySelector('.bars')
// let body = document.querySelector('body')

let mobileWrap = document.querySelector('.mobile-nav-wrap')


bars.addEventListener('click', (i) => {
    mobileWrap.classList.toggle('show')
    
    console.log(mobileWrap.getAttribute('class'));
})


