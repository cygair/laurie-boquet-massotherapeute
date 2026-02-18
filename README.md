# Laurie Boquet — Massothérapeute à domicile

Site web vitrine pour **Laurie Boquet**, massothérapeute à domicile desservant Longueuil et les environs.

## Aperçu

Site statique d'une seule page (HTML/CSS/JS) hébergé sur GitHub Pages.

**URL :** https://laurieboquetmasso.com

## Contenu du site

- **Accueil** — Message d'accueil et appel à l'action
- **Services** — Massage suédois (technique Denevers), thérapeutique, prénatal et enfants
- **Tarifs** — 90 $ / 1 h · 120 $ / 1 h 30 · 150 $ / 2 h (+ frais de déplacement)
- **À propos** — Parcours de Laurie (reconversion depuis les laboratoires, formation à l'école À Fleur de Peau)
- **Contact** — Formulaire (Formspree), téléphone (514) 578-7804, zone de service

## Technologies

- HTML5 / CSS3 vanille (sans framework)
- Polices Google Fonts : Cormorant Garamond + Jost
- Formulaire de contact : [Formspree](https://formspree.io)
- Hébergement : GitHub Pages

## Structure des fichiers

```
├── index.html          # Page principale (tout-en-un)
├── CNAME               # Domaine personnalisé (laurieboquetmasso.com)
├── images/
│   ├── logo.jpg        # Logo / photo de profil (navbar + favicon)
│   ├── salle-massage.png   # Photo hero
│   └── photo-laurie.png    # Photo section À propos
└── README.md
```

## Configuration Formspree

Le formulaire de contact utilise Formspree. Pour le configurer :

1. Créer un compte sur [formspree.io](https://formspree.io)
2. Créer un nouveau formulaire et copier l'ID généré
3. Dans `index.html`, remplacer `VOTRE_ID_FORMSPREE` par votre ID dans l'URL :
   ```
   https://formspree.io/f/VOTRE_ID_FORMSPREE
   ```

## Déploiement

Le site est automatiquement déployé via GitHub Pages à chaque push sur la branche `main`.

## Domaine personnalisé

Le domaine `laurieboquetmasso.com` est enregistré chez **Namecheap** et pointé vers GitHub Pages.

**Fichier CNAME** : contient `laurieboquetmasso.com` (requis par GitHub Pages).

**Enregistrements DNS à configurer chez Namecheap (Advanced DNS) :**

| Type  | Host | Valeur                                          |
|-------|------|-------------------------------------------------|
| A     | @    | 185.199.108.153                                 |
| A     | @    | 185.199.109.153                                 |
| A     | @    | 185.199.110.153                                 |
| A     | @    | 185.199.111.153                                 |
| CNAME | www  | laurie-boquet-massotherapeute.github.io         |

## Contact

**Laurie Boquet** · Massothérapeute à domicile
Longueuil & environs
(514) 578-7804
Formation : École À Fleur de Peau, Montréal
