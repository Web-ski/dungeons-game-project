const interactions = () => {
  const game = document.getElementsByClassName('game')[0];
  const gameBoard = game.getElementsByClassName('game-board');
  const activeBoard = game.getElementsByClassName('active')[0];
  const hero = game.getElementsByClassName('hero')[0];

  /* Door chacker */
  const roomCheck = (doorNmbr) => {
    //which room is active []
    let activeRoom = activeBoard;

    //check specifity of room
    let roomName = activeRoom.getAttribute('data-room');
    //console.log(roomName + ' ' + doorNmbr);
    let room = gameBoard[doorNmbr].getAttribute('data-room');

    //switch room
    switch (doorNmbr) {
      case 1: //Top
        //console.log(roomName);
        activeRoom.classList.toggle('active');
        gameBoard[doorNmbr].classList.toggle('active');
        console.log(room);
        hero.style.display = 'block';

        break;
      case 2: //Right
        //console.log(roomName);

        console.log(room);

        break;
      case 3: //Bottom
        //console.log(roomName);

        console.log(room);

        break;
      case 4: //Left
        //console.log(roomName);

        console.log(room);

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