const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");

console.log("hello")
let currentPlayer;
let gameGrid;

let winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


function initGame() {
    currentPlayer = "X";
    gameGrid = ["", "", "", "", "", "", "", "", ""];

    //Ui pr bhi empty dikhana hoga 
    boxes.forEach((box, index) => {
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";

        //one more thing is missing , initialize box with css properties again 
        box.classList = `box box${index+1}` ;
    })
    newGameBtn.classList.remove("active");
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

initGame();



function swapTurn() {
    if (currentPlayer === "X") {

        currentPlayer = "O";
    }
    else {
        currentPlayer = "X";
    }

    gameInfo.innerText = ` Current Player - ${currentPlayer}`
}


function checkGameOver() {

    let answer = "";
    winningPositions.forEach((position) => {
        if ((gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "")
            && gameGrid[position[0]] === gameGrid[position[1]] && gameGrid[position[1]] === gameGrid[position[2]]) {

            //check if X is winner 
            if (gameGrid[position[0]] === "X")
                answer = "X";
            else
                answer = "O";

            //disable pointer events 
            boxes.forEach((box) =>{
                box.style.pointerEvents = "none";
            })

            //now we know X/O  is a winner 
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");

        }
    });

    //it means we have a winer 
    if(answer !==""){
        gameInfo.innerText = `Winner Player - ${answer}`;
        newGameBtn.classList.add("active");
        return ;
    }

    //let's check whether there is a tie 
    let fillCount = 0 ;
    gameGrid.forEach((box) => {
        if(box !== ""){
            fillCount++ ;
         }
    });

    if(fillCount ===9){
        gameInfo.innerText = "Game Tied !";
        newGameBtn.classList.add("active") ;
    }
}

function handleClick(index) {
    if (gameGrid[index] === "") {
        boxes[index].innerText = currentPlayer;
        boxes[index].style.pointerEvents = "none";
        gameGrid[index] = currentPlayer;



        swapTurn();


        checkGameOver();
    }
}

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleClick(index);
    })
});


newGameBtn.addEventListener("click", initGame);