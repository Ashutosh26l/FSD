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
//name = "John";

// const products=["my products",120,true];
// products.push("new product");
// console.log(products);
const products=[1,2,3,4,5,6,7,8,9,10];

let data=products.find(function(item){
    return item>5;
})
console.log(data);