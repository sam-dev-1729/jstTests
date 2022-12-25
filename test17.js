console.log("hello");
console.log("========== test16 ==========");
 
// abstract

// function Circle(radius){
//     this.radius = radius;
//     let defaultLocation = {x:0,y:0};
//     let computeOptimunLocation = function(){
//         // ...
//     }
//     this.draw = function(){
//         computeOptimunLocation();
//         console.log('draw');
//     }
// }

// const circle = new Circle(10);

// ------------------------------------------
// inheritance

// shape 
// base class , super class , parent class

//circle , square
// dirived class , sub class , child class

// IS_A : circle IS_A shape

// ------------------------------------------
// inheritance :  Prototypal Inheritance . Pseudoclassical Inheritance . Functional Inheritance.

function Circle(radius){
        this.radius = radius;
        
        this.draw = function(){
            console.log('draw');
        }
    }
    
    const circle = new Circle(10);