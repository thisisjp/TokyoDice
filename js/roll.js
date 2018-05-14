window.addEventListener( 'DOMContentLoaded', function () {

		const buttonRoolDice = document.querySelector( '.dice-roll' );
    var fulmine = '\<i class\=\"fas fa\-bolt\"\>\<\/i\>'
    var cuore = '\<i class\=\"fas fa\-heart\"\>\<\/i\>'
    var zampa = '\<i class\=\"fas fa\-paw\"\>\<\/i\>'

    function rollDice () {

        const diceSide1 = document.getElementById( 'dice-side-1' );
        const diceSide2 = document.getElementById( 'dice-side-2' );
			const diceSide3 = document.getElementById( 'dice-side-3' );
			const diceSide4 = document.getElementById( 'dice-side-7' );
			const diceSide5 = document.getElementById( 'dice-side-8' );
			const diceSide6 = document.getElementById( 'dice-side-9' );
        const status = document.getElementById( 'status' );

        const side1 = Math.floor( Math.random() * 6 ) + 1;
        const side2 = Math.floor( Math.random() * 6 ) + 1;
				const side3 = Math.floor( Math.random() * 6 ) + 1;
				const side4 = Math.floor( Math.random() * 6 ) + 1;
				const side5 = Math.floor( Math.random() * 6 ) + 1;
				const side6 = Math.floor( Math.random() * 6 ) + 1;
        //const diceTotal = side1 + side2;
			
//
  if(diceSide1.classList.contains('free')) {
    if(side1==6){
      diceSide1.innerHTML = fulmine;
    }
    else if(side1==5){
      diceSide1.innerHTML = cuore;
    }
    else if (side1==4){
      diceSide1.innerHTML = zampa;
    }
    else{
      diceSide1.innerHTML = side1;
    }
  }
  else{
  }
//
  if(diceSide2.classList.contains('free')) {
    if(side2==6){
      diceSide2.innerHTML = fulmine;
    }
    else if(side2==5){
      diceSide2.innerHTML = cuore;
    }
    else if (side2==4){
      diceSide2.innerHTML = zampa;
    }
    else{
      diceSide2.innerHTML = side2;
    }
  }
  else{
  }
//
  if(diceSide3.classList.contains('free')) {
    if(side3==6){
      diceSide3.innerHTML = fulmine;
    }
    else if(side3==5){
      diceSide3.innerHTML = cuore;
    }
    else if (side3==4){
      diceSide3.innerHTML = zampa;
    }
    else{
      diceSide3.innerHTML = side3;
    }
  }
  else{
  }
//
  if(diceSide4.classList.contains('free')) {
    if(side4==6){
      diceSide4.innerHTML = fulmine;
    }
    else if(side4==5){
      diceSide4.innerHTML = cuore;
    }
    else if (side4==4){
      diceSide4.innerHTML = zampa;
    }
    else{
      diceSide4.innerHTML = side4;
    }
  }
  else{
  }
//
  if(diceSide5.classList.contains('free')) {
    if(side5==6){
      diceSide5.innerHTML = fulmine;
    }
    else if(side5==5){
      diceSide5.innerHTML = cuore;
    }
    else if (side5==4){
      diceSide5.innerHTML = zampa;
    }
    else{
      diceSide5.innerHTML = side5;
    }
  }
  else{
  }
//
  if(diceSide6.classList.contains('free')) {
    if(side6==6){
      diceSide6.innerHTML = fulmine;
    }
    else if(side6==5){
      diceSide6.innerHTML = cuore;
    }
    else if (side6==4){
      diceSide6.innerHTML = zampa;
    }
    else{
      diceSide6.innerHTML = side6;
    }
  }
  else{
  }
//

//$('.dice').html('\<i\>ciao\<\/i\>');
// $('.dice').text(function(index,text){
//     return text.replace('6','\<i\>ciao\<\/i\>');
// });
        //status.innerHTML = 'You rolled ' + diceTotal + '.';
    }

    buttonRoolDice.addEventListener( 'click', rollDice, false );

}, false);


function myfunc(div) {
  var className = div.getAttribute("class");
  if(className=="dice free") {
    div.className = "dice locked";
  }
  else{
    div.className = "dice free";
  }
}