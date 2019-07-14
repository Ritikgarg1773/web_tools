
var x=Number(prompt("Enter a no. to check whether it's even or not?"));
function isEven(no){
	if (no%2===0){
		console.log(no+" is even");
		return(no+" is even");
	}
	else{
		console.log(no+" is odd");
		return(no+" is odd");
	}
}
alert(isEven(x));