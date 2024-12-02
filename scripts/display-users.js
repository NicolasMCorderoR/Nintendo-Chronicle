document.addEventListener('DOMContentLoaded', function() {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    const userList = document.querySelector('#user-list');

    users.forEach(function(user) {
        let listItem = document.createElement('li');
        
        listItem.textContent = `Nombre: ${user.name}, Correo Electrónico: ${user.email}`;

        let messageList = document.createElement('ol');

        user.messages.forEach(function(message) {
            let messageItem = document.createElement('li');
            messageItem.textContent = `Mensaje: ${message}`;
            messageList.appendChild(messageItem);
        });

        listItem.appendChild(messageList);

        userList.appendChild(listItem);
    });

    document.querySelector('#button-return').addEventListener('click', function() {
        window.location.href = './contact.html';
    });
});