# 🚀 Workflow voor Werken met Git en GitHub  

## 📥 1. Altijd Eerst de Nieuwste Code Ophalen  
### Voordat je aanpassingen maakt, zorg dat je de nieuwste versie van `main` hebt:  
-   git checkout main  
-   git pull origin main

## 🌿 2. Nieuwe Branch Aanmaken voor Je Wijzigingen
-   git checkout -b feature/naam-van-feature
-   git checkout -b feature/contact-form

## 🛠️ 3. Code Wijzigen en Opslaan
-   git status
-   git add .
-   git commit -m "Toegevoegd: contactformulier met validatie"

## 🔼 4. Push Je Branch naar GitHub
-   git push origin feature/naam-van-feature

## 🔀 5. Maak een Pull Request (PR)
### Ga naar je repository op GitHub.
-   Klik op "Compare & pull request".
### Controleer de wijzigingen en voeg een beschrijving toe.
-   Klik op "Create pull request".

## 🔄 6. Mergen in de main Branch
### Als alles goed werkt, kun je je branch mergen:
-   git checkout main  
-   git pull origin main  
-   git merge feature/naam-van-feature  
### Verwijder daarna de oude branch om het overzicht te houden:
-   git branch -d feature/naam-van-feature  
-   git push origin --delete feature/naam-van-feature  

