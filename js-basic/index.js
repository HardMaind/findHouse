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
let person = {
    firstName : "idea",
    lastName  : "code",
    fullName : function (){
        return this.firstName + "2" +this.lastName;
    }
};
// document.getElementById("demo").innerHTML = person.fullName();
// console.log(person.fullName());