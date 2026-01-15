// votre déclaration de fonction ici
function testage(age) {
        return new Promise((resolve, reject) => {
            // si l'age est supérieur ou égal à 18 resole
            if (age >= 18) {
                resolve("Autorisation accordée.");
                // sinon reject
            } else {
                reject("Autorisation refusée.");
            }
        });
    }
window.addEventListener("DOMContentLoaded", () => {
    // votre appel de fonction ici
    // test avec l'age 42
    testage(42)
        .then(Response => (console.log(Response)))
        .catch(Error => (console.log(Error)));
    // test avec l'age 16
    testage(16)
        .then(Response => (console.log(Response)))
        .catch(Error => (console.log(Error)));
});