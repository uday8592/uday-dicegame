var randomdice1=Math.floor(Math.random()*6)+1;
var randomdice2=Math.floor(Math.random()*6)+1;

var randomModification1="/images/dice"+randomdice1+".png";
var randomModification2="/images/dice"+randomdice2+".png";

var dice1=document.getElementsByClassName('img1')[0];
var dice2=document.getElementsByClassName('img2')[0];

dice1.setAttribute("src",randomModification1);
dice2.setAttribute("src",randomModification2);


if(randomdice1 < randomdice2){
  document.querySelector("h1").innerHTML="🚩player 2 winner";
}
else if(randomdice1 > randomdice2) {
  document.querySelector("h1").innerHTML="🚩 player 1 winner";
}
else {
  document.querySelector('h1').innerHTML="MATCH DRAW PLESE REFRESH";
}
