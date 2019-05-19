// Ex1,Ex2:
const context = {
    users: null,
};

window.onload = async () => {
    await getUsers();
    await renderUsers();
    viewUserInfo();
};

const getUsers = async () => {
    const res = await fetch('http://dummy.restapiexample.com/api/v1/employees');
    const usersData = await res.json();
    context.users = usersData;
};

const renderUsers = () => {
    for( let i = 0; i < context.users.length; i++){
        let eachUser = context.users[i];
        let ul = document.getElementById('ul_demo');
        let li = `
            <li id = 'user_${i}'>
                ${eachUser.employee_name}
            </li>`;
        ul.innerHTML += li;
        
        
    };
};

const viewUserInfo = () => {
    for (let i = 0; i < context.users.length; i++){
        let li = document.getElementById(`user_${i}`);
        let user_info = document.getElementById('employee_salary');
        li.addEventListener('mouseover', () => {
            user_info.innerHTML = '';
            let eachUser = context.users[i];
            user_info.innerHTML += `
            <b>Salary</b> ${eachUser.employee_salary}
            `;
        })
    };
};