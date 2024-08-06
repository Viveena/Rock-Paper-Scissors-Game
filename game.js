let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const drawGame=()=>{
    msg.innerText="Game was Draw. Play again.";
    msg.style.backgroundColor="#8eecf5";
    msg.style.color="#13293d";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        msg.style.color="white";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lost. ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor="red";
        msg.style.color="white";
    }

}

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const playGame=(userChoice)=>{
    console.log("user choice=",userChoice)
// generate computer choice
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);
    
    if(userChoice===compChoice){//draw game
    drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }else if(userChoice==="scissors"){
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice);
    });
});