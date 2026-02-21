function getRandom(){
    return Math.random();
}

function getComputerChoice(){
    const r = getRandom();

    if(r < 0.33){
        return "pedra";
    }
    else if(r >= 0.33 && r < 0.66){
        return "papel";
    }
    else{
        return "tesoura";
    }
}

function getHumanChoice(){
    let choice = prompt("Escolha entre pedra, papel ou tesoura");

    if(choice == "pedra"){
        return "pedra";
    }
    else if(choice == "papel"){
        return "papel";
    }
    else{
        return "tesoura";
    }

}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase()

        if(humanChoice == "pedra" && computerChoice == "papel"){
            console.log("Você perdeu, papel ganha de pedra!")
            computerScore++;
            return "Você perdeu, papel ganha de pedra!";
        }
        else if(humanChoice == "pedra" && computerChoice == "tesoura"){
            console.log("Voce ganhou, pedra ganha de tesoura!")
            humanScore++;
            return "Voce ganhou, pedra ganha de tesoura!";
        }
        else if(humanChoice == "papel" && computerChoice == "pedra"){
            console.log("Voce ganhou, papel ganha de pedra!")
            humanScore++;
            return "Voce ganhou, papel ganha de pedra!";
        }
        else if(humanChoice == "papel" && computerChoice == "tesoura"){
            console.log("Voce perdeu, tesoura ganha de papel!")
            computerScore++;
            return "Voce perdeu, tesoura ganha de papel!";
        }
        else if(humanChoice == "tesoura" && computerChoice == "papel"){
            console.log("Voce ganhou, tesoura ganha de papel!")
            humanScore++;
            return "Voce ganhou, tesoura ganha de papel!";
        }
        else if(humanChoice == "tesoura" && computerChoice == "pedra"){
            console.log("Voce perdeu, pedra ganha de tesoura")
            computerScore++;
            return "Voce perdeu, pedra ganha de tesoura";
        }
        else{
            console.log("Empate")
            return "Empate"
        }

    }

    for(i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(playRound(humanSelection, computerSelection));
        console.log(computerScore);
        console.log(humanScore)
        }
}

playGame()
