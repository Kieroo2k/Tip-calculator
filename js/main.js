const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const error = document.querySelector('.error')
const btn = document.querySelector('.count')
const p = document.querySelector('.cost-info')
const span = document.querySelector('.cost')
let result

const countBill = () => {
	const newPrice = parseFloat(price.value)
	const newPeople = parseInt(people.value)
	const newTip = parseFloat(tip.value)

	result = (newPrice + newPrice * newTip)/newPeople

	p.style.display = "block"
	span.textContent = result.toFixed(2)
}

const checkForm = () => {
	if(price.value == '' || people.value == '' || tip.value == '0'){
		error.textContent = 'Fill all data'
		p.style.display = "none"
	}else{
		error.textContent = ''
		countBill()
	}
	
}

btn.addEventListener('click', checkForm)