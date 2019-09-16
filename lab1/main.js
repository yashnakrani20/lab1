var user  = document.querySelector('.userchoice'); 
var computer  = document.querySelector('.computerchoice') ;
var startBtn  = document.querySelector('.startBtn');
var result  = document.querySelector('.result'); 
var userchoice;
var winstates = {paper:'rock', scissors:'paper', rock:'scissors'};

startBtn.addEventListener('click', function(){
    this.disable = true;
    result.innerHTML ='';
    user.className = "userchoice rock ";
    computer.className = "computerchoice rock ";
});
document.addEventListener('keydown',function(event){
    if(event.keyCode === 82){
        userchoice = 'rock';
    } else if (event.keyCode === 80 ) {
        userchoice = 'paper';
        }
    else {
        userchoice = 'scissors';
    }
})
document.addEventListener('animationend', function(){ 
    if(!userchoice) { userchoice = getRandomChoice();}
    startBtn.disable = false;
    var computerchoice = getRandomChoice();
   
    user.className = "userchoice" + userchoice;
    computer.className = "computerchoice" + computerchoice;
    result.innerHTML = getWinner(userchoice, computerchoice);
    userchoice = '';
});
function getRandomChoice(){
    return Object.keys(winstates)[Math.floor(Math.random() * 3 )];
}
function getWinner(userchoice, computerchoice) {
  if (userchoice === computerchoice) {
    return "a tie.";
  } else if 
    (userchoice === winstates[computerchoice]){
      return "computer wins!" +computerchoice +"beats" + userchoice;
      }
      return "you wins!" +userchoice +"beats" + computerchoice;
}


