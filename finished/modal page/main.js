let box = document.querySelector('#box')
let btn = document.querySelector('.btn')

function change() {
  // let res = Math.trunc(Math.random() * 10 + 1)
  let count = 0
  btn.classList.toggle()
  box.classList = res
  console.dir(box)
}
btn.addEventListener('click', change)



body.innerHTML = `
<div class="container">
        <div class="block1">
            <h3>Bill</h3>
            <label for="#"><input type="number">
                <h3>142.56</h3>
            </label>
            <h3>Select Tip %</h3>
            <ul>
                <li>5%</li>
                <li>10%</li>
                <li>15%</li>
                <li>25%</li>
                <li>50%</li>
                <li>Custom</li>
            </ul>
            <h3>Number of People</h3>
            <label for="#">
                <i class="fa-solid fa-user"></i>
                <input type="number">
                <p>5</p>
            </label>
        </div>
        <div class="block2">
            <div>
                <label for="#">
                    <div>
                        <hh3>Tip Amount</hh3>
                        <p>/ person</p>
                    </div>
                    <h1>$4.27</h1>
                </label><label for="#">
                    <div>
                        <hh3>Total</hh3>
                        <p>/ person</p>
                    </div>
                    <h1>$32.79</h1>
                </label>
            </div>
            <button>RESET</button>
        </div>
    </div>`

console.dir(body);




