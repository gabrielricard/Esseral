$(document).ready(function() {
    // Récupère tous les utilisateurs au chargement de la page
    fetch('/api/users')
        .then(response => response.json())
        .then(users => {
            const usersList = $('#users-list');
            users.forEach(user => {
                usersList.append(`<li class="list-group-item">${user.name} ${user.lastName}</li>`);
            });
        });

    // Ajoute un utilisateur
    userIDCounter = 2;
    $('#add-user').click(function() {
        const user = {
            userId: userIDCounter++,
            userName: 'john_doe',
            password: 'password',
            name: 'John',
            lastName: 'Doe'
        };

        fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(newUser => {
            usersList.append(`<li class="list-group-item">${newUser.name} ${newUser.lastName}</li>`);
        });
    });
});