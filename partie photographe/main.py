import requests

def ajouter_element(url, nouvel_element):
    try:
        # Effectuer une requête POST avec les données JSON à ajouter
        response = requests.post(url, json=nouvel_element)
        
        # Vérifier si la requête a été traitée avec succès
        if response.status_code == 200:
            print("Élément ajouté avec succès.")
        else:
            print(f"Erreur lors de l'ajout de l'élément. Code d'erreur : {response.status_code}")
    except Exception as e:
        print(f"Une erreur s'est produite : {str(e)}")

# Exemple d'utilisation
url_serveur = "https://gael.pupin.fr/bal/data.json"
nouvel_element = {"nom": "John", "age": 30}

ajouter_element(url_serveur, nouvel_element)
