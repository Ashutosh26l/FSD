// a();
// function a(){
//     console.log("a");
// }

// const myName=true;
// console.log(typeof myName);
// const abc="ecec";
// const name="my name is :"+abc;
// console.log(name.toUpperCase());



// var name;
// //name = "John";

// // const products=["my products",120,true];
// // products.push("new product");
// // console.log(products);
// const products=[1,2,3,4,5,6,7,8,9,10];

// let data=products.find(function(item){
//     return item>5;
// })
// console.log(data);

// const myObject = [{
//     name: "Example Object",
//     values: [10, 20, 30, 40, 50]
//   }];

// let car = {
//   model: "Golf",
//   make: "Volkswagen",
//   year: 1999,
//   color: "black",
//  };
//  for (let prop in car){
//   console.log(car[prop]);
//  }

//  let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
//  for (let name of names){
//  console.log(name);
//  }


// let cars = [
//   {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black",
//   },
//   {
//     model: "Picanto",
//     make: "Kia",
//     year: 2020,
//     color: "red",
//   },
//   {
//     model: "Peugeot",
//     make: "208",
//     year: 2021,
//     color: "black",
//   },
//   {
//     model: "Fiat",
//     make: "Punto",
//     year: 2020,
//     color: "black",
//   }
//  ];
//  for (let car of cars){
//   if(car.color !== "black"){
//     continue;
//   }
//   if (car.year >= 2020) {
//     console.log("we could get this one:", car);
//   }
//  }
// let step = 3;
//  for (let i = 0; i < 1000; i += step) {
//  if (i > 10) {
//  break;
//     }
//  console.log(i);
//  }

// 


//FUNCTION

// function myName(){
//   console.log("hello");
// }
// myName();

// function addTwoNumbers(x, y) {
//   console.log(x + y); 
// } 
// let arr = [5, 9];
//  addTwoNumbers(...arr);


//var is a fuction scope(except function var creates global variable)
//let and const is block scope
// function  abc2(){
//   var age7 = 20;
//   let age8=30;
//   const age9=40;
//   console.log(age7,age8,age9);
// }
// abc2();
// console.log(age7);
// console.log(age8);
// console.log(age9);

// if(true){
//   var age7 = 20;
//   let age8=30;
//   const age9=40;
//   console.log(age7,age8,age9);(((((HERE LET AND CONST ARE LOCAL VARIABLE)))))
// }
// console.log(age7);
// console.log(age8);
// console.log(age9);

