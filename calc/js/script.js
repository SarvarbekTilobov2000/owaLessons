let screen = document.querySelector('.screen')
let numbers = document.querySelectorAll('.number')
let del = document.querySelector('.del')
let plas = document.querySelector('.plas')
let minus = document.querySelector('.minus')
let dot = document.querySelector('.dot')
let slash = document.querySelector('.slash')
let multip = document.querySelector('.multip')
let reset = document.querySelector('.reset')
let teng = document.querySelector('.teng')


function btnEvent() {
    numbers.forEach(i => {
        i.addEventListener('click', (e) => {
            if (screen.textContent.split('').length <= 15) {
                screen.textContent += e.target.textContent
            }
        })
    })
}

function resetBtn() {
    reset.addEventListener('click', i => screen.textContent = '')
}

function delBtn() {
    del.addEventListener('click', i => {
        screen.textContent = screen.textContent.split('')
            .slice(0, screen.textContent.length - 1).join('')
    })
}

// function calc() {
//     let arr = ['+', '-', '*', '/', '0']
//     teng.addEventListener('click', (e) => {
//         arr.filter((i) => {
//             if (screen.textContent.split('')[0]) {
//                 screen.textContent = eval(screen.textContent)
//             } else {
//                 console.log(false);
//             }
//         })
//     })
// }

function calc() {
    let arr = ['+', '-', '*', '/', '0'];

    teng.addEventListener('click', () => {
        let exp = screen.textContent.trim();

       


        if (exp.startsWith('*') || exp.startsWith('/')) {
            return;
        }

        if (arr.some(sym => exp.endsWith(sym))) {
            return;
        }

        if (/^[0-9+\-*/().\s]+$/.test(exp)) {
            screen.textContent = eval(exp);
        } else {
            console.log("error");
        }
    });
}


resetBtn()
btnEvent()
delBtn()
calc()


