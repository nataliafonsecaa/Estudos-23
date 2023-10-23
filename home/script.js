
const slides = document.querySelectorAll('.slide');
const slideButtons = document.querySelectorAll('input[type="radio"]');

slideButtons.forEach((button, index) => {
	button.addEventListener('change', () => {
		slides.forEach((slide) => {
			slide.style.display = 'none';
		});
		slides[index].style.display = 'block';
	});
});
