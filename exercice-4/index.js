let user = {
    firstName : "Harry",
    lastName : "Bow",
    motto : "C'est beau la vie !"
};

document.addEventListener("DOMContentLoaded", function(){
let jsonuser = sessionStorage.getItem("user");

if (jsonuser === null) {
    jsonuser = JSON.stringify(user);
    sessionStorage.setItem("user", jsonuser);
} else {
    let userobj = JSON.parse(jsonuser);
    console.log(userobj);
}});