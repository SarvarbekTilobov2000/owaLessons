let container__2 = document.querySelector('.container__2')
let container = document.querySelector('.container')
let continent = document.querySelectorAll('.option p');

function expand__btnF(data) {
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

    // [...continent].forEach((i) => {
    //     i.addEventListener('click', (e, _, arr) => {
    //         [...continent].forEach(el => el.classList.remove('checked'))
    //         i.classList.toggle('checked')
    //         ulEl.classList.remove('active');
    //         container.innerHTML = ``
    //         let res = data.filter((country) => {
    //             return country.region === i.textContent // filterdan otgan objectlar filterdan qaytadigan massivga filteratsiya boladi
    //         })
    //         renderCard(res, container)
    //     })
    // })

    [...continent].forEach((el) => {
        el.addEventListener('click', () => {
            if (el.classList.contains('checked')) {
                el.classList.remove('checked')
                container.innerHTML = ``
                renderCard(data, container) // barcha davlatlar chiqadi
                return
            }

            [...continent].forEach(i => i.classList.remove('checked'))

            el.classList.add('checked')

            container.innerHTML = ``
            let res = data.filter(country => country.region === el.textContent)
            renderCard(res, container)

            ulEl.classList.remove('active')
        })
    })
}

function nightModeF() {
    let nightBtn = document.querySelector('.night__btn')
    nightBtn.addEventListener('click', (e) => {
        document.body.classList.toggle('night_Mode') ? 
        nightBtn.nextElementSibling.textContent = `Light Mode` :
         nightBtn.nextElementSibling.textContent = `Night Mode`;
    })
}

function renderCard(data, where) {
    data.forEach((i, ind) => {
        // ind == 0 ? console.log(i) : false

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
        container__2.innerHTML = ''

        let res = data.filter((i) => {
            if (inp.value.toLowerCase() === i.capital[0]?.toLowerCase()) {
                container.classList.add('hide')
                container__2.classList.remove('hide')
                return i
            }
        })

        if (inp.value === '') {
            container.classList.remove('hide')
            container__2.classList.add('hide')
        }
        renderCard(res, container__2)
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
        renderCard(data, container)
        searchF(data)
        expand__btnF(data)
    })
    .catch(error => {
        error
    });

nightModeF()
