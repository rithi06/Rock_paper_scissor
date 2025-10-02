let pl_score=0;
let ri_score=0;
let round=0;

const pScore=document.getElementById("p_score");
const rScore=document.getElementById("r_score");
const pChose=document.getElementById("p_chose");
const rChose=document.getElementById("r_chose");
const result=document.getElementById("res");
const rounds=document.getElementById("count");

const choices=["Rock","Paper","Scissor"];
function playGame(playerChoice)
{
    if(round>=10)
    {
        return;
    }
    const rithChoice=choices[Math.floor(Math.random()*3)];
    pChose.textContent="Choosed: "+playerChoice;
    rChose.textContent="Choosed: "+rithChoice;

    if(playerChoice===rithChoice)
    {
        result.textContent="It's a draw";
    }else if(
        (playerChoice==="Rock"&&rithChoice==="Scissor")||
        (playerChoice==="Paper"&&rithChoice==="Rock")||
        (playerChoice==="Scissor"&&rithChoice==="Paper")
    )
    {
        result.textContent="You won!";
        pl_score++;
        pScore.textContent=pl_score;
    }else{
        result.textContent="You Lose!";
        ri_score++;
        rScore.textContent=ri_score;
    }
    round++;
    count.textContent=`Match : ${round}/10`;
    if(round===10)
    {
        showfinalres();
    }
}
function showfinalres()
{
    if(pl_score>ri_score)
    {
        final_res.textContent="Game Over! You won the Series";
    }else if(ri_score>pl_score)
    {
        final_res.textContent="Oops! Rithi won the series!!";
    }else
    {
        final_res.textContent="The Series is a draw!!";
    }
    const resetBtn=document.createElement("button");
    resetBtn.textContent = "🔄 Reset Game";
    resetBtn.style.marginTop = "20px";
    resetBtn.onclick = resetGame;
    document.body.appendChild(resetBtn);

}
function resetGame() {
    pl_score = 0;
    ri_score = 0;
    round = 0;

    pScore.textContent = pl_score;
    rScore.textContent = ri_score;
    pChose.textContent = "Choosed:";
    rChose.textContent = "Choosed:";
    result.textContent = "Game reset! Start again 🎮";
    rounds.textContent = `Match: ${round}/10`;

    const btn = document.querySelector("button");
    if (btn) btn.remove();
}
document.getElementById("Rock").addEventListener("click",()=>playGame("Rock"));
document.getElementById("Paper").addEventListener("click",()=>playGame("Paper"));
document.getElementById("Scissor").addEventListener("click",()=>playGame("Scissor"));
