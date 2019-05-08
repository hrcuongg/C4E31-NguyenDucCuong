// REVIEW
/* 
  - We should use function bc function help us to do Organization, Reusability, Testing, Extensibility, Abstraction easier.
  - define a function: Function Declaration, Function Expressions, Arrow Function Expression. 
    declare a function: When the callback function has one short statement, the arrow function is a good option too, because it creates short and light code. For a shorter syntax when declaring methods on object literals, the shorthand method declaration is preferable
  - call a function: nameOfFunction();  
    use a function: To use a function, you must define it somewhere in the scope from which you wish to call it
  - return statements cease execution in a function and return a value to the caller
    The return statement ends function execution and specifies a value to be returned to the function caller
    return ;
  - yes: the JS engine has to be notified that some function has finished its business, which is done by the function returning something
  - Function parameters are the names listed in the function definition.
    Function arguments are the real values passed to (and received by) the function.
    function functionName(parameter1, parameter2, parameter3) {
    // code to be executed
    }
  - The function could be called as if it was in the same JS File as long as the file containing the definition of the function has been loaded before the first use of the function.
*/

// TURTLEJS

// 1
// function hello() {
//     let parameter1 = "Hello world !";
//     console.log(parameter1);
// }
// hello();
// hello();
// hello();

// 2
// const a = (x, y) => {
//     let sum = x + y;
//     console.log(sum);
// }
// a(1,99);

// 3
// function draw_square(length, colors) {
//     color(colors);
//     for(let i = 0; i < 4; i++){
//      fd(length);
//      rt(90);
//     }
//   }
//   draw_square(100, "blue")
// 4
// function drawSquare(length, colors) {
//     color(colors);
//     for(let a = 0; a < 4; a++){
//      fd(length);
//      rt(90);
//     }
//   }
//   for (let i = 0; i  < 30; i ++){
//           drawSquare(i * 5, 'red')
//       lt(17)
//   penup()
//           fd(i * 2)
//           pendown()
//   }
  
// 5
// function draw_star(length) {
//     for(let a = 0; a <5 ; a++){
//      fd(length);
//      rt(145);
//     }
//   }
//   draw_star(100)

// 6
// function remove_dollar_sign(s) {
//     var removed = s.replace('$','');
//     console.log(removed);
//     return removed;

// }
// remove_dollar_sign('1000$')

// 7
// function remove_dollar_sign(s) {
//     let removed = s.replace(/[$]/g,'');
//     console.log(removed);
//     return removed;
// }
// string_with_no_dollars = remove_dollar_sign("$80% percent of $life is to show $up")
// if (string_with_no_dollars == "80% percent of life is to show up"){
//     console.log("Your function is correct")}
// else{
//     console.log("Oops, there's a bug")}

// 8
// function get_even_list(l) {
//     let lists = [];
//     for (let i = 0; i < l.length; i++){
//         if (l[i] % 2 == 0){
//             lists.push(l[i]);
//         }
//     }
//     return lists;
//     }
// console.log(get_even_list([1, 4, 5, -1, 10]));

// 9
// function get_even_list(l) {
//     let lists = [];
//     for (let i = 0; i < l.length; i++){
//         if (l[i] % 2 == 0){
//             lists.push(l[i]);
//         }
//     }
//     return lists;
//     }
// even_list = get_even_list([1, 2, 5, 9, -10, 6]);
// console.log(even_list);

// if (even_list = [2, -10, 6]){
//     console.log("Your function is correct")
// }
// else{
//     console.log("Ooops, bugs detected")}

// 10,11
// function is_inside([x,y],[x1,y1,wid,hei]){
//     let ans = 0;
//     if(x <= x1+wid && x > x1 ){
//         if(y <= y1+hei && y > y1){
//             ans = true;
//         }
//         else{
//             ans = false;
//         }
//     }
//     else{
//         ans = false;
//     }
//     return ans;
// }
// test = is_inside([100,120],[140,60,100,200]);
// if ( test == true){
//     console.log("Your function is correct");
// }
// else {
//     console.log("Oops, bugs detected");
// }




  
  
  
  



