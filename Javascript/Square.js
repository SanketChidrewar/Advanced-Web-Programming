
//named function
function square(a){
	console.log("Inside Named Function");
	return a*a;
}
var num = prompt("ENTER A NUMBER TO GET SQUARE USING NAMED FUNCTION");
alert("SQUARE IS :"+square(num));
console.log(square(num));

//Anonymous Function
var sq = function(a){
	console.log("Inside Anonymous Function");
	return(a*a);
}
var num = prompt("ENTER A NUMBER TO GET SQUARE USING Anonymous FUNCTION");
alert("SQUARE IS :"+sq(num));
console.log(sq(num));

//Constructor Function
var squ = new Function("a","console.log('Inside Constructor Function');return(a*a);")
var num = prompt("ENTER A NUMBER TO GET SQUARE USING Constructor FUNCTION");
alert("SQUARE IS :"+squ(num));
console.log(squ(num));

//self-Invoking function
var squa = (function(a){
	console.log("Inside self-Invoking Function");
	return a*a;
}(prompt("ENTER A NUMBER TO GET SQUARE USING self-Invoking FUNCTION")));
alert("SQUARE IS :"+squa);
console.log(squa);