# Documentation des contrats JSON

Le projet de site vitrine "Saucissoy" comporte une partie front-end _Angular_ qui réalise des appels HTTP (API _Rest_) à des services externes, et traite les réponses de manière asynchrone, dès leur réception. 
Le format JSON a été choisi pour les échanges entre front-end et back-end, principalement car c'est un format compact et couramment utilisé.

Actuellement, ces services sont "émulés" à l'aide d'un serveur de "mocking" (_mockserver_ est utilisé), qui représente l'interface de connexion de l'application aux différents "_endpoints_". Ces points d'entrée constituent chacun tout ou partie d'un "service", qui a un rôle lié à une fonctionnalité précise (par exemple, gérer **uniquement** les informations relatives aux produits).

## Détail des contrats
Comme expliqué précédemment, tous les services sont pour l'instant constitués de substituts (_mocks_) aux micro-services, normalement appelés par le back-end de l'application utilisant une API Rest. Les mocks sont accessibles depuis le répertoire _/backend_ à la racine du projet.

### Contrats du service _Agenda_ :
* horaires : contient les horaires d'ouverture et de fermeture habituels du magasin.
* fermetures : contient les dates (journées) de fermeture exceptionnelle du magasin.

### Contrat du service _Utilisateur_ :
* utilisateur : contient les données relatives à un compte utilisateur du site.
  * Ce contrat est également utilisé par le mock "utilisateurs",  
  qui est une liste des utilisateurs et leurs informations.

### Contrat du service _Produit_ :
* produits : contient les données relatives aux catégories de produits vendus en magasin.

#### Remarque :
J'ai tenté de rendre les données des contrats les plus atomiques possibles pour qu'elles soient réutilisables dans d'autres contextes. En revanche, dans les contrats comme "fermetures", la date de fermeture du magasin peut être contenue dans une seule chaîne de caractères (les données de la date ne sont pas utiles individuellement).