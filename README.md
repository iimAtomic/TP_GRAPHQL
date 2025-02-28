# Ce projet démontre comment créer une application en utilisant React, Apollo Client, Apollo Server et GraphQL.  
Le projet est une application de publication d'article comprend un **CRUD simple (Créer, Lire, Mettre à jour, Supprimer)** où vous pouvez :

1. Créer un nouvel utilisateur.
2. Créer et consulter une liste d'articles.
3. Aimer et commenter les articles consultés.

## Fonctionnalités

- React pour la construction du frontend.
- Apollo Client pour interagir avec l'API GraphQL.
- Apollo Server pour construire le backend avec GraphQL.
- Modèle d'utilisateur simple avec les champs `id`, `nom`, `email`, `articles`, `commentaires` et `likes`.

## Prérequis

- Node.js (v14 ou supérieur)
- npm
- Vite

## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale.

### 1. Clonez ce repository
git clone https://github.com/iimAtomic/TP_GRAPHQL.git 


2. Configuration du Backend
# Allez dans le répertoire du backend :
cd backend
# Installez les dépendances nécessaires :
npm install
# Démarrez le serveur :
npm run dev
Cela fera fonctionner Apollo Server sur http://localhost:4000.

3. Configuration du Frontend
# Allez dans le répertoire du frontend :
cd frontend
# Installez les dépendances nécessaires :
npm install
# Démarrez le serveur de développement React :
npm run dev
Cela fera fonctionner l'application React sur http://localhost:5173.



# Exemple de compte deja existant 
  username = user6@gmail.com
  passeword = essaie

Comment utiliser
1. Voir tous les articles
Une fois l'application en cours d'exécution, le tableau de bord affichera une liste d'articles avec la possibilité d'interagir avec eux (aimer et/ou commenter).

2. Créer un nouvel utilisateur
Utilisez le formulaire Créer un Nouvel Utilisateur pour ajouter un nouvel utilisateur. Vous devrez fournir un email et un mot de passe.

# Stack Technique
Frontend : React, Apollo Client, Vite
Backend : Node.js, Apollo Server, GraphQL
Base de données : mongodb

# Membres du groupe de leurs Githubs des membres :
Lux Vegba: https://github.com/iimAtomic
Stevie Mache Voutsa: https://github.com/VoutsaStevie
Aissatou Salla : https://github.com/aissatou00