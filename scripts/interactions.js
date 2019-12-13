const interactions = () => {
  const game = document.getElementsByClassName('game')[0];
  const hero = game.getElementsByClassName('hero')[0];

  const heroPositionListener = () => {

    setInterval(function () {
      let positionX = hero.style.left;
      let positionY = hero.style.top;
      let arrPositions = ['0px', '400px', '400px', '0px'];

      if (positionX === arrPositions[0]) {
        console.log(4);
      } else if (positionX === arrPositions[1]) {
        console.log(2);
      } else if (positionY === arrPositions[2]) {
        console.log(3);
      } else if (positionY === arrPositions[3]) {
        console.log(1);
      }


    }, 100);
  }


  heroPositionListener();
}

interactions();