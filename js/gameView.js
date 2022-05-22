export default class GameView{
    

    updateBoard(game){
        this.updateTurn(game);
        const winningCombination = game.findWinningCombinatios();
       // console.log("this is a board in gameview");
       // console.log(game.board);
        for(let i=0; i<game.board.length; i++){
            //console.log(game.board[i]);
            const tile = document.querySelector(`.board-tile[data-index="${i}"]`); 
            //tile.textContent = ;

            tile.classList.remove("tile-winner");

            let tileType = game.board[i] == 'X' ? "tile-x" : "tile-o";

            tile.innerHTML = `<span class = "${tileType}">${game.board[i] ? game.board[i]: ''}</span>`
        

            if(winningCombination && winningCombination.includes(i)){
                tile.classList.add("tile-winner");
            }
        }
    }

    updateTurn(game){
        let playerX = document.querySelector(".player-x");
        let playerO = document.querySelector(".player-o");
        // console.log(playerX);
        // console.log(playerO);
        playerX.classList.remove('active');
        playerO.classList.remove("active");

        if(game.turn == 'X'){
            playerX.classList.add('active');
        }else{
            playerO.classList.add('active');
        }

    }
} 