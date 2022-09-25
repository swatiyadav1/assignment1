var person = {
    name:"swati",
    age:14,
    
gender:"Female",

displayName:function(){
    console.log(this.name);
}
};

//object literal 

person.displayName();


//access the object
console.log(person.name);

console.log(person["age"]);


for(var i in person){
    console.log(person[i]);
}


person.name="kunsh";

person["age"]=56;

console.log(person.name);
console.log(person.age);

delete person.gender;

console.log(person.gender);


var message="hello world";
var greet = message;

greet = "hello kunsh";

console.log(message);
console.log(greet)


var user=person;
user.name="arya";


console.log(person.name);
console.log(user.name);
/*create an object for car - 4 properties and a small fuynction to display the name of the car.

use the for in loop to display everything on the browser window using document.write()

*/