

$(document).ready(function(){
	console.log('Java is ready');

 $(window).on('load', function(){        
   $('#myModal').modal('show');
    }); 

var goldFish = document.getElementById("goldfish");
var shark = document.getElementById("shark");

goldFish.position = 0;
shark.position = 0;

function move(fish){
	var newPosition = fish.position + 40;
	fish.position = newPosition;
	fish.style.left = newPosition + 'px'; 
};



	document.addEventListener('keyup',function(event){
	  if(event.key === 'ArrowRight'){
	    console.log('goldfish');
	    move(goldFish);
	  } else if(event.key === 'ArrowLeft'){
	    console.log('shark')
	    move(shark);
	  }
	  checkWinner();

	  // how to control the car with a keyboard
});
	

function checkWinner(){
  if (goldFish.position >= 1000) {
    setWinState('The goldfish');
  };
  if (shark.position >= 1000) {
    setWinState('The shark');
  };
};
 
function setWinState(fish){
	alert(fish + ' wins!');
}


var count=10;

 //1000 will  run it every 1 second

$('#starttimer').on('click', function(){
	var counter=setInterval(timer, 1000);
// function timer(){
function timer(){
  count=count-1;
  if (count <= 0) 

  {
     clearInterval(counter);
     noWinner(); 
     return;
    
  }
   document.getElementById("timer").innerHTML=count + " secs"; // watch for spelling
   }

});

function noWinner(event){
	debugger
	if (goldFish.position < 1000 && shark.position < 1000 && count <= 1) {
		alert('Game Over');
	}
}







})