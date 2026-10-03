let counter =document.getElementById("count");
let innerCount=0;
const reset=document.getElementById("resetBtn");
const decrease=document.getElementById("decreaseBtn");
const increase=document.getElementById("increaseBtn");

increase.onclick=function(){
 innerCount+=5;
 counter.textContent=`${innerCount}`;
}
decrease.onclick=function(){
 innerCount-=5;
 counter.textContent=`${innerCount}`;
}
reset.onclick=function(){
 innerCount=0;
 counter.textContent=`${innerCount}`;
}
const display=document.getElementById("display");

