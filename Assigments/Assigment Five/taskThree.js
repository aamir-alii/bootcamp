// Task Three
class Game {
    info() {
        return "I love game and sports";
    }
}

class Cricket extends Game {
    info() {
        return "I love cricket";
    }
}

class Football extends Game {
    info() {
        return "I love football";
    }
}

let game = new Game();
console.log(game.info());
let cricket = new Cricket();
console.log(cricket.info());
let football = new Football();
console.log(football.info());
