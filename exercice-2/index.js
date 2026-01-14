document.addEventListener("DOMContentLoaded", function () {
    let name = "Harry Bow";
    localStorage.setItem("name", name);
    sessionStorage.setItem("name", name);
});