// 
// 	Find the digit
// 	Funtion to find all the integer values between 0 and n.
// 	Which contain the number d.
// 	
// 	Example:
// 	Input: n = 20, d = 5
// 	Output: 5, 15
// 
// 	~AstoVidatu

var n = 20; 	//Number
var d = 5;	//Digit to find
var A = [];		//Array to store every number from 0 to n

function findd(n) {
	for(var i = 1; i < n+1; i++){

		A[i] = i;	//storing every int

		//finding if the number contains d
		if(((A[i]+'').indexOf(d) > -1) == true){
			console.log(A[i]);
		}
	}
}

findd(n);
