// declarer l'url api
let url = "https://corsproxy.io/?" + encodeURIComponent(
    "https://maridoucet.sites.3wa.io/user-api/user/18"
);
document.addEventListener("DOMContentLoaded", function() {
// appeler l'url avec fetch
    fetch(url)
// transformer en obj (response.json equivaut à JSON.parse)
    .then(response => response.json())
// cree les elements et remplir avec les datas
    .then(data => {
        let user = data.data;

        let h1 = document.createElement("h1");
        let h2 = document.createElement("h2");
        let h3 = document.createElement("h3");

        h1.textContent = user.username;
        h2.textContent = user.firstName + " " + user.lastName;
        h3.textContent = user.email;
// ajouter les elements dans le dom 
    document.body.appendChild(h1);
    document.body.appendChild(h2);
    document.body.appendChild(h3);
    console.log(data);
    })
// le reject renvoi une erreur
    .catch(error => console.error(error));
});