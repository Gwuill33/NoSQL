# NoSQL

## Groupe : Guillaume B, Samy D, Maxance F, Alan B.

## Commande Api

### Ajouter un profile 

- Methode POST
- Création en JSON dans le Body de la requete des éléments "name" et "email"
```
http://localhost:3000/api/profiles
```

### Recuperer tous les profiles

- Methode GET

```
http://localhost:3000/api/profiles
```

### Recuperer un profile avec l'ID

- Methode GET
- L'id dans le paremètre "id"

```
http://localhost:3000/api/profiles:id
```

### Recuperer tous les profiles avec un filtre

- Methode GET
- Le nom de la propiété a filtrer (exemple: "name", "experience") dans le paremètre "filter"
- La valeur du filtre en format JSON dans le body de la requete ( exemple: {"name": "toto"}, {"experience":  { "titre": "NoSQL" } } )

```
http://localhost:3000/api/profiles:filter
```

### Modifier un profile avec l'ID

- Methode PUT
- id dans le paremètre "id"
- Création en JSON dans le Body de la requete des éléments "name" et "email" a modifier

```
http://localhost:3000/api/profiles:id
```

### Delete un profile avec l'ID

- Methode DELETE
- id dans le paremètre "id"

```
http://localhost:3000/api/profiles:id
```

### Ajouter une expérience a un utilisateur avec son ID

- Methode POST
- id dans le paremètre "id"
- Ajout de l'experience sous le format JSON, avec les éléments "titre", "entreprise", "dates", "description"

```
http://localhost:3000/api/profiles:id/experience
```

### Suprimer une expérience a un utilisateur avec son ID et l'ID de l'experience

- Methode DELETE
- id dans le paremètre "id"
- id de l'experience dans le paramètre "exp"

```
http://localhost:3000/api/profiles:id/experience/:exp
```

### Ajouter une compétence a un utilisateur avec son ID

- Methode POST
- id dans le paremètre "id"
- Ajout de l'experience sous le format JSON, avec les éléments "skills" ( exemple { "skills" : ["tata","toto"] } ou { "skills" : "toto" } )

```
http://localhost:3000/api/profiles:id/skills
```

### Supprimer une compétence a un utilisateur avec son ID et le nom de la compétence

- Methode DELETE
- id dans le paremètre "id"
- nom de la compétence dans le paramètre "skill"

```
http://localhost:3000/api/profiles:id/skills/:skill
```

### Ajouter ou Modifier les information d'un utilisateur avec son ID

- Methode PUT
- id dans le paremètre "id"
- Ajout des information sous le format JSON, avec les éléments "bio", "localisation", "siteWeb"

```
http://localhost:3000/api/profiles:id/information
```