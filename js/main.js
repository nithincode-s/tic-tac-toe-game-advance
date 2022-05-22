import Game from "./game.js"
import GameView from "./gameView.js"

let game = new Game();
let gameView = new GameView(); 


document.querySelector(".restart").addEventListener("click",()=>{
    //console.log("newgame");
    onRestartClick();
})


// gameView.updateBoard(game);

// console.log(game.turn);
// game.nextTurn();
// console.log(game.turn);
// game.makeMove(3);
// console.log(game.board);
// game.nextTurn();

// console.log(game.turn);
// game.makeMove(8);
// console.log(game.board);
// gameView.updateBoard(game);

let tiles = document.querySelectorAll(".board-tile");
//console.log(tiles);

tiles.forEach((tile)=>{
    tile.addEventListener("click",()=>{
        //console.log(tile);
       // console.log("clicked tile");
       //console.log(tile.dataset.index);
       onTileClick(tile.dataset.index); // sending position of the tile (index) to the ontileclick function

    })
});

//makeMove() function must be invoked when we click.
//Change the turn. nextTurn()
//Update the date after me make a move. updateBoard()
function onTileClick(i){ // got the position where we clicked, now sending the data to makeMOve() function

    game.makeMove(i); //sending the position to fun() to make a move.
    gameView.updateBoard(game); // updating the board i.e., printing on the webpage
    //game.nextTurn(); // changing the turn.
    // if we win we cant hav next turn place this in the winning combination fun call

}


function onRestartClick(){
    game = new Game();
    gameView.updateBoard(game);
}

gameView.updateBoard(game);