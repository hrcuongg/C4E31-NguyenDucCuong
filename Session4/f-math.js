// window.onload = () => {
//     let x = Math.floor(Math.random() * 11);
//     let y = Math.floor(Math.random() * 11);
//     let operator = ["+", "-", "*", "/"];
//     let op = operator[Math.floor(Math.random() * operator.length)];
    
//     let result = 0;
//     if (op === '+'){
//         result = x + y;
//     }
//     else if (op === '-'){
//         result = x - y;
//     }
//     else if (op ==='*'){
//         result = x * y;
//     }
//     else{ 
//         result = x / y;
//     }
    
//     let errors = [-1, 0, 1];
//     let error = errors[Math.floor(Math.random() * errors.length)];
//     let displayResult = result + error;
//     console.log(`${x} ${op} ${y} = ${displayResult} `);
//     let answer = prompt('Y/N ?').toUpperCase();
//     if (displayResult === result){
//         if (answer === 'Y'){
//             console.log('Yay');
//         }
//         else if (answer === 'N') {
//             console.log('You are wrong');
//         }
//     }
//     else if (displayResult != result){
//         if (answer === 'Y'){
//             console.log('You are wrong');
//         }
//         else if (answer === 'N') {
//             console.log('Yay');
//         } 
//     }    
// };

