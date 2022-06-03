const cellElements = document.querySelectorAll("[data-cell]");
//const cellElementsA = document.querySelectorAll("[a]")
const boardElements = document.querySelectorAll("[data-board]");
const winningMessageTextElement = document.querySelector(
    "[data-winning-message-text]"
);
const winningMessage = document.querySelector("[data-winning-message]");
const restartButton = document.querySelector(
    "[data-restart-button]"
);
const limparButton = document.querySelector(
    "[data-limpar-button]"
);

let circleTurn;

const celle0 = [[0,1,2,3,4,5,6,7,8]
];
const celle1 = [[9,10,11,12,13,14,15,16,17]
];
const celle2 = [[18,19,20,21,22,23,24,25,26]
];
const celle3 = [[27,28,29,30,31,32,33,34,35]
];
const celle4 = [[36,37,38,39,40,41,42,43,44]
];
const celle5 = [[45,46,47,48,49,50,51,52,53]
];
const celle6 = [[54,55,56,57,58,59,60,61,62]
];
const celle7 = [[63,64,65,66,67,68,69,70,71]
];
const celle8 = [[72,73,74,75,76,77,78,79,80]
];
const winningCombinationsClass0 = [
    [0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],
    [1, 4, 7],[2, 5, 8], [0, 4, 8],[2, 4, 6],
];
const winningCombinationsClass1 = [
    [9, 10, 11],[12, 13, 14],[15, 16, 17],[9, 12, 15],
    [10, 13, 16],[11, 14, 17], [9, 13, 17],[11, 13, 15],
];
const winningCombinationsClass2 = [
    [18, 19, 20],[21, 22, 23],[24, 25, 26],[18, 21, 24],
    [19, 22, 25],[20, 23, 26], [18, 22, 26],[20, 22, 24],
];
const winningCombinationsClass3 = [
    [27, 28, 29],[30, 31, 32],[33, 34, 35],[27, 30, 33],
    [28, 31, 34],[29, 32, 35], [27, 31, 35],[29, 31, 33],
];
const winningCombinationsClass4 = [
    [36, 37, 38],[39, 40, 41],[42, 43, 44],[36, 39, 42],
    [37, 40, 43],[38, 41, 44], [36, 40, 44],[38, 40, 42],
];
const winningCombinationsClass5 = [
    [45, 46, 47],[48, 49, 50],[51, 52, 53],[45, 48, 51],
    [46, 49, 52],[47, 50, 53], [45, 49, 53],[47, 49, 51],
];
const winningCombinationsClass6 = [
    [54, 55, 56],[57, 58, 59],[60, 61, 62],[54, 57, 60],
    [55, 58, 61],[56, 59, 62], [54, 58, 62],[56, 58, 60],
];
const winningCombinationsClass7 = [
    [63, 64, 65],[66, 67, 68],[69, 70, 71],[63, 66, 69],
    [64, 67, 70],[65, 68, 71], [63, 67, 71],[65, 67, 69],
];
const winningCombinationsClass8 = [
    [72, 73, 74],[75, 76, 77],[78, 79, 80],[72, 75, 78],
    [73, 76, 79],[74, 77, 80], [72, 76, 80],[74, 76, 78],
];

function qualClasseFechou (seFalso, board) {
   
    var y = board*9
    var x = board*9+9

   if(seFalso==false){
        endGame0(seFalso, board, x, y);
    }else if(seFalso){
        endGame0(seFalso, board, x, y)
    }
};

function test0 (isWin ,draw , board) {
   
    if (isWin) {
        qualClasseFechou(false, board);  
    }else if (draw) {
        qualClasseFechou(true, board);
    }
};

const marcaBoardW = (index) => {
    boardElements[index].classList.add(hw);
};

const marcaBoardD = (index) => {
    boardElements[index].classList.add('d');
   
};

function removeWOXO () {
    for (let index = 0 ; index < boardElements.length ; index++) {
        boardElements[index].classList.remove("wx","wo");
    }
};

function removeXO () {
    for (const cell of cellElements) {

        cell.removeEventListener("click", handleClick);
        cell.addEventListener("click", handleClick, {once: true});
    }
};

