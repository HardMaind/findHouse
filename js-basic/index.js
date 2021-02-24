'use strcit'

// Data types

// console.log('Hello world');
// let name = "Idea2code";
// const age = 20;
// console.log(age);
// console.log(name);

//  object

// let person = {
//     name:'hardik',
//     age:20
// };
// person.name = 'Idea2Code';
// console.log(person);    

// Array

// var selectcolor = ['Red','Yellow','Blue','black'];
// selectcolor[0] = 'Pink';
// console.log(selectcolor);

// let firstName = "Hardik";
// let lastName = "Mandaviya";
// let fullName = `Hardik Mandaviya`
// let companyName = "Idea2code";
// console.log(firstName);

// Template string concatenation
// let FullName = `I am ${fullName} and working on ${companyName}.`

// Simple concatenation
// let FullName = "I am " +fullName + "and working on " +companyName + "."
// let newStr = companyName.slice(0,4)
// console.log(newStr);
// let num = 20.20;
// let str = "11";
// console.log(num + parseInt(str));
// let minNum = 5;
// let maxNum = 10;
// let rendomNum = Math.floor(Math.random() * (maxNum - minNum) + minNum); //5 + minNum
// console.log(rendomNum);
// let number = 10;
// console.log(Number.MAX_SAFE_INTEGER);

// let number =  9007199254740991n;
// console.log(number + 109n);
// let fullName;
// let person = {
//     firstName : "idea",
//     lastName  : "code",
//     fullName : function (){
//         return this.firstName + "2" +this.lastName;
//     }
// };
// document.getElementById("demo").innerHTML = person.fullName();
// console.log(person.fullName());var points = [40, 100, 1, 5, 25, 10];
// let arr = [40, 100, 11, 5, 25, 10,10,200,300,50];
// let Max = arr[0];
// let i;
// for(i=0;i < arr.length; i++){
//     if(arr[i] > Max){
//         Max = arr[i]
//     }
// }
// console.log(Max);
// function myMax(arr){
//     let len = arr.length;
//     let Max = -Infinity;
//     while(len--){
//         if(arr[len] > Max){
//             Max = arr[len]
//         }
//     }
//     return Max;
// }
// console.log(myMax(arr));

// function myArrayMax(arr) {
//     var len = arr.length;
//     var max = -Infinity;
//     while (len--) {
//       if (arr[len] > max) {
//         max = arr[len];
//       }
//     }
//     return max;
//   }
// console.log(myMax(points));
// 
// points.sort(function(a, b){return b-a});

// console.log(points[0]);
// points.sort(function(a, b){return a-b});
// console.log(points[0]);
// a = 'abc'.localeCompare('almblmc')
// console.log(a);

// var points = [40, 100, 1, 5, 25, 10];
// document.getElementById("demo").innerHTML = points;  

// function myFunction() {
//   points.sort(function (a,b){return a-b})
//   document.getElementById("demo").innerHTML = points;
// }
// let numbers = [0, 1 , 4, 3, 10, 20, 30 ];
// numbers.sort( function( a , b){
//     if(a > b) return 1;
//     if(a < b) return -1;    
//     return 0;
// });

// console.log(numbers);

// let sample = [1, 2, 3]
// // let  mapped = sample.map(elem=>elem*10)
// sample.forEach(function(elem, index){
//     console.log(`${elem} comes at ${index}`);
// });
// console.log(sample);
// console.log(mapped); 
// console.log(forec);

// class Cars{
//     constructor(name,year){
//         this.name = name;
//         this.year = year;
//     }
//     age(){
//         let date = new Date();
//         return date.getFullYear() - this.year;
//     }
// }
// newCars = new Cars('volve',2015);
// console.log(newCars);
// console.log(newCars.age());

// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;

//     }
//     age() {
//       let date = new Date();
//       return date.getFullYear() - this.year;
//     }
//   }

//   let myCar = new Car("Ford", 2013);
//   document.getElementById("demo").innerHTML = "My car is " + myCar.age() + " years old.";


// JSON
// let text = 
// '{ "employees" : [' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// // document.getElementById("demo").innerHTML = text
// let obj =  JSON.parse(text);
// // document.getElementById("demo").innerHTML = obj
// document.getElementById("demo").innerHTML = obj.employees[1].firstName + ' ' + obj.employees[1].lastName;

// let a = 20;
// let b = 35;
// debugger;
// let c = a + b;
// console.log(c);

// function validationFunc() {
//     var x = document.forms["myForm"]["fname"].value;
//     if (x == "") {
//         alert("Enter the First Name");
//         return false;
//     }
// }

// function numberCheck(){
//     let no = document.getElementById("num1");
//     if(no.checkValidity()){
//         document.getElementById("demo").innerHTML = no.validationMessage;
//     }else{
//         document.getElementById("demo").innerHTML = "Right Input";
//     }
// }


// function numberCheck(){
//     let txt = "";
//     if( document.getElementById("num1").validity.rangeOverflow){       
//         txt = "Too large number";
//     }else{
//         txt = "Valied input"
//     }
//         document.getElementById("demo").innerHTML = txt;
// }
// function persons(first,last,age){
//     this.firstName = first,
//     this.lastName = last,
//     this.age = age
// }

// let xPersons = new persons("John","Doe",56)
// let xPersons = {
//     firstName: "John",
//     lastName: "",
//     age: 56,
// get ages(){
//     return this.age;
// }
// set lname(lname){
//     return this.lastName = lname;
// }
// }
// persons.lname = "Doe"; // setter
// let myStr = JSON.stringify(persons)
// let x,txt = " ";
// for (x in persons){
//     txt+=persons[x]+ " ";
// };
// document.getElementById("demo").innerHTML = myStr; //txt;  //persons.firstName + ' ' + persons.lastName;
// document.getElementById("demo").innerHTML = persons.lastName;  //setters

// document.getElementById("demo").innerHTML = "The person age is " + xPersons.age + " year old.";

// class cars{
//     constructor(brand){
//         this.carname = brand;
//     }
//     present(){
//         return `I have a ${this.carname},`;
//     }    
// }
// class model extends cars{
//     constructor(brand,mod){
//         super(brand)
//         this.model = mod;
//     }
//     show(){ 
//         return  this.present() + ` it's a model ${this.model}`;
//     }
// }

// let mycars = new model("volvo","420");
// document.getElementById("demo").innerHTML = mycars.show();
// document.write("hey i am here");
// document.appendChild("p","Hello");

// let  x =  document.getElementsByTagName("p");
// document.getElementById("demo").innerHTML = "I am para";
// document.getElementsByClassName("p.para").innerHTML = "I am para";
// document.querySelectorAll("p.para").innerHTML = "I am para";
// function formvalues() {
//     let frm = document.forms["myForm"];
//     let text = "";
//     let i;
//     for (i = 0; i < frm.length; i++) {
//         text += frm.elements[i].value + "</br>";
//     }
//     document.getElementById("demo").innerHTML = text;
// }


// Animation
// let id = null;
// function moveMe(){
//     let ele = document.getElementById("animate");
//     let pos = 0;
//     clearInterval(id);
//     id = setInterval(frame,10);
//     function frame(){
//         if(pos == 350){
//             clearInterval(id);
//         }else{
//             pos++;            
//             ele.style.bottom = pos + "px";
//             ele.style.left = pos + "px";
            
//         }
//     }
// }
