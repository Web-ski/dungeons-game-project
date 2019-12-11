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

		const doStep = function (direction) {
			const distance = 50;
			if (direction === 65) {
				let position = hero.style.left;
				if (position !== '50px') {
					let positionNmbr = converter(position);
					let step = positionNmbr - distance;
					hero.style.left = step + "px";
				}
			} else if (direction === 87) {
				let position = hero.style.top;
				if (position !== '50px') {
					let positionNmbr = converter(position);
					let step = positionNmbr - distance;
					hero.style.top = step + "px"
				}
			} else if (direction === 68) {
				let position = hero.style.left;
				if (position !== '350px') {
					let positionNmbr = converter(position);
					let step = positionNmbr + distance;
					hero.style.left = step + "px"
				}
			} else if (direction === 83) {
				let position = hero.style.top;
				if (position !== '350px') {
					let positionNmbr = converter(position);
					let step = positionNmbr + distance;
					hero.style.top = step + "px"
				}
			};
		};

		const move = function () {
			let key = event.keyCode;
			console.log(key);
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