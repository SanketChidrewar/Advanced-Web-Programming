
//method 1 to create object
function createPersonObject1() {
	
	var person = new Object();
	person.name = "sanket1";
	person.age = 21;
	person.city = "udgir";

	return person;
	}

var person1 = createPersonObject1();
console.log(person1);

//method 2 to create object
function createPersonObject2() {
	
	var person = { };
	person.name = "sanket2";
	person.age = 21;
	person.city = "udgir";

	return person;
	}

var person2 = createPersonObject2();
console.log(person2);

//method 3 to create object
function createPersonObject3() {
	
	var person = { };
	person['name'] = "sanket3";
	person['age'] = 21;
	person['city'] = "udgir";

	return person;
	}

var person3 = createPersonObject3();
console.log(person3);

//method 4 to create object
function createPersonObject4() {
	
	var person = {
			name:'sanket4',
			age: 21,
			city : 'udgir'
		}

	return person;
	}

var person4 = createPersonObject4();
console.log("name:"+person4.name+"\nage:"+person4.age+"\ncity:"+person4.city);