
//Named FUNCTION
console.log("\n\n Named Function \n\n");
function addNum(a,b) {
	console.log("addNum function Executed");
	return a+b;	
}

console.log(addNum(3,4));

var op = addNum(5,5);

console.log(op);

//Anonymous Function
// I] Stored As A variable type Anonymous Function
console.log("\n\nAnonymous Function\n\n");
var add = function(a,b){console.log('Anonymous function is executed');return a+b;};
console.log(add(2,3));

// II] Passes As A argument type to another Function
setTimeout(function(){alert("Displaying after 5 sec");},5000);

//Constructor Function
console.log("\n\n Constructor Function\n\n");
var addFunc = new Function("a","b",
			"console.log('constructor function is executed'); return a+b;");
console.log(addFunc(3,4));

//Self-Invoking Function
// I] first way to write
var a= (function(a,b){
	console.log("Self-Invoking Function is executed");
	return(a+b);
})(3,5);
console.log(a);

// II] second way to write
var b= (function(a,b){
	console.log("Self-Invoking Function is executed");
	return(a+b);
}(4,5));
console.log(b);

