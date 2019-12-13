const heroMover = () => {

	const game = document.getElementsByClassName('game')[0];
	const activeBoard = game.getElementsByClassName('active')[0];


	const createHero = () => {
		//hero
		const addHero = document.createElement('figure');
		activeBoard.appendChild(addHero);
	}

	const styleHero = () => {
		const hero = game.getElementsByTagName('figure')[0];
		hero.setAttribute('class', 'hero');
		hero.style.top = '200px';
		hero.style.left = '200px';
	}

	const moveHero = () => {
		const hero = game.getElementsByClassName('hero')[0];
		/* Convert from String to Number*/
		const converter = function (value) {
			let arr = value.split("");
			arr.pop();
			arr.pop();
			if (arr.length === 1) {
				let x = arr[0];
				return parseInt(x);
			} else if (arr.length === 2) {
				let xx = arr[0] + arr[1];
				return parseInt(xx);
			} else if (arr.length === 3) {
				let xxx = arr[0] + arr[1] + arr[2];
				return parseInt(xxx);
			};
		};

		/* Door chacker */
		const roomCheck = (stepDirection) => {
			//which room is active []
			let activeRoom = activeBoard;

			//check specifity of room
			let roomName = activeRoom.getAttribute('data-room');

			//door position
			switch (stepDirection) {
				case 'top': //Top
					console.log(roomName);
					if (roomName[0] === 0) {
						return false;
					} else {
						return true;
					}
					break;
				case 'right': //Left
					//console.log(roomName);
					if (roomName[1] === 0) {
						return false;
					} else {
						return true;
					}
					break;
				case 'bottom': //Left
					//console.log(roomName);
					if (roomName[2] === 0) {
						return false;
					} else {
						return true;
					}
					break;
				case 'left': //Left
					//console.log(roomName);
					if (roomName[3] === 0) {
						return false;
					} else {
						return true;
					}
					break;
			}
		}

		const doStep = function (direction) {
			const distance = 50;

			const step = (position, XY) => {
				let positionNmbr = converter(position);

				switch (XY) {
					case 'XL': //Left
						let stepL = positionNmbr - distance;
						hero.style.left = stepL + "px";
						break;
					case 'YT': //Left
						let stepT = positionNmbr - distance;
						hero.style.top = stepT + "px";
						break;
					case 'XR': //Left
						let stepR = positionNmbr + distance;
						hero.style.left = stepR + "px";
						break;
					case 'YB': //Left
						let stepB = positionNmbr + distance;
						hero.style.top = stepB + "px";
						break;
				}
			}

			if (direction === 65) {
				//STEP LEFT
				let positionX = hero.style.left;
				let positionY = hero.style.top;
				if (roomCheck('left') === false) {
					if (positionX !== '50px') {
						step(positionX, 'XL');
					}
				} else if (roomCheck('left') === true) {
					if (positionY !== '200px') {
						if (positionX !== '50px') {
							step(positionX, 'XL');
						}
					} else if (positionY === '200px') {
						if (positionX !== '0px') {
							step(positionX, 'XL');
						}
					}
				}
			} else if (direction === 87) {
				//STEP TOP
				let positionX = hero.style.left;
				let positionY = hero.style.top;
				if (roomCheck('top') === false) {
					if (positionY !== '50px') {
						step(positionY, 'YT');
					}
				} else if (roomCheck('top') === true) {
					if (positionX !== '200px') {
						if (positionY !== '50px') {
							step(positionY, 'YT');
						}
					} else if (positionX === '200px') {
						if (positionY !== '0px') {
							step(positionY, 'YT');
						}
					}
				}
			} else if (direction === 68) {
				//STEP RIGHT
				let positionX = hero.style.left;
				let positionY = hero.style.top;
				if (roomCheck('right') === false) {
					if (positionX !== '350px') {
						step(positionX, 'XR');
					}
				} else if (roomCheck('right') === true) {
					if (positionY !== '200px') {
						if (positionX !== '300px') {
							step(positionX, 'XR');
						}
					} else if (positionY === '200px') {
						if (positionX !== '400px') {
							step(positionX, 'XR');
						}
					}
				}
			} else if (direction === 83) {
				//STEP BOTTOM
				let positionX = hero.style.left;
				let positionY = hero.style.top;
				if (roomCheck('bottom') === false) {
					if (positionY !== '350px') {
						step(positionY, 'YB');
					}
				} else if (roomCheck('bottom') === true) {
					if (positionX !== '200px') {
						if (positionY !== '350px') {
							step(positionY, 'YB');
						}
					} else if (positionX === '200px') {
						if (positionY !== '400px') {
							step(positionY, 'YB');
						}
					}
				}
			};
		};

		const move = function () {
			let key = event.keyCode;
			//console.log(key);
			switch (key) {
				case 65: //Left
					doStep(key)
					break;
				case 87: //Top
					doStep(key);
					break;
				case 68: //Right
					doStep(key)
					break;
				case 83: //Down
					doStep(key)
					break;
			};
		};

		document.addEventListener("keydown", move);
	}

	createHero();
	styleHero();
	moveHero();
}

heroMover();