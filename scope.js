// var a = 10
// function b(){
//     var a = 20
//     console.log(a)
// }
// b()
// console.log(a)


// a = function name(){
//     console.log("sawan")
//     b()
// }
// a()

// const b = () => console.log("patel")

// const a = {
//     name :"sawan",
//     last_name : function(){
//         this.name = "patel"
//         console.log(this)
//     }
// }

// a.last_name()
// console.log(typeof a.last_name)

// console.log(a)
// console.log(a.name)
// a.last_name()
// console.log(a.last_name)
// console.log(a.name)
// console.log(a)


// a = {
//     name :"sawqan",
//     last_name : function() {
//         // this.name = "patel"
//         console.log(this.name)
//     }
// }

// a.last_name()
// a.name = a.last_name
// console.log(a.name)

// const key = Symbol("hidden");
// const obj = { [key]: 123, visible: true };

// console.log(Object.keys(obj)); // ['visible']
// console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(hidden)]


// loops


// for (let i = 0; i < 5; i ++){
//     console.log(i)
// }

// i = 0
// while (i < 5)
// {
//     console.log(i)
//     i++;
// }

// i = 0 
// do {
//     console.log(i)
//     i ++
// }
// while ( i < 5);


// const a = ["sawan","patel","hcg"]

// for ( let name of a){
//     console.log(name)
// }

// // object for...in

// let obj = {
//     name : "sawan",
//     last_name : "patel",
//     key : "valu"

// }

// for (let item in obj){
//     console.log(item,obj[item])
// }

// const hash1 = map.set({
//     name:"sawan",
//     last:"patel"
// })

// for (let item of hash1){
//     console.log(item)
// }


// function person(name,last_name){
//     person.name1 = name
//     person.last_name2 = last_name

// }

// p1 = person("sawan","patel")
// console.log(person.name1)

// const b = new Map([
//     ["aplles", 800],
//     ["banana", 900]


// ]);

// console.log(b.get("aplles"))
// console.log(b.set("vgc","vsv"))
// console.log(b)


// let text = ""
// b.forEach(function(value,key){
//     text += key + " " + " = " + value + "\n"
// })
// console.log(text)


// const b = ["sname", "lname", "location"]
// const c = [1,2,3]
 
// const hash1 = new Map()

// for(i = 0; i < b.length; i++){
//     hash1.set(b[i],c[i])
// }
// console.log(hash1)



// const readline = require('readline');

// const r1 = readline.createInterface({
//     input: process.stdin,
//     output : process.stdout
// });

// r1.question("Enter a integer:",function(input){
//     const num = parseInt(input);
//     if (num > 18){
//         console.log("Adult")
//     }
//     else {
//         console.log("Minor")
//     }
//     r1.close()
// })


// let int1 = 90

// const text = (int1 > 18) ? "adult":"minor";
// console.log(text)

// function Constructor(a,b){
//     this.a = a;
//     this.b = b;
//     this.sum1 = function(){
//         return this.a + this.b;

//     };
// }
// this.a = 90
// const obj = new Constructor(4,5)
// console.log(obj)
// console.log(obj.sum1())


// function plus(a,b){
//     return a + b
// }

// function mul(a,b){
//     return a * b
// }

// function divi(a,b){
//     return a /b
// }

// a = 9
// b = 90
// const hash1 = new Map([
//     ["plus",plus],
//     ["mul",mul],
//     ["divi",divi]
// ]);
// for (const i of hash1.keys()){
//     console.log(hash1.get(i)(a,b))
// }


// let myfunc = (a,b) => a * b
// console.log(myfunc(78,89))


// sayHello(); // ❌ TypeError: sayHello is not a function
// bchvh()
// function bchvh() {
//   console.log("Hello!");
// };

// bchvh()

// sayHello(); // ❌ TypeError: sayHello is not a function

// var sayHello = function() {
//   console.log("Hello!");
// };

// (function(){
//     console.log(this)
//     console.log("bdhhjVDF")
// })

// hash1 = Map([
//     ["bchd","hhf"],
//     ["avsv","mvh"]
// ])

// console.log(typeof hash1)

// const person = (name,age)=> {
//     this.name= name
//     this.age = age
//     console.log(this)
// }
// const p1 = person("ali",24)
// console.log(p1)
// // console.log(this.name)
// const a = {

// }


// const obj={
//     name:'abc',
//     fn:function ab(){
//         console.log(this, '')
        
//          function cd() {
//             console.log(this)
//         }
//         cd(),
//     }
// }
// obj.fn()

// function person(name){
//     console.log(this)
// }
// person("owhefjg")


// function greet(name, callback){
//     console.log("hello",name)
//     callback()
// }

// function callback(){
//     console.log("hello goodbye")
//     greet("sawan",callback) 
// }

// obj1 = greet("Alice",callback)
// obj1


console.log(1&&2)