function removeCell (cell1, index,) {
  
    for (var index; index < cell1 ; index++) {
        cellElements[index].classList.remove("cell" , "x", "o");
    }

};

function removeCellAll (cell1, index,) {
  
    for (var index; index < cell1 ; index++) {
        cellElements[index].classList.remove("x", "o");
        cellElements[index].classList.add("cell");
    }
    for (let index = 0; index < 9 ; index++) {
        boardElements[index].classList.remove("wx","wo","d");
        
        
    }
    

};

const startGame = () => {

    circleTurn = false;
    removeXO();
    removeCellAll(81,0);
        
    setBoardHoverClass();
    winningMessage.classList.remove("show-winning-message");

};

const endGame = (draw, end) => {
    
        hw = circleTurn 
        ? "wo" 
        : "wx"
        
    if(draw){
        winningMessage.classList.add("show-winning-message");
        winningMessageTextElement.innerText = "Empate!";
    }
    if(end) {
         winningMessage.classList.add("show-winning-message");
        winningMessageTextElement.innerText = circleTurn
      ? "O Venceu!"
      : "X Venceu!";

    }

};

const endGame0 = (draw,index,x,y) => {
    if(draw){
        removeCell(x,y);
        marcaBoardD(index);
    }else{
        endGame(draw);
        marcaBoardW(index);
        removeCell(x,y);
        removeXO(); 
    }
};

const checkForWin0 = (currentPlayer) => {
    return winningCombinationsClass0.some((combination) => {
        return combination.every((index) => {
            return cellElements[index].classList.contains(currentPlayer);
        });
    });
};

const checkForWin1 = (currentPlayer) => {
    return winningCombinationsClass1.some((combination) => {
        return combination.every((index) => {
            return cellElements[index].classList.contains(currentPlayer);
        });
    });
};

const checkForWin2 = (currentPlayer) => {
    return winningCombinationsClass2.some((combination) => {
        return combination.every((index) => {
            return cellElements[index].classList.contains(currentPlayer);
        });
    });
};

const checkForWin3 = (currentPlayer) => {
    return winningCombinationsClass3.some((combination) => {
        return combination.every((index) => {
            return cellElements[index].classList.contains(currentPlayer);
        });
    });
};

const checkForWin4 = (currentPlayer) => {
    return winningCombinationsClass4.some((combination) => {
        return combination.every((index) => {
            return cellElements[index].classList.contains(currentPlayer);
        });
    });
};

const checkForWin5 = (currentPlayer) => {
    return winningCombinationsClass5.some((combination) => {
        return combination.every((index) => {
            return cellElements[index].classList.contains(currentPlayer);
        });
    });
};

const checkForWin6 = (currentPlayer) => {
    return winningCombinationsClass6.some((combination) => {
        return combination.every((index) => {
            return cellElements[index].classList.contains(currentPlayer);
        });
    });
};

const checkForWin7 = (currentPlayer) => {
    return winningCombinationsClass7.some((combination) => {
        return combination.every((index) => {
            return cellElements[index].classList.contains(currentPlayer);
        });
    });
};

const checkForWin8 = (currentPlayer) => {
    return winningCombinationsClass8.some((combination) => {
        return combination.every((index) => {
            return cellElements[index].classList.contains(currentPlayer);
        });
    });
};

const checkForWinner = (classToEnd) => {

    return winningCombinationsClass0.some((combination) => {
        return combination.every((index) => {
            return boardElements[index].classList.contains(classToEnd) ;
            
        });
    });
};

const checkForDraw = () => {
    
    return celle0.some((combination) => {
        return combination.every((index) => {
            return boardElements[index].classList.contains("d") ||
                    boardElements[index].classList.contains("wo") ||
                     boardElements[index].classList.contains("wx");
        });
    });  
};

const checkForDraw0 = () => {
    
    return celle0.some((combination) => {
        return combination.every((index) => {
            return cellElements[index].classList.contains("x") || 
                    cellElements[index].classList.contains("o");
        });
    });  
};

const checkForDraw1 = () => {
    return celle1.some((combination) => {
        return combination.every((index) => {
            return cellElements[index].classList.contains("x") ||
                    cellElements[index].classList.contains("o");
        });
    });
};

