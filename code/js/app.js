// Swup.js

const swup = new Swup();

// Form



$('#create').click(function () {
    const roomId = Math.random().toString(36).substring(2);

    // Envoyer une requête HTTP au serveur pour créer une nouvelle room avec cet identifiant
    $.post('http://127.0.0.1:5500/room.html/', { id: roomId }, function (response) {
        // Rediriger vers la page de la room en utilisant l'identifiant de room


        $('#pseudo').submit(function (event) {
            event.preventDefault();
            var username = $('#username').val(); // Récupérer le nom d'utilisateur entré par l'utilisateur

            if (username === 'test') {
                localStorage.setItem('session', 'active');
                window.location.href = `http://127.0.0.1:5500/room.html/${roomId}`
            }
            else {
                alert('Nom d\'utilisateur incorrect');
            }


        });
    });


})

$(function () {
    $('#join').click(function () {
        $('#pseudo').submit(function (event) {
            event.preventDefault(); // Empêcher la soumission du formulaire
            var username = $('#username').val(); // Récupérer le nom d'utilisateur entré par l'utilisateur


        });


    })
});