const snake = document.querySelector('.snake');
const food = document.querySelector('.food');
let topPosition = 0;
let leftPosition = 0;
let foodTopPosition = 0;
let foodLeftPosition = 0;
let direction = 'right';
let gameLoopTimeout;

document.addEventListener('keydown', (event) => {
	switch (event.key) {
		case 'ArrowUp':
			if (direction !== 'down') {
				direction = 'up';
			}
			break;
		case 'ArrowDown':
			if (direction !== 'up') {
				direction = 'down';
			}
			break;
		case 'ArrowLeft':
			if (direction !== 'right') {
				direction = 'left';
			}
			break;
		case 'ArrowRight':
			if (direction !== 'left') {
				direction = 'right';
			}
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

function updateSnakePosition() {
    switch (direction) {
        case 'up':
            topPosition = Math.max(0, topPosition - 20);
            snake.style.top = topPosition + 'px';
            break;
        case 'down':
            topPosition = Math.min(480, topPosition + 20);
            snake.style.top = topPosition + 'px';
            break;
        case 'left':
            leftPosition = Math.max(0, leftPosition - 20);
            snake.style.left = leftPosition + 'px';
            break;
        case 'right':
            leftPosition = Math.min(480, leftPosition + 20);
            snake.style.left = leftPosition + 'px';
            break;
    }
}


function checkWallCollision() {
	if (topPosition < 0 || topPosition > 480 || leftPosition < 0 || leftPosition > 480) {
		alert('Game Over!');
		clearTimeout(gameLoopTimeout);
		startButton.disabled = false;
	}
}

function checkSelfCollision() {
	let snakeBody = document.querySelectorAll('.snake-body');
	snakeBody.forEach((body) => {
		if (topPosition === parseInt(body.style.top) && leftPosition === parseInt(body.style.left)) {
			alert('Game Over!');
			clearTimeout(gameLoopTimeout);
			startButton.disabled = false;
		}
	});
}

function gameLoop() {
	updateSnakePosition();
	checkFoodCollision();
	checkWallCollision();
	checkSelfCollision();
	gameLoopTimeout = setTimeout(gameLoop, 100);
}

updateFoodPosition();

const startButton = document.getElementById('start-button');
startButton.addEventListener('click', () => {
	startButton.disabled = true;
	topPosition = 0;
	leftPosition = 0;
	direction = 'right';
	const snakeBody = document.querySelectorAll('.snake-body');
	snakeBody.forEach((body) => {
		body.parentNode.removeChild(body);
	});
	snake.style.top = 0;
    snake.style.left = 0;
snake.insertAdjacentHTML('afterend', '<div class="snake-body"></div>');
gameLoopTimeout = setTimeout(gameLoop, 100);
});

