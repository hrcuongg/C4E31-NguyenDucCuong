// STUDY
// A nested list is a list that appears as an element in another list
// Yes it can! 

// Ex1:
// inventory = {
//     'gold' : 500,
//     'pouch' : ['flint', 'twine', 'gemstone'],
//     'backpack' : ['xylophone', 'dagger', 'bedroll', 'bread loaf']
// };
// inventory.pocket = ['seashell', 'strange berry', 'lint'];
// delete inventory.backpack[1];
// inventory.gold += 50;
// console.log(inventory);

// Ex2:
// let prices =
// {
//   "banana": 4,
//   "apple": 2,
//   "orange": 1.5,
//   "pear": 3

// };
// let stock =
// {
//  "banana": 6,
//   "apple": 0,
//   "orange": 32,
//   "pear": 15

// };
// let total = 0;

// Object.keys(prices).forEach(key => {    
//     let price = prices[key];
//     let st = stock[key];
//     total += price * st;
//      console.log(`${key} \n price: ${price} \n stock: ${st}`);
// });
// console.log(`${total}`);




// Ex3:
// let item = ['T-Shirt','Sweater'];
// let wlc = prompt("Welcomt to our shop, what do you want (C,R,U,D)?");
// if (wlc.toLowerCase() === "r"){
//     console.log(`Our Item: ${item}`);
// }
// else if (wlc.toLowerCase() === "c"){
//     let newItem = prompt("Enter new item");
//     item.push(newItem);
//     console.log(`Our Item: ${item}`);
// }
// else if (wlc.toLowerCase() === "u"){
//     let u = prompt("Update position ?");
//     let newName = prompt("New item ?");
//      item[u - 1] = newName;
//     console.log(`Our Item: ${item}`);

// }
// else{
//     let del = prompt("Delete position ?");
//     item.splice(del-1, 1);
//     console.log(`Our Item: ${item}`);

// }

// Ex4:
// let flock = [4,14,54,356,63,9,134];
// console.log(`Hello, my name is Cuong & there are my sheep size: ${flock}`);
// let total = 0;
// for ( let index = 0; index < 5; index++){
// console.log(`MONTH ${index}`);
// let maxSize = Math.max.apply(Math, flock);
// console.log(`Now my biggest sheep has size ${maxSize} let's shear it`);
// let position = flock.indexOf(maxSize);
// flock[position] = 8;
// console.log(`After shearing, here is my flock ${flock}`);
// for( let i = 0; i < flock.length; i++){
//     flock[i] += 50;
// }
// console.log(`One month passed, now here is my flock ${flock}`);
// }
// for( let a = 0; a < flock.length; a++){
//     total += flock[a];
// }
// console.log(`My flock has size in total ${total}`)
// let money = total * 2;
// console.log(`I would get ${total} * 2$ = ${money}`);







