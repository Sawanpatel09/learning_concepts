// var globalVar = "I am global";

// function exampleFunction() {
//   var functionVar = "I am function-scoped";

//   if (true) {
//     var blockVar = "I am block-scoped";
//     console.log(globalVar);   // Accessible
//     console.log(functionVar); // Accessible
//     console.log(blockVar);    // Accessible
//   }

//   console.log(globalVar);   // Accessible
//   console.log(functionVar); // Accessible
//   console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined
// }

// exampleFunction();
// console.log(globalVar); // Accessible
// // console.log(unctionVar)

// // console.log(functionVar); // Uncaught ReferenceError: functionVar is not defined


// hello();

// function hello()
// {
//     console.log("hello")
// }


// let a = ["sawan","patel"]
// str1 = ""
// for(let i = 0; i < a.length; i++){
//   str1 = str1 + " "+ a[i]
// }

// console.log(str1)





// let a = 13
// for(let i = 0;i < a;i++){
//   if (i == 10){
//     console.log("this is number")
//   }
//   console.log(i)
// }

// const x = function(a,b) {return(a * b)}
// console.log(x(2,3))

// class Car{
//   constructor(name,year){
//     this.name = name
//     this.year = year
//   }
//   let_print_car_a_and_b(){
//     console.log("print_name " + this.name+ " print_year " + this.year)
//   }
// }

// const a = new Car("audi",789);
// const b = new Car("BMW",898)
// console.log("this is my car a :"+a.name+","+"and this is my car b :"+b.name)
// a.let_print_car_a_and_b()


// class Car{
//   constructor (brand){
//     this.brand = brand
//   }
//   name(){
//     return "this is the brand of car :"+ this.brand  
//   }
// }

// class models extends Car{
//   constructor(brand,model){
//     super(brand)
//     this.model = model
//   }
// }

// let a = new models("ford", "mustang")
// console.log(a.name())

// function myDisplayer(name){
//   console.log(name)
// }

// function myfirst(){
//   myDisplayer("hello")
// }

// function mysecond(){
//   myDisplayer("good bye")
// }

// mysecond()
// myfirst()


// function myDisplayer(something){
//   console.log(something)
// }

// function calculator(a,b,myresult){
//   let sum1 = a + b
//   myresult(sum1)

// }

// calculator(8,9,myDisplayer)


const mynumber = [1,2,3,-7,-4,43,-67]
const postnumber = removeNeg(mynumber, x => x >=0)
console.log(postnumber)

function removeNeg(mynumber, callback){
  let myarray = []
  for (const x of mynumber){
    a = callback(x)
    if (a) {
      myarray.push(x)
    }
  }
  return myarray
}