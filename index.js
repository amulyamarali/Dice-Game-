var rand1=Math.floor((5.55*Math.random())+1);
var rand2=Math.floor((5.55*Math.random())+1);
document.querySelector(".img1").setAttribute("src","images/dice"+ rand1 +".png");
document.querySelector(".img2").setAttribute("src","images/dice"+ rand2 +".png");

if(rand1>rand2)
{
  document.querySelector("h1").textContent="player 1 wins ^0^";
}
else if (rand1==rand2) {
  document.querySelector("h1").textContent="Draw Try again O.O";
}
else{
  document.querySelector("h1").textContent="player 2 wins ^0^";
}
