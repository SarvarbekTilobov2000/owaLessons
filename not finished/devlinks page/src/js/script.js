let addLink_btn = document.querySelector('.add-link')
let link_wrap_img = document.querySelector('.link-wrap-image')
let link_wrap = document.querySelector('.link-wrap')
let box = document.querySelector('.box')
let saveBtn = document.querySelector('.save')
let cards = document.querySelectorAll('.link-wrap .card')
function addLink() {
    addLink_btn.addEventListener('click', (e) => {
        link_wrap_img.classList.add('hide')
        let card = document.createElement('div')
        card.innerHTML = `<div class="card">
        <label class="card_header">
            <h1>Link <span>#1</span></h1>
            <p>Remove</p>
        </label>
        <div class="platform">
            <p>Platform</p>
            <select name="#" class="select">
                <option value="github">GitHub</option>
                <option value="frontendmentor">Frontend Mentor</option>
                <option value="twitter">Twitter</option>
                <option value="linkedin">LinkedIn</option>
            </select>
        </div>

        <div class="link-block">
            <p>Link</p>
            <input type="url" value="https://">
        </div>
    </div>`
        card.classList.add('card')
        link_wrap.append(card)
        document.querySelectorAll('.card').forEach((i, ind) => {
            i.setAttribute('id', ind)
        })
        console.log(card);
    })

}


function cardValidation() {
    saveBtn.addEventListener('click', (e) => {

        console.log(cards);
    })

}
cardValidation()
addLink()