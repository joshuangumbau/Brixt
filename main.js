//declaring a variable
let firstName ='joshua'
let lastName ='ngumbau';
let age = 30;
let isApproved =false;
console.log('name');

//object in javascript
/*person is the objects name while name,age and dateofbirth
property's name*/

let person = {
    name:'joshua',
    age: 20,
    dateOfbirth:19
};
person.name='james'
console.log('person.name');
//changing name using dot notation

let chair= {
    material: 'plastic',
    age: 5,
    colour: 'white',
    
};
console.log('person');

//arrays

let selectedColours=['blue','red ','white'];
selectedColours[4] ='green';
//selecting an array index 0 the blue colour
console.log('selectedColours[0]');

//properties of array

let myList = ['apples', 'mangoes' , 'oranges'];
myList[0] ='watermelon'
console.log('myList');


//functions
//function is a state of statement that performs a certain task or calculates a value
/*calling a function*/
function greet(name) {
    //body of the function to display the messge to the console
    //no semicolon in the end of a function 
    console.log('hello'+ name +'' +lastName );
}
//calling a function
greet('john', 'smith');
//parameter what we use in declaration(name)
//argument is the actual value supplied for the parameter(john) 

//learning conditionals in javascript

function sayHello(name) {
    alert("Hi, " + name);
 }
 
 sayHello("David");
 //Alerts "Hi, David"

 function test(x, y) {
    if(x>y) {
      document.write(x);
    }
    else {
      document.write(y);
    }
  }
  test(5, 8);

//output is 8
//function return
function myFunction(a, b) {
    return a * b;
 }
 
 var x = myFunction(5, 6); 
 // Return value will end up in x
 // x equals 30

 
function substrNumbrs(first, second)
{
  var result = first - second;
  
 
return
 
 result;
}
document.write(substrNumbrs(10, 5));
//objects
//constructor funtions
function person (name, age) {
    this.name = name;
    this.age = age;
  }
  var John = new person("John", 25);
  var James = new person("James", 21);
let course=1;
if (course==1){
    console.log("HTML Tutorial");
} else if (course==2){
    console.log("CSS Tutorial");
}else{
    console.log("JAVASCRIPT Tutorial");
}
let status =1;
let msg;
if (status==1){
    msg="online";
}
else if (status==2) {
    msg="away";
} else {
    msg="ofline";
}

//switch statements

var day =2;
switch(day){
    case 1:
        document.write("tuesday");
        break;
    case 2:
        document.write("wednesday");
        break;
    case 3:
        document.write("thursday");
        break;
    default:
        document.write("Another day");


}

var color = "yellow";
switch(color){
    case "red":
        document.write("this is red");
        break;
    case "blue":
        document.write("this is blue");
        break;
    case "green":
        document.write("this is green");
        break;
    case "orange":
        document.write("this is orange");
        break;
    default:
        document.write("color not found");
}

//learning loop
//for loop
var i =1;
for(k=1; k<10; k++){
    i+=k;
}
//while loop

var i=0;
while (i<=10) {
   document.write(i + "<br />");
   i++;
}

//do while
var i=20;
do {  
  document.write(i + "<br />");
  i++;  
}
while (i<=25); 

//break statemnt in javascript 
for(i=0; i<=10; i++){
    if(i==5){
        break;
    }
    document.write(i+ "<br/>");
}
//continue statement
var sum=0; 
for(i=4; i<8; i++) {
  if (i == 6) {
    continue; 
  }
  sum += i;
}
document.write(sum);