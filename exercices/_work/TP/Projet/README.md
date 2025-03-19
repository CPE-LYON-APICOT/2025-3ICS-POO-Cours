---
title: "Projet"
produce:
    html: 
        remove_answers: false
---

# Projet POO 

Ce projet sera votre dernier rendu de TP. Il est à réaliser en binôme.
Il est l'occasion d'évaluer vos compétences en programmation orientée objet et aussi de vous faire acquérir des compétences précieuses en entreprise.

## Livrables

### Repo Git    

Votre projet doit être hébergé sur GitHub en clonant le devoir à partir de l'URL GitHub Classroom.

GitHub Classroom vous a créé un repo avec une PR ouverte "Feedback". 
Dès que vous effectuez un commit (et un push) sur votre repo, les détails s'ajouteront à la PR.
En outre, la commande `gradle test` est exécutée et les résultats sont affichés dans la PR.	

> Cette fois-ci, vos tests doivent fonctionner une fois le projet rendu, vous avez eu l'occasion de vous entraîner sur les TP précédents.

Enfin, vous devrez produire plusieurs fichiers Markdown, que vous placerez dans le dossier `docs` de votre repo. 
N'oubliez pas d'utiliser PlantUML si besoin.

[Liste des diagrammes supportés](https://plantuml.com/fr/sitemap-language-specification)

### Projet exécutable

Votre projet doit être exécutable. Pour cela, créez bien le projet comme vous avez eu l'occasion de le faire dans les TP précédents.
Je vous demande d'utiliser Gradle car la commande `gradle run` permettra de lancer votre programme lors de la correction. 
La commande `gradle test` permettra de lancer les tests.

> Assurez-vous bien que tout fonctionne dès le début, si vous intégrez Gradle plus tard vous risquez de perdre beaucoup de temps.

### Documentations

#### Pitch du projet

Vous devez rédiger un pitch de votre projet au début de celui-ci.
Pour la mise en situation professionnelle, imaginez que vous êtes en train de présenter votre projet à un client potentiel.
Votre client n'est pas un informaticien, il ne sait pas ce qu'est un objet, une classe, une méthode, encore moins un Design Pattern.
Par contre, il comprend mieux les diagrammes et les explications simples.

> Exemple : 
>
> Nous allons développer un jeu qui s'inspire du célèbre jeu "Snake". 
>
> Le but du jeu original est de manger des pommes pour faire grandir un serpent. Si le serpent se mord la queue ou touche les bords de l'écran, la partie est perdue.
>
> Notre jeu sera un peu différent, nous allons ajouter les fonctionnalités suivantes :
>
> - Des obstacles apparaîtront *aléatoirement* (ou non) sur l'écran.
> - Ces obstacles pourront être permanents ou temporaires.
> - Les obstacles appliquent un malus. Dans un premier temps, ils pourraient juste faire perdre la partie, mais on pourrait envisager dans une seconde itération que le serpent perde des points de vie ou que sa vitesse augmente.
> - Il y aura aussi des bonus qui apparaîtront à l'écran et qui sont l'inverse des obstacles.
> - Les bonus/malus permanents ou temporaires seront clairement identifiables.
> - Si le jeu cartonne, on pourrait envisager un pack de skins saisonnier pour booster les ventes :
>    - Par exemple, un skin de Noël : les barrières deviennent des sapins, les pommes des papillotes, le serpent est un renne qui tire des wagons de cadeaux.
> - Les modes de jeu sont très divers. L'équipe créative a déjà imaginé plusieurs modes de jeu. Il est prévu d'en livrer 2-3 puis, dans une seconde itération, d'en ajouter d'autres voire de proposer un mode sur-mesure.
>    - Par exemple, est-ce que le serpent peut se téléporter de l'autre côté de l'écran ? Est-ce qu'un autre serpent lui barre la route ? Les objets/obstacles apparaissent-ils en fonction du temps, du nombre de points ou aléatoirement ? La difficulté est-elle linéaire ou exponentielle ?

Vous voyez dans cet exemple que l'on s'adresse à des décideurs. On ne parle pas de code, on parle de fonctionnalités, de valeur ajoutée, de potentiel.
En écrivant votre pitch, vous allez vous forcer à prévoir les opportunités et les défis de votre projet et vous devriez déjà avoir en tête les DP à appliquer. 
> Par exemple, l'histoire des skins est un DP Décorateur, les modes de jeu sont un DP Stratégie, le mode créatif un DP Builder + Stratégie, les bonus/malus sont un DP Observateur, etc.

Nous nous mettrons d'accord sur le pitch avant de commencer le projet. 
Ce n'est pas grave s'il est trop ambitieux, vous n'arriverez pas à tout faire, mais vous verrez que cela aura un intérêt pédagogique.

> Si vous voulez que votre pitch soit validé, il doit être rédigé en Markdown et placé dans le dossier `docs` de votre repo.

> **L'intérêt de ce livrable est de développer votre fibre relation client, soignez donc la présentation de celui-ci.**

#### Conception technique 

Suite à votre pitch et à la réunion de présentation, je vais vous aider en vous donnant des pistes pour la réalisation de votre projet. 
Globalement, je vais vous dire "Rajoute cette feature comme ça tu pourras utiliser tel DP". 
Suite à cela, vous devrez rédiger une annexe technique qui explique comment vous allez réaliser votre projet. 
Celle-ci doit être rédigée en Markdown et placée dans le dossier `docs` de votre repo.

> - Vous devrez réaliser à minima 4 DP. Vous précisez quelle feature le DP va permettre de réaliser.
> - Vous devez inclure 2 diagrammes UML (séquence, classe, cas d'utilisation, etc.).

> **Contrairement au pitch, l'annexe technique est un document technique. C'est comme si vous étiez lead-dev / architecte du projet. Une conception technique est un travail complexe qui n'est pas à votre niveau de formation, c'est pourquoi je vous aiderai et on n'en fera qu'une partie.**

####  **[⚠️À rendre en fin de projet]** Fiche rendu projet

Vous avez vendu un projet à un client, vous avez réalisé un projet, il est temps de faire le bilan.
Il est rare que tout se soit déroulé sans accroc et donc dans les temps impartis.

Vous représentez le projet au client (vous pouvez reprendre le pitch), vous présentez habilement ce qui a fonctionné, voire les idées que vous avez eues en cours de développement avec des captures d'écran (vous pouvez utiliser ScreenToGif ou autre pour générer des captures d'écran animées).

Si vous n'avez pas implémenté une feature, expliquez pourquoi et soyez malin.
> Exemple : 
> Finalement, la mise en place d'obstacles et aliments temporaires n'a pas été réalisée. En effet, lors de la mise en place des fruits/bonbons, il y avait des effets qui n'étaient ni positifs ni négatifs et nous avons trouvé que c'était une bonne idée. Nous ne voulions pas introduire un troisième obstacle et un troisième élément comestible. Le jeu aurait été trop complexe et nous n'aurions pas pu mettre en place le pack de skins saisonnier.
>
> |Visibilité des éléments|Permanent|Temporaire|
> |---|---|---|
> |Bonus|Fruit|Bonbon|
> |Malus|Obstacle|Poison|
> |Neutre|Légume|? (Coffre)|
> <figure>Liste des éléments collisionnables envisagés, celle-ci aurait été trop complexe pour le joueur</figure>
>
> |Visibilité des éléments|Permanent|
> |---|---|
> |Bonus|Fruit|
> |Malus|Obstacle|
> |Neutre|Coffre|
> <figure>La liste est simplifiée. Il est plus simple pour l'équipe graphique de sortir des packs de skins avec seulement 3 éléments. De plus, le coffre renforce cet aspect surprise / aléatoire.</figure>

Voyez que vous avez grandement simplifié votre code. Il est moins technique que je l'aurais voulu, mais vous avez apporté de la valeur ajoutée pour le client avec les skins. 

> N'abusez pas de ces excuses pour la notation… vous devrez toujours implémenter le même nombre de DP minimums exigés. En revanche, il est beaucoup plus simple de faire le DP Décorateur que le DP Builder/Strategy.
>
> À l'inverse, si vous aviez passé énormément de temps sur un DP Builder/Strategy, vous pourriez expliquer que votre jeu est très prometteur et il sera aisé de rajouter des modes de jeu, exclusifs à un Season Pass.

####  **[⚠️À rendre en fin de projet]** Document de réversibilité technique

Vous avez réussi à rassurer le client sur le contenu de votre projet, même s'il manquait des features. Maintenant que le jeu est sorti, la maintenance est confiée à une autre équipe.

> En entreprise, lorsqu'un marché se termine, il est fréquent que le client veuille changer de prestataire. La réversibilité technique est une prestation due au client qui vous a payé pour ça, même s'il est triste que le projet soit fini.

Cette fois-ci, vous ne devez pas enjoliver la réalité. Vous devez être honnête sur les points faibles de votre projet, les points forts, les points de vigilance.

> Exemple :
> - La grille doit être parfaitement carrée. Si elle ne l'est pas, un bug se produit. Nous n'avons pas eu le temps de l'identifier.
> - Plus le nombre d'éléments à l'écran augmente, plus le jeu saccade. L'important est que le serpent se déplace de manière fluide, peu importe si les bonbons apparaissent avec un léger décalage. Pour cela, il y aurait deux solutions : 
>   - Avoir deux boucles de rendu, une pour le serpent uniquement et une pour les éléments à l'écran. Cela permettrait de ne pas ralentir le serpent.
>   - Migrer le projet sur un moteur de jeu qui gère mieux les performances.
>
>   Le changement de moteur de jeu est évidemment plus coûteux, mais s'il faut implémenter un mode multijoueur, il faudra de toute façon le faire. Nous recommandons donc la première solution pour le moment.
> - Les skins sont simplement des images. Il est possible de les changer facilement. Il suffit de les placer dans le dossier `skins` et de les nommer de manière cohérente.
> - Une tentative de sauvegarde des modes de jeu a été entreprise. Les stratégies sont stockées dans le fichier `game_modes.json`. Le code a été commenté suite à un bug.
> - Le mappage des touches est fait en fonction de la langue du système. Cela fonctionne donc pour zqsd ou wasd. En outre, les manettes de jeu sont reconnues, mais le mappage des touches n'est pas configurable.
>    ```plantuml
>    @startuml
>    enum KeyEvents {
>        UP 
>        DOWN
>        LEFT
>        RIGHT
>        PAUSE
>    }
>    interface KeyMapping {}
>    KeyMapping <|-- AbstractKeyboardMapping
>    KeyMapping <|-- AbstractGamepadMapping
>    AbstractGamepadMapping <|-- PS5Mapping
>    AbstractGamepadMapping <|-- XboxMapping
>    AbstractKeyboardMapping <|-- QwertyMapping
>    AbstractKeyboardMapping <|-- AzertyMapping
>    @enduml
>    ``` 

## Cycles de développement

Une fois le projet validé, vous commencez l'implémentation. 
 
On essaie d'avoir une approche Agile, c'est-à-dire que l'on va découper le projet en plusieurs itérations de manière à avoir toujours quelque chose de fonctionnel. N'hésitez pas à utiliser diverses branches pour cela.

Aussi, à chaque itération, faites une démo au client (moi). Le client est pénible (comme en entreprise) et change parfois d'avis. Dans les faits, je vous demanderai de changer des choses que si vous l'avez fait "au plus simple" (ou si je détecte que c'est du code IA que vous ne comprenez pas). 
Les modifications vous forceront à refactoriser votre code. C'est une bonne chose. Vous apprendrez beaucoup et, aussi, vous verrez que vous aurez plus de fonctionnalités.

> **Code généré par une IA :**
>
> Il n'est pas interdit d'utiliser ces outils. En revanche, si vous avez le sentiment que vous n'auriez jamais pensé à ça, demandez-moi, quitte à ce que je fasse le code avec vous ou que je vous donne un prompt plus adapté avec l'explication qui vient avec.
>
> Plus je passe de temps à débugger les 100 lignes que vous avez générées sans comprendre, moins je passe de temps à vous aider sur les 10 lignes que vous auriez pu écrire pour vous débloquer. (Et forcément, je risque de me rendre compte que vous ne comprenez pas ce que vous avez fait et je vais vous demander de changer la feature et reprendre de zéro.)

## Évaluation

**Les critères d'évaluation sont indicatifs, ils peuvent être modifiés à ma discrétion.**

|Livrable|Importance|
|---|---|
|Pitch|2|
|Conception technique|3|
|Implémentation|7|
|Fiche rendu projet|4|
|Document de réversibilité technique|4|
|Bonus (ou malus)|5 (ou -5)|

> Notez qu'une implémentation parfaite ne suffit pas.

## Exigences

- Il y aura au moins 4 DP.
- Vous devez utiliser Gradle pour la gestion de votre projet.
- Vous devez utiliser Git pour la gestion de votre code.
- Vous devez utiliser GitHub Classroom pour la remise de votre projet.
- Vous devez utiliser Markdown pour la rédaction de vos documents.
- Vous proposez une interface graphique pour votre projet (console si justifié).
- Vous mettez en application chaque élément du cours au moins une fois.

### Consignes 

1. Enrôlez-vous sur GitHub Classroom avec le lien suivant : https://classroom.github.com/a/mllsoaOR 
2. Une fois le repo cloné, vous n'avez pas à coder dès le départ. Commencez par rédiger votre pitch. 
3. Interpellez-moi pour que l'on valide ensemble. Pensez à commit de manière à ce que le pitch soit dans la PR. Si je n'ai pas le temps de voir tout le monde, je mettrai des commentaires dans la PR.
4. Ensemble, nous créerons des tickets pour les features à implémenter. Vous pouvez en créer d'autres et vous les assigner dans le binôme. 
5. Initiez votre conception technique et faites-moi valider.
6. Une fois validé, vous initialisez votre projet Gradle, soit avec Gradle init, ou avec un outil de votre choix, pourvu que `gradle test` fonctionne.
7. Itérez, faites-moi des démos, n'hésitez pas à me demander de l'aide.

Vous êtes libre sur votre projet, faites-vous plaisir !
Je vous demande juste de "bien" coder. Si vous faites du mauvais code, je vais être obligé de changer vos features pour que vous recommenciez. Cela va vous faire perdre du temps et vous éloigner de ce que vous vouliez faire.

