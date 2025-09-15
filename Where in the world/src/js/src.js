function nightModeF() {
    let nightBtn = document.querySelector('.night__btn')
    nightBtn.addEventListener('click', (e) => {
        document.body.classList.toggle('night_Mode') ? nightBtn.nextElementSibling.textContent = `Light Mode` : nightBtn.nextElementSibling.textContent = `Night Mode`;
    })
}

function expand__btnF() {
    let expand__btn = document.querySelector('.expand__btn')
    let ulEl = document.querySelector('.option ul')
    expand__btn.addEventListener('click', (e) => {
        if (e.target !== expand__btn) {
            ulEl.classList.toggle('active')
        }
        ulEl.classList.toggle('active')
    })
    document.addEventListener('click', (e) => {
        if (ulEl.classList.contains('active')) {
            if (!ulEl.contains(e.target) && e.target !== expand__btn) {
                ulEl.classList.remove('active');
            }
        }
    });
}

function renderCard(data, where) {
    data.forEach((i, ind) => {

        ind == 0 ? console.log(i) : false

        let newCard = document.createElement('div')
        newCard.innerHTML = `<div class="card">
        <img src="${i.flags.png}" alt="${i.flags.alt}">
        <h1>${i.capital[0]}</h1>
        <div>
            <b>Population:<span>${i.population}</span></b>
            <b>Region:<span>${i.region}</span></b>
            <b>Capital:<span>${i.name.common}</span></b>
        </div>
        </div>`
        where.insertAdjacentElement('beforeend', newCard)
    });

}

function searchF(data) {
    let inp = document.querySelector('.search_input')
    inp.addEventListener('input', (e) => {
        let res = data.filter((i) => {
            if (inp.value == i.capital[0]) {
                document.body.querySelector('.container').classList.add('hide')
                let a = document.body.querySelectorAll('.card')


                document.body.querySelector('.container__2').classList.remove('hide')
                return i
            }
        })
        renderCard(res, document.body.querySelector('.container__2'))
    })
}

fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,subregion,capital,tld,borders')
    .then(response => {
        if (!response.ok) {
            throw new Error('So‘rovda xatolik: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        renderCard(data, document.body.querySelector('.container'))
        searchF(data)
    })
    .catch(error => {
        error
    });

expand__btnF()
nightModeF()
