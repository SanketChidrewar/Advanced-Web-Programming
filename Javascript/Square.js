
//named function

function square(a){
	console.log("Inside Named Function");
	return a*a;
}
console.log(square(5));

//Anonymous Function

var sq = function(a){
	console.log("Inside Anonymous Function");
	return(a*a);
}
console.log(sq(5))

//Constructor Function

var squ = new Function("a","console.log('Inside Constructor Function');return(a*a);")
console.log(squ(5));

//self-Invoking function

var squa = (function(a){
	console.log("Inside self-Invoking Function");
	return a*a;
}(5));
console.log(squa);