const createWalls = () => {
	const gameBoard = document.getElementsByClassName('game-board')[0];

	const wallsArr = [];
	for (let i = 0; i < 33; i++) {
		wallsArr.push({});
	}

	const addWalls = (item, index) => {
		let addWall = document.createElement('div');
		gameBoard.appendChild(addWall);
		gameBoard.children[index + 1].setAttribute('class', 'stone-walls');
	};

	wallsArr.map(addWalls);

	const wallBlocksArr = gameBoard.getElementsByClassName('stone-walls');

	const addWallPositions = (item, index) => {
		
		if (index < 9) {

			let nmbr = index * 50;
			item.style.top = '0px';
			item.style.left = nmbr + 'px';
		} else if (index > 8 && index < 17) {
	
			let nmbr = (index - 8) * 50;
			item.style.top = nmbr + 'px';
			item.style.left = 8*50 + 'px';
		} else if (index > 16 && index < 25) {
		
			let nmbr = (index - 8*2) * 50;
			item.style.top = 8*50 + 'px';
			item.style.left = nmbr + 'px';
		} else if (index > 14 && index < 33) {
	
			let nmbr = (index - 8*3) * 50;
			item.style.top = nmbr + 'px';
			item.style.left = '0px';
		}

	}

	[].forEach.call(wallBlocksArr, addWallPositions);

};

createWalls();