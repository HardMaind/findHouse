// Variables
/*
let number1 = 20;
let number2 = 30;
console.log(number1+number2);
*/
// Object
/*
let Name_subjectmarks ={
    Hard : 20,
    Ramu : 10
}
console.log(Name_subjectmarks);
*/
// Arrays
/*
let Marks = [1,2,3,"Name",4,5];
console.log(Marks);
*/

// console.log(false || false);

// Funcation
/*
function avg(a,b){
    return (a+b)/2;
}
console.log(avg(10,20));
*/
/*
function drive(age){
    if (age <=17){
        console.log("Can\'t Drive");
    }
    else{
        console.log("you can Drive");
    }
}
drive(100);
*/
// Loops in Javascripts
/*
let arr = [1,2,3,4,5,6];

for(let i =0;i<arr.length;i++){
    if(i == 2){
        continue;
    }
    console.log(arr[i]);
    
}

arr.forEach(function(element){
    console.log(element);
})
let j = 0;
while(j<arr.length){
    console.log(arr[j]);
    j = j +1;
}
let k = 0;
do{
    console.log(arr[k]);
    k++;
}while(k<arr.length)*/

// Array Methods
/*
let myArr = ["Name","Name1",10,null,undefined,true]
let newArr = [10,20,30,40];
console.log(myArr.length);
myArr.pop();
console.log(myArr);
myArr.push("Hey dued!")
myArr.unshift("Ram");
console.log( myArr.unshift("Ram"));
console.log(newArr.copyWithin(-1,1,3));
*/

// String Methos
/*
let myStr = "My name is hard and work on idea2code";
console.log(myStr.lastIndexOf("hard"));
*/
// let myDate = new Date();
// console.log(myDate.getUTCHours());


// DOM
/*
let eleid = document.getElementById('name');
let ele = document.getElementsByClassName('contianer');
console.log(ele);
// ele[0].style.background = "sky";
ele[0].classList.add('primary-color');
ele[1].classList.add('text');
console.log(ele[0].innerHTML);
console.log(eleid.innerHTML);
tn = document.getElementsByTagName('div');
console.log(tn);
createelement = document.createElement('p')
createelement.innerHTML = "Hey i am here!"
tn[0].appendChild(createelement);
createelement2 = document.createElement('b')
createelement2.innerHTML = "Hey i am here and bold!"
tn[0].replaceChild(createelement2,createelement);
*/

// Events

// function clicked(){
//     console.log("button is clicked");
// }
// fc = document.getElementsByClassName('fcontianer');
// fc.addEventListener('click',function(){
//     console.log(clicking);
// })
// window.onload = function(){
//     console.log("documnet is loaded");
// }

// function sum(a,b){
//     return a+b;
// }
// Arrow funcation
// sum = (a,b)=>{
//     return a + b;
// }

// settimeout and setinterval
// func = ()=>{
//     console.log("Timeoute");
// }
// clr = setInterval(setTimeout(func,2000)); 

// localStorage
// JSON
// obj = {
//     name:"Hardik",
//     length:1,
//     num:10
// }
// js_on = JSON.stringify(obj);
// console.log(js_on);
// js_off = JSON.parse(`{"name":"Hardik","length":1,"num":10}`);
// console.log(js_off);

// let a;
// let time;
// let date;
// setInterval(() => {
//     a = new Date();
//     date = a.toLocaleDateString();
//     time = a.getHours() +":"+ a.getMinutes() +":"+ a.getSeconds()
//     document.getElementById('time').innerHTML = time +":"+ date;
// },1000);
// a = new Date();
// time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds()
// document.getElementById("time").innerHTML
// date = a.toLocaleDateString();
// console.log(date);
// console.log(time);