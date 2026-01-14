window.addEventListener("DOMContentLoaded", function () {

    let username = sessionStorage.getItem("name");

    if (username === null) {
        username = window.prompt("quel est votre nom");
        sessionStorage.setItem("name", username);
    } else {
        window.alert("Votre nom est" + username);
    }

});
