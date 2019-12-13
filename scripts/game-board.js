const createRooms = () => {
	const game = document.getElementsByClassName('game')[0];

	//list of rooms

	const roomStart = {
		name: '1234',
		doors: '1111'
	};

	const roomTop0001 = {
		name: '0090',
		doors: '0010'
	};

	const roomRight0001 = {
		name: '0009',
		doors: '0001'
	};

	const roomBottom0001 = {
		name: '9000',
		doors: '1000'
	};

	const roomLeft0001 = {
		name: '0900',
		doors: '0100'
	};

	const roomsArr = [roomStart, roomTop0001, roomLeft0001, roomBottom0001, roomRight0001];

	const createWalls = (item, index) => {
		const addGameBoard = document.createElement('section');
		const addGameField = document.createElement('div');
		game.appendChild(addGameBoard);
		game.children[index].setAttribute('class', 'game-board');
		game.children[0].classList.add('active');
		const gameBoard = game.getElementsByClassName('game-board')[index];
		gameBoard.setAttribute('data-room', item.name);
		gameBoard.appendChild(addGameField);
		gameBoard.firstChild.setAttribute('class', 'field');

		let roomKind = item;
		//console.log(roomKind);

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
				item.style.left = 8 * 50 + 'px';

			} else if (index > 16 && index < 25) {
				let nmbr = (index - 8 * 2) * 50;
				item.style.top = 8 * 50 + 'px';
				item.style.left = nmbr + 'px';

			} else if (index > 14 && index < 33) {
				let nmbr = (index - 8 * 3) * 50;
				item.style.top = nmbr + 'px';
				item.style.left = '0px';
			}
		}

		[].forEach.call(wallBlocksArr, addWallPositions);

		const createDoors = () => {
			let choosenRoom = game.getElementsByClassName('game-board');
			let wallForDoor = choosenRoom[index].getElementsByClassName('stone-walls');

			switch (roomKind.doors) {
				case '1111':
					wallForDoor[4].setAttribute('class', 'door-top');
					wallForDoor[11].setAttribute('class', 'door-right');
					wallForDoor[18].setAttribute('class', 'door-bottom');
					wallForDoor[25].setAttribute('class', 'door-left');
					break;
				case '1000':
					wallForDoor[4].setAttribute('class', 'door-top');
					break;
				case '0100':
					wallForDoor[12].setAttribute('class', 'door-right');
					break;
				case '0010':
					wallForDoor[20].setAttribute('class', 'door-bottom');
					break;
				case '0001':
					wallForDoor[28].setAttribute('class', 'door-left');
					break;
			}
		};

		createDoors();
	};

	//createWalls();

	roomsArr.map(createWalls);

};

createRooms();