// let h1 = document.getElementById('event-h1');

// h1.addEventListener('click', () => {
//     console.log('You just click !')
// }) // hàm lắng nghe hành động người dùng

let but = document.getElementById('button');

let inputAddFood = document.getElementById('typeFood');
inputAddFood.addEventListener('keyup', (data) => {
    console.log(data);
})

but.addEventListener('click', () => {
    let foodMenu = document.getElementById('menu');
    console.dir(inputAddFood);
    let newFood = inputAddFood.value
    foodMenu.innerHTML +=
    `
    <li>${newFood}</li>
    `
;
})