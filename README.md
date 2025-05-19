
# ComptaMaroc - Guide de la Comptabilité Marocaine

Ce projet est un site web statique sur la comptabilité marocaine, conçu pour être déployé sur GitHub Pages ou tout service d'hébergement de sites statiques.

## Caractéristiques

- Plan comptable marocain détaillé
- Calendrier des échéances fiscales
- Actualités économiques et financières
- Guide de dépôt de bilan
- Ressources utiles pour les professionnels
- Mode sombre/clair
- Complètement responsive
- Fonctionne entièrement offline

## Déploiement sur GitHub Pages

Pour déployer ce site sur GitHub Pages :

1. Créez un nouveau repository sur GitHub ou utilisez un existant
2. Téléchargez tous les fichiers de ce projet dans votre repository
3. Dans les paramètres du repository, allez à la section "GitHub Pages"
4. Dans "Source", sélectionnez la branche principale (main ou master)
5. Cliquez sur "Save"
6. Votre site sera disponible à l'adresse `https://[votre-nom-utilisateur].github.io/[nom-du-repository]/`

## Structure des fichiers

- `index.html` - Page d'accueil
- `plan-comptable.html` - Plan comptable marocain
- `echeances.html` - Échéances fiscales
- `actualites.html` - Actualités économiques et financières
- `depot-bilan.html` - Guide de dépôt de bilan
- `ressources.html` - Ressources utiles
- `contact.html` - Page de contact
- `mentions-legales.html` - Mentions légales
- `politique-confidentialite.html` - Politique de confidentialité
- `css/style.css` - Feuille de style principale
- `js/main.js` - Script JavaScript principal
- `favicon.ico` - Favicon du site

## Personnalisation

### Modifier les couleurs

Les principales couleurs du site sont définies en variables CSS dans le fichier `css/style.css` :

```css
:root {
  --primary: #c1272d;
  --secondary: #006233;
  /* autres variables */
}
```

### Ajouter du contenu

Pour ajouter du contenu à une page existante, localisez le fichier HTML correspondant et modifiez-le selon vos besoins.

### Ajouter une nouvelle page

1. Créez un nouveau fichier HTML en vous basant sur un fichier existant
2. Mettez à jour la navigation dans chaque page pour inclure un lien vers la nouvelle page

## Fonctionnalités client-side

- Le formulaire de contact simule l'envoi (les données ne sont pas réellement envoyées)
- Le thème clair/sombre est sauvegardé localement dans le navigateur
- Les accordéons et onglets fonctionnent avec JavaScript vanilla

## Licence

Ce projet est disponible sous licence MIT. Vous êtes libre de l'utiliser, le modifier et le distribuer selon vos besoins.
