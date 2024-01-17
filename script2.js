//Score Counter
let userScore = 0;
let compScore = 0;

//Selecting all 3 choices
const choices = document.querySelectorAll(".choice");
//Selecting msg to display
const msg = document.querySelector("#msg");

//Selecting User and Comp Score paragraphs to update after each win
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//Function that generates Random choices (Computer Choice)..!!
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

//If Game is DRAW
const drawGame = () => {
    //Changing HTMl and CSS of msg box
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `Naruto Won, Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "rgb(235, 123, 4)";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `Itachi Won, His ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "rgb(108, 0, 0)";
    }
};

//Main Function
const playGame = (userChoice) => {
    //Generating computer choice
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        //Call function for Draw Game
        drawGame();
    }
    else {
        //Store user result
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true; //Ternary operator
        } else if (userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        //Calling Show Winner function that displays Result
        showWinner(userWin, userChoice, compChoice);
    }
};

//On Click (any choice by USER)
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        //User Choice (Accessing each Choice ID: Stone, Paper, Scissor)
        const userChoice = choice.getAttribute("id");
        //Play Game
        playGame(userChoice);
    });
});
