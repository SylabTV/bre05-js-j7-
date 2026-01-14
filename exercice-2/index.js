window.addEventListener("DOMContentLoaded", function () {

    let username = sessionStorage.getItem("username");

    if (username === null) {
        username = window.prompt("quel est votre nom");
        sessionStorage.setItem("username", username);
    } else {
        window.alert("Votre nom est : " + username);
    }

});
