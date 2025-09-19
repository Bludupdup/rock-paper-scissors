
let humanScore = 0;
let computerScore = 0;
let round = 1;
 
 
 function getComputerChoice(max){
 return Math.floor(Math.random() * max);
}
   

for(round = 0; round < 5 ; round++){
    
    let Input = prompt(`what do you want to choose!!?`)
    let playerInput = Input.toLowerCase();
    
    let computerChoice = getComputerChoice(3);

    let choices = ["rock", "paper", "scissors"];
    console.log("Computer chose: " + choices[computerChoice]);
    
    if(playerInput === "rock" && computerChoice === 2 ||
        playerInput === "paper" && computerChoice === 0 ||
        playerInput === "scissors" && computerChoice === 1  )
        {
        console.log("you chose : "+ " " + playerInput);

        humanScore++;
        console.log("Your Score is" + " " +humanScore);
        console.log("Computer Score is"+ " " + computerScore);
        console.log("YOU WON THE ROUND!!!!!!")

        console.log("round" + " " + round + " " + "is over");
        }
    else if(playerInput === "rock" && computerChoice === 1 ||
        playerInput === "paper" && computerChoice === 2 ||
        playerInput === "scissors" && computerChoice === 0 )
        {
        console.log("you chose : "+ " " + playerInput);
        computerScore++;
        console.log("Your Score is" + " " + humanScore);
        console.log("Computer Score is" + " " + computerScore);
        console.log("YOU LOST THE ROUND SAD..........")

        console.log("round" + " " + round + " " + "is over");
        }
    else if(playerInput === choices[computerChoice] )
        {
        console.log("you chose : "+ " " + playerInput);
        console.log("its a tiee!!");
        console.log("Your Score is" + " " + humanScore);
        console.log("Computer Score is" + " " + computerScore);

        console.log("round" + " " + round + " " + "is over");
        } 
    else{
        console.log("error 404");
    }       

    }

if(humanScore > computerScore){
    console.log("YOU WONNN YAYAYAYAYYAYAy");
}else if(humanScore < computerScore){
    console.log("YOU LOST POOOPOOOO...")
}else if( humanScore === computerScore){
    console.log("ITS A TIEEEEE!!!")
}    








