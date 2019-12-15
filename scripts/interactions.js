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
    let room = gameBoard[doorNmbr].getAttribute('data-room');

    //switch room - ROOM'S ACTIVATION ERROR !!!!

    const switchRoom = (x, y) => {
      x.classList.remove('active');
      y.classList.add('active');
      console.log(room);
    }

    switch (doorNmbr) {
      case 1: //Top
        //console.log(roomName);
        //if(activeRoom)
        switchRoom(activeRoom, gameBoard[doorNmbr]);
        break;
      case 2: //Right
        //console.log(roomName);
        switchRoom(activeRoom, gameBoard[doorNmbr]);
        break;
      case 3: //Bottom
        //console.log(roomName);
        switchRoom(activeRoom, gameBoard[doorNmbr]);
        break;
      case 4: //Left
        //console.log(roomName);
        switchRoom(activeRoom, gameBoard[doorNmbr]);
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