// declarer l'url api
let url = "https://corsproxy.io/?" + encodeURIComponent(
    "https://maridoucet.sites.3wa.io/user-api/user/15"
);
document.addEventListener("DOMContentLoaded", function() {
// appeler l'url avec fetch
    fetch(url)
// transformer en obj (response.json equivaut à JSON.parse)
    .then(response => response.json())
// afficher dans la console 
    .then(data => console.log(data))
// le reject renvoi une erreur
    .catch(error => console.error(error));
});