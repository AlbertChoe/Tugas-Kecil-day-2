const game=()=>{
    let nilaiplayer=0;
    let nilaicomputer=0;
    let moves=0;

    const playGame=()=>{
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn,paperBtn,scissorBtn];
        const computerOptions = ['rock','paper','scissors']

        playerOptions.forEach(option => {
            option.addEventListener('click',function(){

                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10-moves}`;
                    

                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];

                // Function to check who wins
                winner(this.innerText,computerChoice)
                    
                // Calling gameOver function after 10 moves
                if(moves == 10){
                    gameOver(playerOptions,movesLeft);
                }
            })
        })
            
    }

    const winner = (player,computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.skor1');
        const computerScoreBoard = document.querySelector('.skor2');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        console.log(player,computer);
        if(player === computer){
            result.textContent = 'Tie'
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                result.textContent = 'Computer Won';
                nilaicomputer++;
                computerScoreBoard.textContent = nilaicomputer;

            }else{
                result.textContent = 'Player Won'
                nilaiplayer++;
                playerScoreBoard.textContent = nilaiplayer;
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){
                result.textContent = 'Computer Won';
                nilaicomputer++;
                computerScoreBoard.textContent = nilaicomputer;
            }else{
                result.textContent = 'Player Won';
                nilaiplayer++;
                playerScoreBoard.textContent = nilaiplayer;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){
                result.textContent = 'Computer Won';
                nilaicomputer++;
                computerScoreBoard.textContent = nilaicomputer;
            }else{
                result.textContent = 'Player Won';
                nilaiplayer++;
                playerScoreBoard.textContent = nilaiplayer;
            }
        }
        console.log(nilaiplayer,nilaicomputer);
    }

    // Function to run when game is over
    const gameOver = (playerOptions,movesLeft) => {

        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');

        playerOptions.forEach(option => {
            option.style.display = 'none';
        })

        
        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';

        if(nilaiplayer > nilaicomputer){
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game'
            result.style.color = '#308D46';
        }
        else if(nilaiplayer < nilaicomputer){
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else{
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }

    

    playGame();
    }     

 
game();
