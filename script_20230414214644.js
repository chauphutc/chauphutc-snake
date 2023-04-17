const snake = document.querySelector('.snake');
let topPosition = 0;
let leftPosition = 0;

document.addEventListener('keydown', (event) => {
	switch (event.key) {
		case 'ArrowUp':
			topPosition -= 20;
			snake.style.top = topPosition + 'px';
			break;
		case 'ArrowDown':
			topPosition += 20;
			snake.style.top = topPosition + 'px';
			break;
		case 'ArrowLeft':
			leftPosition -= 20;
			snake.style.left = leftPosition + 'px';
			break;
		case 'ArrowRight':
			leftPosition += 20;
			snake.style.left = leftPosition + 'px';
			break;
	}
});
