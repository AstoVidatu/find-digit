var number = 50;
var digit = 1;
var A = [];


function findDigit(number) {
	for(var i = 1; i < number+1; i++){
		A[i] = i;
		if(((A[i]+'').indexOf(digit) > -1) == true){
			console.log(A[i]);
		}
	}
}

findDigit(number);
