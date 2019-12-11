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
    }

    createHero();
    styleHero();
}

heroMover();
