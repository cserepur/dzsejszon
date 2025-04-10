const usersData = document.getElementById('usersTable');

document.getElementById('userForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const myformData = new FormData(e.target);
    const userData = Object.fromEntries(myformData);
    console.log(userData);
})
