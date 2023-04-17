const snake = document.querySelector('.snake');
const food = document.querySelector('.food');
let topPosition = 0;
let leftPosition = 0;
let foodTopPosition = 0;
let foodLeftPosition = 0;

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

function generateRandomPosition() {
	let randomPosition = Math.floor(Math.random() * 25) * 20;
	return randomPosition;
}

function updateFoodPosition() {
	foodTopPosition = generateRandomPosition();
	foodLeftPosition = generateRandomPosition();
	food.style.top = foodTopPosition + 'px';
	food.style.left = foodLeftPosition + 'px';
}

function checkFoodCollision() {
	if (topPosition === foodTopPosition && leftPosition === foodLeftPosition) {
		updateFoodPosition();
	}
}

function gameLoop() {
	checkFoodCollision();
	setTimeout(gameLoop, 100);
}

updateFoodPosition();
gameLoop();