const checkForDraw2 = () => {
    return celle2.some((combination) => {
        return combination.every((index) => {
            return cellElements[index].classList.contains("x") ||
                    cellElements[index].classList.contains("o");
        });
    });
};

const checkForDraw3 = () => {
    return celle3.some((combination) => {
        return combination.every((index) => {
            return cellElements[index].classList.contains("x") ||
                    cellElements[index].classList.contains("o");
        });
    });
};

const checkForDraw4 = () => {
    return celle4.some((combination) => {
        return combination.every((index) => {
            return cellElements[index].classList.contains("x") ||
                    cellElements[index].classList.contains("o");
        });
    });
};

const checkForDraw5 = () => {
    return celle5.some((combination) => {
        return combination.every((index) => {
            return cellElements[index].classList.contains("x") ||
                    cellElements[index].classList.contains("o");
        });
    });
};

const checkForDraw6 = () => {
    return celle6.some((combination) => {
        return combination.every((index) => {
            return cellElements[index].classList.contains("x") ||
                    cellElements[index].classList.contains("o");
        });
    });
};

const checkForDraw7 = () => {
    return celle7.some((combination) => {
        return combination.every((index) => {
            return cellElements[index].classList.contains("x") ||
                    cellElements[index].classList.contains("o");
        });
    });
};

const checkForDraw8 = () => {
    return celle8.some((combination) => {
        return combination.every((index) => {
            return cellElements[index].classList.contains("x") ||
                    cellElements[index].classList.contains("o");
        });
    });
};

const placeMark = (cell, classToAdd,) => {
    cell.classList.add(classToAdd);
};

const setBoardHoverClass = () => {
    
    for(let index = 0 ; index < boardElements.length ; index++) {
    boardElements[index].classList.remove('o');
    boardElements[index].classList.remove('x');
     if (circleTurn) {
        boardElements[index].classList.add('o');
    } else {
        boardElements[index].classList.add('x');
    }
};
 
};

const swapTurns = () => {
    circleTurn = !circleTurn;

    setBoardHoverClass();
};

    const handleClick = (e) => {
 
    const cell = e.target;
    const classToAdd = circleTurn ? "o" : "x"; 

    placeMark(cell, classToAdd);
    
    const isWin0 = checkForWin0(classToAdd);
    const isWin1 = checkForWin1(classToAdd);
    const isWin2 = checkForWin2(classToAdd);
    const isWin3 = checkForWin3(classToAdd);
    const isWin4 = checkForWin4(classToAdd);
    const isWin5 = checkForWin5(classToAdd);
    const isWin6 = checkForWin6(classToAdd);
    const isWin7 = checkForWin7(classToAdd);
    const isWin8 = checkForWin8(classToAdd);
   
    const cadaJogoW = [
        isWin0, isWin1, isWin2,
        isWin3, isWin4, isWin5,
        isWin6, isWin7, isWin8,
    ]

    const isDraw0 = checkForDraw0();
    const isDraw1 = checkForDraw1();
    const isDraw2 = checkForDraw2();
    const isDraw3 = checkForDraw3();
    const isDraw4 = checkForDraw4();
    const isDraw5 = checkForDraw5();
    const isDraw6 = checkForDraw6();
    const isDraw7 = checkForDraw7();
    const isDraw8 = checkForDraw8();

    const cadaJogoD = [
        isDraw0, isDraw1, isDraw2,
        isDraw3, isDraw4, isDraw5,
        isDraw6, isDraw7, isDraw8,
    ]

    for (let index =0 ; index < cadaJogoW.length ; index ++){

    var board;
    if(cadaJogoW[index]){
        board=index;
    }
    if(cadaJogoD[index]){
        board=index;
    }

    test0(cadaJogoW[index], cadaJogoD[index], board);
    
};

    const classToEnd = circleTurn ? "wo" : "wx";

    const draw = checkForDraw();
    const winner = checkForWinner(classToEnd);
   
    if(winner){
        endGame(false,true);
    }else if(draw){
        endGame(true,false);
    }else{
        swapTurns();
    }
};

startGame();

restartButton.addEventListener("click", startGame);
limparButton.addEventListener("click", startGame);