const createWalls = () => {
	const gameBoard = document.getElementsByClassName('game-board')[0];

	const wallsArr = [];
	for (let i = 0; i < 32; i++) {
		wallsArr.push({});
	}

	console.log(wallsArr);

		const addWalls = (item, index) => {
			console.log(index);
			let addWall = document.createElement('div');
			gameBoard.appendChild(addWall);
			gameBoard.children[index + 1].setAttribute('class', 'stone-walls');
		};

	wallsArr.map(addWalls);

};

createWalls();