function getRandom(){
    return Math.random();
}

function getComputerChoice(){
    const r = getRandom();

    console.log(r);

    if(r < 0.33){
        return "rock";
    }
    else if(r >= 0.33 && r < 0.66){
        return "paper";
    }
    else{
        return "scissors";
    }
}

console.log(getComputerChoice())

function getHumanChoice(){
    let choice = prompt("Escolha entre pedra, papel ou tesoura");

    console.log(choice)

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

console.log(getHumanChoice())

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

    playRound(getHumanChoice, getComputerChoice)

}

const humanSelection = getHumanChoice();

const computerSelection = getComputerChoice();