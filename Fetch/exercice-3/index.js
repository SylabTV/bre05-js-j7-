// declarer l'url api
let url = "https://corsproxy.io/?" + encodeURIComponent(
    "https://maridoucet.sites.3wa.io/user-api/create-user"
);
let formData = new FormData();
formData.append('username', "Sylab");
formData.append('firstName', "Oh puree");
formData.append('lastName', "el goat");
formData.append('email', "shirrabu@3wa.com");

let body = {
    method: 'POST',
    body: formData
};
document.addEventListener("DOMContentLoaded", function() {
// appeler l'url avec fetch
    fetch(url,body)
// transformer en obj (response.json equivaut à JSON.parse)
    .then(response => response.json())
// afficher dans la console 
    .then(data => console.log(data))
// le reject renvoi une erreur
    .catch(error => console.error(error));
});