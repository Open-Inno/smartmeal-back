# smartmeal-back

API locale pour la solution SmartMeal, déployée sur Raspberry Pi : gestion de l’inventaire du frigo, réception des scans, génération de prompts IA pour recommander des recettes adaptées.

Stack : Node.js, Express, MariaDB.

## Installation rapide
```cmd
npm install
```

## Dev auto-reload (recommandé)
```cmd
npm run dev
```

## Production
```cmd
npm start
```

## Structure
```cmd
src/
├── index.js         # Point d’entrée
├── routes/          # Définition des routes
├── controllers/     # Logique des routes
├── models/          # Schemas & modèles DB
├── services/        # Logique métier
└── config/          # Connexion DB et configuration
```
