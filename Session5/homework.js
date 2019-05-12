// Ex1:
// let btn = document.getElementById("btn-demo");
// let a = document.getElementById('demo-a');
// let input = document.getElementById('demo-input');

// btn.addEventListener('click', () => {
//     input.value += a.href;
//     let attribute = input.value;
//     console.log(attribute);
// })


// Ex2:
// let btn = document.getElementById('btn-delete');
// let select = document.getElementById('demo-select');

// btn.addEventListener('click', () => {
    //     console.dir(select);
//     select.remove(select.selectedIndex);
    //     });
    

// Ex3:
let btn = document.getElementById('btn-demo');
let table = document.getElementById('table-demo');
btn.addEventListener('click', () => {
    console.dir(table);
    let rowNumber = prompt('Enter row number');
    let columnNumber = prompt('Enter column number');
    let content = prompt('Enter content');
    table.rows[`${rowNumber}`].cells[`${columnNumber}`].innerHTML = `${content}`;
    return newTable += table.value;
})    



