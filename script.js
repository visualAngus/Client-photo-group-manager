<!DOCTYPE html>
<html>
<head>
    <title>Ajouter au fichier JSON</title>
    <script>
        function ajouterAuFichierJSON(numero, nom, insta, tel) {
            const data = {
                numero: numero,
                nom: nom,
                insta: insta,
                tel: tel
            };

            const jsonData = JSON.stringify(data);

            // Utilisez l'API Fetch pour envoyer une requête POST au serveur
            fetch('/ajouter?numero=' + numero + '&nom=' + nom + '&insta=' + insta + '&tel=' + tel, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: jsonData
            })
            .then(response => response.text())
            .then(data => {
                console.log(data);
                alert('Données ajoutées au fichier JSON avec succès.');
            })
            .catch(error => {
                console.error(error);
                alert('Une erreur s\'est produite lors de l\'ajout des données au fichier JSON.');
            });
        }
    </script>
</head>
<body>
    <h1>Ajouter au fichier JSON</h1>
    <button onclick="ajouterAuFichierJSON(1, 'John Doe', 'john_doe', '123456789')">Ajouter</button>
</body>
</html>