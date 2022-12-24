// Swup.js

const swup = new Swup();

// Var

var create_room = $('#create');
var join_page = $('#join');
var join_room = $('#join-room');
var pseudo = $('#pseudo');
var room = $('#room');

// Form

console.log("Let's GOOO !");

$(function () {

    create_room.click(function () {
        var roomId = Math.random().toString(36).substring(2);

        console.log("roomId définit (create)");

        // Envoyer une requête HTTP au serveur pour créer une nouvelle room avec cet identifiant
        $.post(`http://127.0.0.1:5500/code/createroom?roomId=${roomId}`, function () {
            // Rediriger vers la page de la room en utilisant l'identifiant de room

            // pseudo.submit(function (event) {
                // event.preventDefault();
                var username = pseudo.val(); // Récupérer le nom d'utilisateur entré par l'utilisateur

                console.log("username récupéré (create)");

                if (username && username.length <= 3) {
                    localStorage.setItem('session', 'active');

                    console.log("username validé (create)");

                    window.location.href = `http://127.0.0.1:5500/code/room.html?roomId=${roomId}`
                }
                else {
                    alert('Le nom d\'utilisateur doit faire minimum 3 caractères');

                    console.log("username refusé (create)");
                }


            // });
        });
    });

    join_page.click(function () {
        pseudo.submit(function (event) {
            event.preventDefault();
            var username = pseudo.val(); // Récupérer le nom d'utilisateur entré par l'utilisateur

            console.log("username récupéré (join)");

            if (username && username.length <= 3) {
                localStorage.setItem('session', 'active');

                console.log("username validé (join)");

                window.location.href = `http://127.0.0.1:5500/code/room.html`

                $(function () {
                    join_room.click(function () {
                        room.submit(function (event) {
                            event.preventDefault();
                            var roomId = room.val(); // Récupérer le code de session entré par l'utilisateur

                            console.log("roomId récupéré (room)");

                            if (roomId && roomId.length <= 3) {
                                localStorage.setItem('session', 'active');

                                console.log("roomId validé (room)");

                                window.location.href = `http://127.0.0.1:5500/code/room.html/${roomId}`
                            }
                            else {
                                alert('Nom de session incorrect');

                                window.location.href = `http://127.0.0.1:5500/code/login.html`

                                console.log("session refusé (room)");
                            }
                        });
                    });
                });
            }
            else {
                alert('Le nom d\'utilisateur doit faire minimum 3 caractères');

                console.log("username refusé (join)");
            };
        });
    });
});