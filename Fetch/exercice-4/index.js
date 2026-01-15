// declarer l'url api pour recuperer tous les utilisateurs
let url = "https://corsproxy.io/?" + encodeURIComponent(
    "https://maridoucet.sites.3wa.io/user-api/users"
);

document.addEventListener("DOMContentLoaded", function() {

    // appeler l'url avec fetch
    fetch(url)
        // transformer la reponse en tableau JS
        .then(response => response.json())
        .then(data => {
            // creer le tableau avec le thead
            // utiliser map pour generer automatiquement une ligne <tr> par utilisateur
            let tableHTML = `
                <table border="1">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Nom complet</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.map(user => `
                            <tr>
                                <td>${user.username}</td>
                                <td>${user.firstName} ${user.lastName}</td>
                                <td>${user.email}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;

            // ajouter le tableau dans le body du document
            document.body.innerHTML += tableHTML;
        })
        // si une erreur arrive
        .catch(error => console.error(error));
});
