// 1. Boolean refers to a system of logical thought that is used to create true/false statements. 
// A Boolean value expresses a truth value (which can be either true or false)
// Examples: wet && cold,rich || famous,!happy
// 2.A flow chart is a graphical or symbolic representation of a process. 
// Each step in the process is represented by a different symbol and contains a short description of the process step. 
// The flow chart symbols are linked together with arrows showing the process flow direction. 
// 3.“Nesting” conditional statements means that you can use one if or else if statement inside another if or else if statement(s).
// Examples: if( name == cuong) {
// 	// Executes when the expression 1 is true
// 	if( name == cuongnguyen) {
// 		// Executes when the expression 2 is true
// 	}
// }
// else{
// 	//Executes when expression 1 is false
// 	if( name == manh){
// 		//Executes when expression 3 is true
// 	} 
// } 

// Turtle JS
// 1. for(let i=0; i <4; i++){
//     rt(15)
//     fd(100)
//     lt(60)
//     fd(100)
//     lt(120)
//     fd(100)
//     lt(60)
//     fd(100)
//     lt(45)
//     }
// 2.  rt(90);
// lt(60);
// for(let i=0;i<3;i++){
//   fd(70);
//   rt(120);
// }
// lt(30);
// for(let n=0;n<4;n++){
//   fd(70);
//   rt(90);
// }
// lt(90)
// rt(72)
// for(let a=0;a<5;a++){
//   fd(70);
//   rt(72);
// }
// lt(72);
// rt(60);
// for(let b=0;b<6;b++){
//   fd(70);
//   rt(60);
// }


// Serious Exercises:
//1. let height1 = prompt("Enter height in cm");
//  let height = height1 * 0.01;
//  let weight = prompt("Enter weight in kg");
//  let bmi = weight / (height * height);
//  if(bmi < 16){
//      console.log("You are severaly underweight");
//  }
//  else if(16 <= bmi && bmi < 18.5){
//      console.log("You are underweight");
//  }
//  else if(18.5 <= bmi && bmi < 25){
//      console.log("Your bmi is normal");
//  }
//  else if(25 <= bmi && bmi < 30){
//      console.log("You are overweight");
//  }
//  else{
//      console.log("You are obese");
//  }
 let n = prompt("Enter n");
let tich = 1;
for( let i = 1; i <= n; i++){
    tich *= i;
}
console.log(tich);