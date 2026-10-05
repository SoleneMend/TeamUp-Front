# Team Up

## Sommaire | Summary

| Français | Anglais | 
|---|---|
| [Présentation du projet](#présentation-du-projet) | [Project Overview](#project-overview) | 
| [Stack technique](#stack-technique) | [Tech Stack](#tech-stack) | 
| [Installation du projet](#installation-du-projet) | [Project Installation](#project-installation) | 
| [Lancer le projet](#lancer-le-projet) | [Running the Project](#running-the-project) | 


<img src="./client/src/assets/images/HeroImgBg.svg" alt="sport" height=150px>

<!-- Version en Francais -->
<details open>
<summary> 🇫🇷 Version française</summary>

## Présentation du projet
Ce projet est un site web fullstack. Ce site web permet aux utilisateurs de faire des rencontres et de créer des connexions autour de la pratique sportive.

:warning: **Attention : ce dépôt contient uniquement la partie frontend du projet** <br>
 -> <a href="https://github.com/SoleneMend/TeamUp-back"> Voir le dépôt backend </a>

### Horaires
- Début du projet : `13/04/2026`<br>
- Fin du projet : `30/04/2026`

### Groupe

| Nom | GitHub | Nom | GitHub |
|--------|-------------|--------|-------------|
| Coline | [ColineRbm](https://github.com/ColineRbm) | Solène | [SoleneMend](https://github.com/SoleneMend) |
| Giorgi | [giobestava](https://github.com/giobestava) | Thomas | [SolPoney](https://github.com/SolPoney) |
| Leo | [TenTenTSX](https://github.com/TentenTSX) | Yoan | [YoanCuervo](https://github.com/YoanCuervo) |

## Stack technique

![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)


## Installation du Projet

:warning: **Attention : le projet est composé de deux repositories (frontend / backend)**
### Frontend
```
 --> Cloner le dépôt 
 > Avec clé SSH
git clone git@github.com:SoleneMend/TeamUp-Front.git

 > Sans clé SSH
git clone https://github.com/SoleneMend/TeamUp-Front.git

 --> Installer les dépendances
cd TeamUp-Front
npm install
```

### Backend
```
 --> Cloner le dépôt 
 > avec clé SSH
git clone git@github.com:SoleneMend/TeamUp-back.git

 > sans clé SSH
git clone https://github.com/SoleneMend/TeamUp-back.git

 --> Installer les dépendances
cd TeamUp-back
npm install
```

### Base de données
 - Ouvrir le fichier `database.sql`
 - Copier son contenu
 - L’exécuter dans MySQL :
```bash
mysql -u DB_USER -p
```
ou via MySQL Workbench.

### :warning: Important : 
 - Renommer le fichier `.env.sample` en `.env`
 - Modifier : `DB_USER` et `DB_PASSWORD` avec vos informations


## Lancer le projet
:warning: Il est nécessaire de lancer le frontend et le backend

### Frontend
``` bash
npm run dev
```

### Backend
``` bash
npm run dev
```
<br><br>
</details>

<!-- English version -->
<details open>
<summary> 🇬🇧 English version</summary>

## Project Overview

This project is a full-stack web application that allows users to meet new people and build connections around sports activities.

:warning: **Warning: this repository only contains the frontend part of the project** <br> 
-> <a href="https://github.com/SoleneMend/TeamUp-back">View the backend repository</a>

### Project Schedule

- Project start date: `13/04/2026` <br>
- Project end date: `30/04/2026`

## Team

| Name | GitHub | Name | GitHub |
|--------|-------------|--------|-------------|
| Coline | [ColineRbm](https://github.com/ColineRbm) | Solène | [SoleneMend](https://github.com/SoleneMend) |
| Giorgi | [giobestava](https://github.com/giobestava) | Thomas | [SolPoney](https://github.com/SolPoney) |
| Leo | [TenTenTSX](https://github.com/TentenTSX) | Yoan | [YoanCuervo](https://github.com/YoanCuervo) |

## Tech Stack

![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)


## Project Installation

:warning: **Warning: the project is divided into two repositories (frontend / backend).**

### Frontend

```
 --> Clone the repository
 > Using SSH
git clone git@github.com:SoleneMend/TeamUp-Front.git

 > Without SSH
git clone https://github.com/SoleneMend/TeamUp-Front.git

 --> Install dependencies
cd TeamUp-Front
npm install
```

### Backend

```
 --> Clone the repository
 > Using SSH
git clone git@github.com:SoleneMend/TeamUp-back.git

 > Without SSH
git clone https://github.com/SoleneMend/TeamUp-back.git

 --> Install dependencies
cd TeamUp-back
npm install
```

### Database

 - Open the `database.sql` file
 - Copy its contents
 - Run it in MySQL :
```bash
mysql -u DB_USER -p
```
Or use MySQL Workbench.

### :warning: Important

 - Rename the `.env.sample` file to `.env`
 - Update `DB_USER` and `DB_PASSWORD` with your own database credentials

## Running the Project
:warning: The frontend and backend must both be running.

### Frontend
``` bash
npm run dev
```

### Backend
``` bash
npm run dev
```

</details>

<img src="./client/public/poussin_foot.png" alt="chicken" width=150px>
