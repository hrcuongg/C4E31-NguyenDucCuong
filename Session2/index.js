// for (let i=0; i <= 100; i+=1){
//     console.log(i);
// }

// for (let i=0; i<100; i+=2){
//     console.log(i);
// }

// for (let i=100; i >= 1; i-=1){
//     console.log(i);
// }

// i += 2 <=> i = i + 2

// let len =0; 
// for(let i=0; i < 200; i+=5){
//     fd(len);
//     rt(90);
//     len += 5;
// }

// let n = prompt("Enter n");
// let tong = 0;
// for (let i=0; i<=n; i++){
//     tong += i; // tong = tong + i;
// }
// console.log(tong);




//CONDITIONAL / BRANCH (Lí thuyết)
// let age = prompt("Enter your age: ")

// if(age < 10){
//     console.log("Baby");
// } 
// else if (age < 18){
//     console.log("Teenager");
// }
// else if (age < 25){
//     console.log("Nearly adult");
// }
// else {
//     console.log("Adult");
// }

//(Bài tập)
// for (let i = 1; i <= 100; i++){
//     if (i % 2 === 0){ // "==: so sánh nửa vời" "===: so sánh tuyệt đối"
//         console.log (i);
//     }
//     else {
//     }
// }

// let n = Math.floor(Math.random() * 100 + 1);//random 1 số bất kì từ 1-100
// console.log(n);
// if(n < 30){
//     console.log("Sunny");
// }
// else if(n < 70){
//     console.log("Rainy");
// }
// else {
//     console.log("Cloudy"); 
// }

// let a = prompt("Enter a");
// console.log("a=", a);
// let b = prompt("Enter b");
// console.log("b=", b);
// let c = prompt("Enter c");
// console.log("c=", c);
// let delta = b**2 - 4*a*c; //b^2 = b**2
// if(delta > 0){
//     console.log("Phuong trinh co 2 nghiem phan biet");
//     console.log("x1=",(-b - delta**0.5)/(2*a));
//     console.log("x2=",(-b + delta**0.5)/(2*a));
// }
// else if(delta === 0){
//     console.log("Phuong trinh co nghiem kep");
//     console.log("x1=x2=", -b/(2*a));
// }
// else {
//     console.log("Phuong trinh vo nghiem");

//TurtleJS
// rt(90);
// for(let i=0; i <=10; i++){
//     if(i%2===0){
//         color("red");
//     }
//     else{
//         color("blue");
//     }
//     fd(10);
//     penup();
//     fd(10);
//     pendown();
// }
// clear()

let user = prompt("Nhap username:");
if(user=="c4e"){
    let password = prompt("Nhap password");
    if(password=="mindx"){
        console.log("Welcome to C4E31!");
    }
    else{
        console.log("Sai password. Vui long nhap lai");
    }
}
else{
    console.log("Sai username. Vui long nhap lai");
}




