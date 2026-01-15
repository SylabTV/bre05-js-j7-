let user = {
    firstName : "Harry",
    lastName : "Bow",
    motto : "C'est beau la vie !"
};

document.addEventListener("DOMContentLoaded", function(){
let jsonuser = sessionStorage.getItem("user");
// verifier que la valeur user existe dans le sessionStorage
if (!jsonuser) {
    jsonuser = JSON.stringify(user);
    sessionStorage.setItem("user", jsonuser);
    // si elle existe la tgransformer en objet et l'afficher dans la console
} else {
    let obj = JSON.parse(jsonuser);
    console.log(obj);
}});