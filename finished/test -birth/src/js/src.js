let inputs = document.querySelectorAll('input');
let resWrap = document.querySelectorAll('.res-wrap h1 span');
let resBtn = document.querySelector('.res-btn');

resBtn.addEventListener('click', () => {
    let isValid = true;

    inputs.forEach((i, index) => {
        let val = i.value;
        let isValidNumber = /^[0-9]+$/.test(val);
        let minLength = 2;
        if (index === inputs.length - 1) {
            minLength = 4;
        }

        if (!isValidNumber || val.length < minLength) {
            i.parentElement.classList.add('error');
            isValid = false;
        } else {
            i.parentElement.classList.remove('error');
        }
    });

    if (!isValid) return;

    let birthDate = new Date(
        +inputs[2].value,
        +inputs[1].value - 1,
        +inputs[0].value
    );

    let now = new Date();

    let ageYears = now.getFullYear() - birthDate.getFullYear();
    let ageMonths = now.getMonth() - birthDate.getMonth();
    let ageDays = now.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        let prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        ageDays += prevMonth.getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    resWrap[0].textContent = ageYears;
    resWrap[1].textContent = ageMonths;
    resWrap[2].textContent = ageDays;
});
