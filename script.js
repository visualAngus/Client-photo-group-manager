// Fonction pour écrire des données JSON dans un fichier
function ecrireDansFichierJSON(url, nouvellesDonnees, callback) {
    fetch(url, {
        method: 'PUT', // Utiliser la méthode PUT pour écrire des données
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nouvellesDonnees)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Données écrites avec succès dans le fichier JSON :", data);
        if (callback) {
            callback(data);
        }
    })
    .catch(error => console.error("Erreur lors de l'écriture dans le fichier JSON :", error));
}

// Chemin vers le fichier de base de données JSON
const cheminBaseDeDonnees = 'data.json';

// Données à écrire dans le fichier JSON
const nouvellesDonnees = {
    "nouvelleCle": "nouvelleValeur"
};

// Appeler la fonction pour écrire dans le fichier JSON
ecrireDansFichierJSON(cheminBaseDeDonnees, nouvellesDonnees, function() {
    console.log("Écriture réussie !");
});