<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Ajout d'un gestionnaire d'événements au formulaire
        document.querySelector('form').addEventListener('submit', function(event) {
            event.preventDefault(); // Empêcher la soumission par défaut du formulaire

            // Récupérer les valeurs des champs
            var firstName = document.getElementById('first-name').value.trim();
            var lastName = document.getElementById('last-name').value.trim();
            var message = document.getElementById('message').value.trim();

            // Vérifier si tous les champs sont remplis
            if (firstName === '' || lastName === '' || message === '') {
                // Afficher le message d'erreur
                document.getElementById('error-message').style.display = 'block';
                return; // Arrêter l'exécution du script si un champ est vide
            } else {
                // Cacher le message d'erreur s'il était affiché précédemment
                document.getElementById('error-message').style.display = 'none';
            }

            // Le reste du code pour ajouter le commentaire à la liste des commentaires...
        });
    });
</script>
