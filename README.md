# Assemblées du Bénin

> Site web officiel des assemblées chrétiennes locales du Bénin — horaires, contacts WhatsApp, localisation et assistant IA intégré.

---

## Aperçu

Ce site présente les **19 assemblées** du réseau chrétien réparties dans les départements de l'**Ouémé**, du **Littoral** et de l'**Atlantique** au Bénin. Il permet à toute personne de trouver rapidement une assemblée proche, consulter ses horaires, contacter les responsables via WhatsApp, et poser des questions à un assistant conversationnel.

---

## Fonctionnalités

| Fonctionnalité | Description |
|---|---|
| 📍 Annuaire des assemblées | 19 fiches avec horaires, contacts WhatsApp et liens Google Maps |
| 🌙 Mode clair / sombre | Thème persisté via `localStorage` |
| 🤖 Assistant IA local | Chatbot basé sur des règles, sans API externe |
| 📬 Formulaire de contact | Ouverture directe du client mail avec les informations pré-remplies |
| 📱 Menu hamburger | Navigation mobile optimisée |
| 🖼️ Slideshow hero | 4 images en rotation automatique toutes les 5 secondes |
| ✨ Animations scroll | Éléments animés à l'entrée dans le viewport |
| 📐 100 % responsive | Mobile, tablette et desktop |

---

## Structure du projet

```
assemblees-benin/
├── index.html          ← Page principale (structure HTML uniquement)
├── css/
│   └── styles.css      ← Tous les styles (variables, dark/light mode, responsive, animations)
├── js/
│   ├── data.js         ← Données des 19 assemblées (horaires, contacts, maps)
│   └── main.js         ← Logique applicative (cards, IA, formulaire, menu, slideshow)
├── .gitignore
└── README.md
```

---

## Démarrage rapide

```bash
# 1. Cloner le dépôt
git clone https://github.com/<utilisateur>/assemblees-benin.git
cd assemblees-benin

# 2. Ouvrir directement dans le navigateur
open index.html

# — OU — lancer un serveur local
npx serve .
# ou
python3 -m http.server 8080
```

Puis ouvrir [http://localhost:8080](http://localhost:8080).

---

## Publier sur GitHub Pages

```bash
git remote add origin https://github.com/<utilisateur>/assemblees-benin.git
git branch -M main
git push -u origin main
```

Ensuite dans les **Settings** du dépôt → **Pages** → sélectionner la branche `main` → le site sera accessible à `https://<utilisateur>.github.io/assemblees-benin/`.

---

## Mettre à jour les données

Toutes les données des assemblées sont centralisées dans **`js/data.js`**.

### Schéma d'une assemblée

```js
{
  nom: "Assemblée de Godomey",      // Nom affiché
  departement: "Atlantique",         // Département
  commune: "Abomey-Calavi",          // Commune
  img: "https://...",                // URL de l'image (Unsplash ou autre)
  horaires: [
    { j: "Dimanche", h: "09h00 – 11h00 · Culte" },
    { j: "Jeudi",    h: "19h30 – 21h00 · Étude biblique" },
  ],
  map: "https://maps.app.goo.gl/...", // Lien Google Maps (ou null)
  contacts: [
    { nom: "Frère Abraham", tel: "+22891540859" }
  ]
}
```

### Ajouter une assemblée

1. Ouvrir `js/data.js`
2. Ajouter un nouvel objet dans le tableau `ASSEMBLEES` en suivant le schéma ci-dessus
3. Ajouter l'option correspondante dans le `<select>` du formulaire dans `index.html`

---

## Technologies utilisées

- **HTML5** — sémantique, sans framework
- **CSS3** — variables CSS, Grid, Flexbox, animations `@keyframes`
- **JavaScript vanilla** — ES6+, sans bibliothèque externe
- **Google Fonts** — Police Roboto
- **Unsplash** — Images libres de droits

---

## Navigateurs supportés

| Navigateur | Support |
|---|---|
| Chrome / Edge 90+ | ✅ |
| Firefox 88+ | ✅ |
| Safari 14+ | ✅ |
| Opera 76+ | ✅ |

---

## Contribuer

1. Forker le dépôt
2. Créer une branche : `git checkout -b feature/ma-fonctionnalite`
3. Commiter les changements : `git commit -m "feat: ma fonctionnalité"`
4. Pousser : `git push origin feature/ma-fonctionnalite`
5. Ouvrir une **Pull Request**

---

## Licence

Ce projet est à usage interne du réseau des Assemblées du Bénin.  
Tous droits réservés © 2026.

---

## Développeurs

Développé avec ❤️ par **ATODJINOU Madoché** & **AKOWE Céphas**  
Contact : [madocheatodjinou@gmail.com](mailto:madocheatodjinou@gmail.com)
