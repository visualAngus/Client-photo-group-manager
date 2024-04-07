import requests

def telecharger_image(url, nom_fichier):
    # Télécharge l'image depuis l'URL
    reponse = requests.get(url)
    if reponse.status_code == 200:
        # Écriture de l'image dans un fichier
        with open(nom_fichier, 'wb') as f:
            f.write(reponse.content)
        print("L'image a été téléchargée avec succès.")
    else:
        print("Impossible de télécharger l'image.")


# Appel de la fonction pour télécharger l'image
telecharger_image('http://127.0.0.1:5500/test.png', "image_telechargee.jpg")
