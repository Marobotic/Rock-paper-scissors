function Loading(){

var z;



$('#Rock_move').click(function(){
z = (Math.floor(Math.random() * 3));
console.log(z);
//Lose
if (z === 0) {
	document.getElementById("p1").innerHTML = "Hooman: Rock";
	document.getElementById("com").innerHTML = "AI: Paper";
	document.getElementById('block_color').style.backgroundColor="#d83636";
	document.getElementById("end_game").innerHTML = "Defeat!";
	disable_buttons();
	}
	//win
	else if (z === 1) {
	document.getElementById("p1").innerHTML = "Hooman: Rock";
	document.getElementById("com").innerHTML = "AI: Scissor";
	document.getElementById('block_color').style.backgroundColor="#4bd836";
	document.getElementById("end_game").innerHTML = "You win!";
	disable_buttons();
	}
	//Draw
	else {
	document.getElementById("p1").innerHTML = "Hooman: Rock";
	document.getElementById("com").innerHTML = "AI: Rock";
	document.getElementById('block_color').style.backgroundColor="#cfd836";
	document.getElementById("end_game").innerHTML = "Every Rock has a story!";
	disable_buttons();
	}

});


$('#Paper_move').click(function(){
	z = (Math.floor(Math.random() * 3));
console.log(z);
//Lose
if (z === 0) {
	document.getElementById("p1").innerHTML = "Hooman: Paper";
	document.getElementById("com").innerHTML = "AI: Scissor";
	document.getElementById('block_color').style.backgroundColor="#d83636";
	document.getElementById("end_game").innerHTML = "CUTCUTCUT";
	disable_buttons();

	}
	//win
	else if (z === 1) {
	document.getElementById("p1").innerHTML = "Hooman: Paper";
	document.getElementById("com").innerHTML = "AI: Rock";
	document.getElementById('block_color').style.backgroundColor="#4bd836";
	document.getElementById("end_game").innerHTML = "You win!";
	disable_buttons();
	}
	//Draw
	else {
	document.getElementById("p1").innerHTML = "Hooman: Paper";
	document.getElementById("com").innerHTML = "AI: Paper";
	document.getElementById("end_game").innerHTML = "Paper meets paper";
	disable_buttons();
	}
});
$('#Scissor_move').click(function(){
	z = (Math.floor(Math.random() * 3));
	console.log(z);
//Lose
if (z === 0) {

	document.getElementById("p1").innerHTML = "Hooman: Scissor";
	document.getElementById("com").innerHTML = "AI: Rock";
	document.getElementById('block_color').style.backgroundColor="#d83636";
	document.getElementById("end_game").innerHTML = "HULK SMASH";
	disable_buttons();
	}
	//win
	else if (z === 1) {
	document.getElementById("p1").innerHTML = "Hooman: Scissor";
	document.getElementById("com").innerHTML = "AI: Paper";
	document.getElementById('block_color').style.backgroundColor="#4bd836";
	document.getElementById("end_game").innerHTML = "You win!";
	disable_buttons();
	}
	//Draw
	else {
	document.getElementById("p1").innerHTML = "Hooman: Scissor";
	document.getElementById("com").innerHTML = "AI: Scissor";
	document.getElementById('block_color').style.backgroundColor="#cfd836";
	document.getElementById("end_game").innerHTML = "Soulmates has found each other!";
	disable_buttons();
	}
});
$('#regenerate_btn').click(function(){
	enable_buttons();

});

function enable_buttons(){
	$('#Rock_move').removeAttr('disabled');
	$('#Paper_move').removeAttr('disabled');
	$('#Scissor_move').removeAttr('disabled');
	//restart button
	$('#regenerate_btn').attr('disabled','disabled');
	//restarting Game
	document.getElementById("end_game").innerHTML = "";
	document.getElementById("p1").innerHTML = "";
	document.getElementById("com").innerHTML = "";
	document.getElementById('block_color').style.backgroundColor="#36c9d8";
}
function disable_buttons(){
	$('#Rock_move').attr('disabled','disabled');
	$('#Paper_move').attr('disabled','disabled');
	$('#Scissor_move').attr('disabled','disabled');
	//restart button
	$('#regenerate_btn').removeAttr('disabled');
}
}
