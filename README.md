# Ad Connect - Platform Ad
In sprint 2 hebben we de opdracht gekregen om een website te ontwikkelen voor een opdrachtgever, samen met 2 teams van 1e jaars FDND-studenten en 1 team 2e jaars FDND-studenten. Tijdens deze derde print heb ik mij gericht op het verder ontwerpen en ontwikkelen van de Home-pagina, dit keer met meer doelgroepen. Mijn focus lag daarbij op toegankelijkheid voor verschillende gebruikers van de website, waaronder mensen die screenreaders gebruiken voor het navigeren van de website of mensen die via een toetsenbord navigeren. Hierbij heb ik verschillende technieken gebruikt, zoals het verbeteren van de HTML-structuur, het toevoegen van alt-teksten, het controleren van het contrast in de kleuren op de website en een screenreader de website laten navigeren.

Voor het onderzoeken of de website toegankelijk is, heb ik de checklist van [de A11y Project](https://www.a11yproject.com/checklist/) gevolgt en een [WCAG Audit](https://github.com/fdnd-task/wcag-audit/blob/main/docs/INSTRUCTIONS.md) gedaan.
De WCAG Audit heb ik in een issue verwerkt. [Link naar issue](https://github.com/SieuwkeSheta/all-human-accessible-website/issues/23)

#### Wie is Ad Connect?
Het landelijk Overlegplatform Associate degrees (hierna: Platform Ad) is opgericht in 2018. 
De website van het Platform Ad (onder de url: www.deassociatedegree.nl) is een 
toegangspoort voor informatie over Ad-onderwijs. De website is opgericht om de 
leerwaarde en documentatie van Ad-opleidingen te versterken. Het Platform Ad doet dit in 
samenwerking met de ‘Vereniging Hogescholen’. De website is het online platform van het 
‘Overlegplatform Associate Degrees’ en ondersteunt o.a. de hogescholen die Ad-opleidingen 
aanbieden en de Landelijke Ad-overleggen (LadO’s).  

#### Vraag van de opdrachtgever
In de loop der jaren nam de hoeveelheid tekst en documenten toe, waardoor de 
overzichtelijkheid en vindbaarheid van de informatie afnamen.


<ins>Opdracht:</ins> Helpen bij het realiseren van een overzichtelijke en gebruiksvriendelijke website die inspeelt 
op de behoefte van verschillende doelgroepen waar het Platform Ad zich op richt. Ook moet de website eenvoudig te onderhouden zijn door de editor(s) en webmaster.

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
### Het ontwerp
De opdrachtgever heeft aangegeven meer doelgroepen te willen hebben, dan alleen 'Studenten' en 'Professionals':
- Oriënteren op een Ad-opleiding
- Studeren in een Ad-opleiding
- Werken met Ad-Talent
- Ontwikkelen van Ad-onderwijs

Ik heb eerst een nieuwe sitemap gemaakt voor de navigatie en daarna het huidige ontwerp aangepast. Ook heb ik de kleurstelling en de styling veranderd van geel en blauw naar paars en groen.

De website is responsive en is Mobile first ontworpen en gemaakt.

<img width="1000" alt="all-devices-black(2)" src="https://github.com/user-attachments/assets/d8ff2d07-2684-4527-82ac-ad2e932bf438" />

*Mockup van home-pagina*

Link naar de website: https://sieuwkesheta.github.io/all-human-accessible-website/

### Figma
Ik ben begonnen op figma om een nieuwe sitemap te maken voor de navigatie. [Link naar figma ontwerp 'sitemap'](https://www.figma.com/board/NyfgmX7ImpJCFReXESQOks/Sitemap-Ad-Connect?node-id=7-1819&t=DQkZsbA8wLc0QE3t-1)

<img width="500" alt="Sitemap Ad Connect" src="https://github.com/user-attachments/assets/2b162e06-0959-4d7e-8184-7ca0ea91cea9" />

Daarna heb ik meerdere ontwerpen gemaakt voor de Home-pagina voor verschillende apparaten met een andere kleurstelling. [Link naar figma ontwerp 'Home-pagina'](https://www.figma.com/design/tdj2NhgBJGi41nMITtIOXQ/Moodboard-AD-Connect-16-10?node-id=0-1&p=f&t=DQkZsbA8wLc0QE3t-0)

<img width="200" alt="image" src="https://github.com/user-attachments/assets/8231a6a9-0846-4094-ba52-41186629b760" />
<img width="400" alt="image" src="https://github.com/user-attachments/assets/6dbcdc21-1200-4fb1-99e0-13da026f5b77" />

### Belangrijke features:
- Het hamburgermenu wat verdwijnd als het scherm groter wordt:
<img width="200" alt="image" src="https://github.com/user-attachments/assets/6970c42b-7591-4188-b623-784892fb256f" />
<img width="300" alt="image" src="https://github.com/user-attachments/assets/3542377a-ec3d-4065-934b-696c73e478a9" />

- Een knop naar het begin van de pagina:
<img width="50" alt="image" src="https://github.com/user-attachments/assets/84f600e1-3198-4dd0-b911-809363d252dc" />

- De website is responsive op meerdere apparaten.


## Kenmerken
Ik heb gebruikt gemaakt van HTML, CSS en JS.

### HTML Structuur
De HTML structuur van de pagina is semantisch opgebouwd, in het engels. De pagina bevat een header met daarin een navigatie `<nav>`, een main voor de inhoud met meerdere secties `<section>` en articles `<article>`, en een footer.

Ik heb gebruik gemaakt van een `<details>` element om een drop-down menu te maken voor de verschillende doelgroepen.

```HTML
                    <details class="drop-down">
                        <summary>Voor wie</summary>
 
                            <details>
                                <summary>Oriënteren op een Ad-opleiding</summary>
                                <a href="#">&#11162; Wat is een Associate degree?</a>
                                <a href="#">&#11162; Opleidingen en Studierichtingen</a>
                                <a href="#">&#11162; Toelatingseisen</a>
                                <a href="#">&#11162; Ervaringen & Veelgestelde vragen</a>
                            </details>


                            <details>
                                <summary>Studeren in een Ad-opleiding</summary>
                                <a href="#">&#11162; Stage & Werkplekken</a>
                                <a href="#">&#11162; Studenten & docenten informatie</a>
                                <a href="#">&#11162; Alumni & Doorstroom</a>
                            </details>


                            <details>
                                <summary>Werken met Ad-talent</summary>
                                <a href="#">&#11162; Wat is een Associate degree-professional?</a>
                                <a href="#">&#11162; Werkgeverstips</a>
                            </details>


                            <details>
                                <summary>Ontwikkelen van Ad-onderwijs</summary>
                                <a href="#">&#11162; Beleidsdocumenten</a>
                                <a href="#">&#11162; Onderzoek & Trends</a>
                                <a href="#">&#11162; Landelijke Ad-Overleggen & Vergaderingen</a>
                            </details>


                    </details> 
```
Ik heb gebruik gemaakt `<articles>` voor de nieuws-elementen.

```HTML
                    <article>
                        <img src="assets/Paulo-Lopes-spreker-ad-dag1.jpg" alt="Foto Spreker Paulo Lopes op Ad dag" width="200">
                        <h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 640 640">
                                <path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM480 496C488.8 496 496 488.8 496 480L496 416L408 416L408 496L480 496zM496 368L496 288L408 288L408 368L496 368zM360 368L360 288L280 288L280 368L360 368zM232 368L232 288L144 288L144 368L232 368zM144 416L144 480C144 488.8 151.2 496 160 496L232 496L232 416L144 416zM280 416L280 496L360 496L360 416L280 416zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176z"/>
                            </svg>
                            Save the date
                        </h3>
                        <p>Landelijke Ad-dag 17 april 2026 <br> Locatie: Hanze - Groningen</p>
                        <a href="#">Lees meer</a>
                    </article>
```
### Belangrijke aspecten CSS
De website is *mobile first* gemaakt. De media queries zijn genest in de elementen, waardoor de code overzichtelijker is en de responsiviteit per element makkelijk aan te passen is. 

```CSS
.target-groups {
    margin: 5em 1em;
    padding: 1em;
    background-color: var(--hoofd-kleur);
    border-radius: 10px;

    @media (min-width: 600px) {
        margin: 5em 3em;
    }

    @media (min-width: 750px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 900px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
}
```

### Belangrijke aspecten JS
JS is gebruikt om het hamburgermenu interactief te maken en de achtergrond van de pagina wazig te maken als het hamburgermenu open is.

```JS
const hamMenu = document.querySelector(".ham-menu")
const hamMenuButton = document.querySelector(".ham-menu-button")
const Blur = document.querySelector(".blur")


hamMenuButton.addEventListener("click", toggleHamMenu)
Blur.addEventListener("click", toggleHamMenu)




function toggleHamMenu() {
    hamMenuButton.classList.toggle("is-open")
    hamMenu.classList.toggle("is-open")
    Blur.classList.toggle("is-open")
}
```

## Bronnen
- [Checklist van de A11y Project](https://www.a11yproject.com/checklist/)
- [WCAG Audit](https://github.com/fdnd-task/wcag-audit/blob/main/docs/INSTRUCTIONS.md)
- [Handmatige test op toegankelijkheid via deze stappen](https://web.dev/articles/how-to-review)
- [NVDA screenreader](https://www.nvaccess.org/download/)
- [Kleurcontrast checker](https://www.tpgi.com/color-contrast-checker/)


## Licentie
This project is licensed under the terms of the [MIT license](./LICENSE).
