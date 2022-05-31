const number = document.querySelectorAll('.numberBtn');
const rated = document.querySelector('.rated');
const submit = document.querySelector('.submitBtn');
const page_2 = document.querySelector('.page2');

submit.addEventListener('click', () => {
    page_2.classList.add('slide')
})

number.forEach((numbers) => {
    numbers.addEventListener('click', () => {
        rated.innerHTML = numbers.innerHTML
    })
}) 