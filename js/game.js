export default class Game {

    constructor(){
        this.turn = "X";
        this.board = new Array(9).fill(null)
    }

    nextTurn(){
        if(this.turn == "X"){
            this.turn = "O";
        }else{
            this.turn = "X";
        }
    }

    makeMove(i){

        if(this.endOfGame()){
            return;
        }

        if(this.board[i]){
            return;
        }
        this.board[i] = this.turn;
        let winningCombination = this.findWinningCombinatios(); // should check aft making a move if the game is end or not,,,, nit after the next move the value of turn will change 
        // console.log('this is the winner',winningCombination);

        if(!winningCombination){
            this.nextTurn();
        }
    }

    findWinningCombinatios(){
        const winningCombinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [6,4,2]
        ]

        for(const combination of winningCombinations){
            //console.log(combination);
            const [a,b,c] = combination;
            if(this.board[a] &&  //if value exists at the position 'a' on board
                (this.board[a] === this.board[b] && this.board[a] === this.board[c] )){
                    //checking if all three positions of the winning combinations are same either X or O on the board using board[position of the combinations].
            
                return combination;
            } 
        }
        return null;
    }


    endOfGame(){
        
        let winningCombination = this.findWinningCombinatios();
        if(winningCombination){
            return true;
        }else{
            return false;
        }

    }


}