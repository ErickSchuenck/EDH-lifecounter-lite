function increasePlayerOneLife(){
    let playerArea = document.querySelector('.player-one')
    let playerOneLife = playerArea.querySelector('h1').innerHTML;
    playerOneLife = parseInt(playerOneLife);
    playerArea.querySelector('h1').innerHTML = ``
    playerArea.querySelector('h1').innerHTML = `${playerOneLife + 1}`
}
function decreasePlayerOneLife(){
    let playerArea = document.querySelector('.player-one')
    let playerOneLife = playerArea.querySelector('h1').innerHTML;
    playerOneLife = parseInt(playerOneLife);
    playerArea.querySelector('h1').innerHTML = ``
    playerArea.querySelector('h1').innerHTML = `${playerOneLife - 1}`
}


function increasePlayerTwoLife(){
    let playerArea = document.querySelector('.player-two')
    let playerTwoLife = playerArea.querySelector('h1').innerHTML;
    playerTwoLife = parseInt(playerTwoLife);
    playerArea.querySelector('h1').innerHTML = ``
    playerArea.querySelector('h1').innerHTML = `${playerTwoLife + 1}`
}
function decreasePlayerTwoLife(){
    let playerArea = document.querySelector('.player-two')
    let playerTwoLife = playerArea.querySelector('h1').innerHTML;
    playerTwoLife = parseInt(playerTwoLife);
    playerArea.querySelector('h1').innerHTML = ``
    playerArea.querySelector('h1').innerHTML = `${playerTwoLife - 1}`
}


function increasePlayerThreeLife(){
    let playerArea = document.querySelector('.player-three')
    let playerThreeLife = playerArea.querySelector('h1').innerHTML;
    playerThreeLife = parseInt(playerThreeLife);
    playerArea.querySelector('h1').innerHTML = ``
    playerArea.querySelector('h1').innerHTML = `${playerThreeLife + 1}`
}
function decreasePlayerThreeLife(){
    let playerArea = document.querySelector('.player-three')
    let playerThreeLife = playerArea.querySelector('h1').innerHTML;
    playerThreeLife = parseInt(playerThreeLife);
    playerArea.querySelector('h1').innerHTML = ``
    playerArea.querySelector('h1').innerHTML = `${playerThreeLife - 1}`
}


function increasePlayerFourLife(){
    let playerArea = document.querySelector('.player-four')
    let playerFourLife = playerArea.querySelector('h1').innerHTML;
    playerFourLife = parseInt(playerFourLife);
    playerArea.querySelector('h1').innerHTML = ``
    playerArea.querySelector('h1').innerHTML = `${playerFourLife + 1}`
}
function decreasePlayerFourLife(){
    let playerArea = document.querySelector('.player-four')
    let playerFourLife = playerArea.querySelector('h1').innerHTML;
    playerFourLife = parseInt(playerFourLife);
    playerArea.querySelector('h1').innerHTML = ``
    playerArea.querySelector('h1').innerHTML = `${playerFourLife - 1}`
}

function resetLife(){
    let lives = document.querySelectorAll('h1')
    console.log(lives);
    for (let i = 0; i < 4; i++){
        lives[i].innerHTML = `40`
    }
}
function dice(){
    let starter = [0,1,2,3];
    starter = starter.sort(() => Math.random() - 0.5);
    starter = starter[0]
    let players = document.querySelectorAll('.player');
    display();
    setTimeout(() => {eraseDisplay()}, 5000);

    function display(){
    players[starter].classList.add('red')
    }
    function eraseDisplay(){
        console.log(players)
        for (let i = 0; i < players.length; i++){
            players[i].classList.remove('red')
        }
    }
}