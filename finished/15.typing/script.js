let str = `adipisicing elit. Quia, officiis.`

for (let i = 0; i < str.length; i++) {
	document.querySelector('h1').innerHTML += `<span>${str[i]}</span>`
}

const spanElements = document.querySelectorAll("h1 span")

let currentInd = 0

spanElements[currentInd].classList.add('active')

window.addEventListener('keydown', (e) => {
	if (e.key === spanElements[currentInd].textContent) {
		console.log("to'gri")
		spanElements[currentInd].classList.remove('active')
		spanElements[currentInd].classList.remove('wrong')
		spanElements[currentInd].classList.add('correct')

		currentInd++
		spanElements[currentInd].classList.add('active')

	} else {
		console.log("nato'gri")

		spanElements[currentInd].classList.remove('active')
		spanElements[currentInd].classList.add('wrong')
	}
})