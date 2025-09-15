let lists = document.querySelectorAll('li')

let c = 0
for (let i = 0; i < lists.length; i++) {
    lists[i].addEventListener('click', (e) => {
        const isTogged = (lists[i].children[1].classList.toggle('show'));
        console.log(lists[i].children[1]);
        if (!isTogged) {
            lists[i].children[0].style = `transform: rotate(0deg);`
        } else{
            lists[i].children[0].style = `transform: rotate(180deg);`
        }
    })
}






