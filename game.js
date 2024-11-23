let userscore = 0;
let computerscore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let a  = document.querySelector("#user-score");
let b = document.querySelector("#comp-score");

choices.forEach((elements)=>{
    elements.addEventListener("click", ()=>{
        const userchoice = elements.getAttribute("id")
        // console.log();
        playgame(userchoice) 
    })
})

const playgame = (userchoice)=>{
    console.log("userchoice  =  " + userchoice )
    const comchoice = computerchoice();
    console.log("computerchoice  =  " + comchoice)
    if(userchoice===comchoice){
        console.log("its a draw game");
        msg.innerHTML = "Its a draw game";
    } else {
        let userwin = true;
        if(userchoice === "rock")
        {
            userwin = comchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
                userwin = comchoice === "sciessor" ? false : true;
            }
            else {
                userwin = comchoice === "rock" ? false : true
            }
            showWinner(userwin);
        }
    }
const showWinner = (userwin) =>{
    if(userwin){
        userscore++;
        a.innerHTML = userscore;
        console.log("You Win!")
        msg.innerText = "You Win!"
    } else {
        computerscore++;
        b.innerHTML = computerscore;
        console.log("You Lost!")
        msg.innerHTML = "You Lost!"
    }
}

const computerchoice=()=>{
    const gencomp = ["rock","paper","sciessor"]
    const a =Math.floor(Math.random() * 3);
    return gencomp[a];
}

