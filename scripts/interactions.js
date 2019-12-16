const interactions = () => {
  const game = document.getElementsByClassName('game')[0];
  const gameBoard = game.getElementsByClassName('game-board');
  const activeBoard = game.getElementsByClassName('active')[0];
  const hero = game.getElementsByClassName('hero')[0];

  /* Door chacker */
  const roomCheck = (doorNmbr) => {
    //which room is active []
    let activeRoom = game.getElementsByClassName('active')[0];

    //check specifity of room
    let roomName = activeRoom.getAttribute('data-room');
    //console.log(roomName + ' ' + doorNmbr);

    const switchRoom = (x, y) => {
      x.classList.remove('active');
      y.classList.add('active');
    }

    switch (doorNmbr) {
      case 1: //Top
        //console.log(roomName);
        if (roomName === '1234') {
          switchRoom(activeRoom, gameBoard[1]);
        } else if (roomName === '9000') {
          switchRoom(activeRoom, gameBoard[0]);
        }
        break;
      case 2: //Right
        if (roomName === '1234') {
          switchRoom(activeRoom, gameBoard[2]);
        } else if (roomName === '0900') {
          switchRoom(activeRoom, gameBoard[0]);
        }
        break;
      case 3: //Bottom
        if (roomName === '1234') {
          switchRoom(activeRoom, gameBoard[3]);
        } else if (roomName === '0090') {
          switchRoom(activeRoom, gameBoard[0]);
        }
        break;
      case 4: //Left
        if (roomName === '1234') {
          switchRoom(activeRoom, gameBoard[4]);
        } else if (roomName === '0009') {
          switchRoom(activeRoom, gameBoard[0]);
        }
        break;
    }
  }

  const heroPositionListener = () => {

    setInterval(function () {
      let positionX = hero.style.left;
      let positionY = hero.style.top;
      let arrPositions = ['0px', '400px', '400px', '0px'];

      if (positionY === arrPositions[0]) {
        hero.style.top = '350px';
        roomCheck(1);
      } else if (positionX === arrPositions[1]) {
        roomCheck(2);
        hero.style.left = '50px';
      } else if (positionY === arrPositions[2]) {
        roomCheck(3);
        hero.style.top = '50px';
      } else if (positionX === arrPositions[3]) {
        roomCheck(4);
        hero.style.left = '350px';
      }
    }, 100);
  }

  heroPositionListener();
}

interactions();