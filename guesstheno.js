// anooy-omatic guessing number game (ask you untill you guess the no. right)
/*
var secretnumber=87;
var userno=Number(prompt("Guess the number !!!!"));
console.log("userno = "+ userno);
while(userno!==secretnumber){
	if (userno-secretnumber>10){
		userno=Number(prompt("your guess was too high, try something lower"));
        console.log("userno = "+ userno);
	}
	else if (userno-secretnumber>0){
		userno=Number(prompt("your guess was near, try something lower"));
        console.log("userno = "+ userno);
	}
	else if (userno-secretnumber<-10){
		userno=Number(prompt("your guess was too low, try something higher"));
        console.log("userno = "+ userno);
	}	
	else{
		userno=Number(prompt("your guess was near, try something higher"));
        console.log("userno = "+ userno);
	}
}
alert("Wow you guessed it right!!");
*/

// version 2 of annoy-omatic (if your input contains the secretno. then it's right)

var secretnumber=73;
var secretstring=String(secretnumber);
userstring=prompt("guess the secretnumber !!!");
userno=Number(userstring);
console.log("userno = "+ userno);
while(userstring.indexOf(secretstring)=== -1){
	if (userno-secretnumber>10){
		userstring=prompt("your guess was too high, try something lower");
		userno=Number(userstring);
        console.log("userno = "+ userno);
	}
	else if (userno-secretnumber>0){
		userstring=prompt("your guess was near, try something lower");
		userno=Number(userstring);
        console.log("userno = "+ userno);
	}
	else if (userno-secretnumber<-10){
		userstring=prompt("your guess was too low, try something higher");
		userno=Number(userstring);
        console.log("userno = "+ userno);
	}	
	else{
		userstring=prompt("your guess was near, try something higher");
		userno=Number(userstring);
        console.log("userno = "+ userno);
	}
}
if (userno===secretnumber){
alert("Wow you guessed it right!!");
}
else{
	alert("Your number has the secretnumber inside it !!")
}

