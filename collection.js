const collection = [{
    image: src = "./image/Rebelassault1.jpg",
    title: 'Rebel assault 1',
    author: 'LucasArts',
    category: ['action'],
    genre: ['Compilation '],
    link: "https://www.youtube.com/watch?v=6FX3B8yC38U&t=4160s&ab_channel=WorldofLongplays",
    description: "Rebel assault est un jeu d'aventure ou vous piloterez des vaisseaux et jouerez despersonnages, le but étant de finir d'aventure.",
},
{
    image: src = "./image/sc2.jpg",
    title: 'StarCraft 2',
    author: 'Blizzard',
    category: ['stratégie'],
    genre: ['STR'],
    link: "https://www.youtube.com/watch?v=rUtU2GmlQrw&ab_channel=SC2HL",
    description: "StarCraft 2: Wings of Liberty est un jeu vidéo de stratégie en temps réel (STR), il faudra créer son armée et battre son adversaire en détruisant sa base.",
},
{
    image: src = "./image/lol.jpg",
    title: 'League of legend',
    author: 'RIOT GAME',
    category: ["jeux d'équipe"],
    genre: ['MOBA'],
    link: "https://www.youtube.com/watch?v=jCtz66mqIrs&ab_channel=LeagueofHighlights",
    description: "League of legend est un jeu de coopération online. Vous choisissez un personnage parmis plus de 100 différents. Vous faites équipes avec 4 autres personnes réel et devrez battre l'équipe en face en détruisant leur base."
},
{
    image: src = "./image/DOOM.jpg",
    title: 'Doom 1',
    author: 'ID Software',
    category: ["doom like"],
    genre: ['FPS'],
    link: "https://www.youtube.com/watch?v=iFnOLFd_ByQ&ab_channel=Minase",
    description: "League of legend est un jeu de coopération online. Vous choisissez un personnage parmis plus de 100 différents. Vous faites équipes avec 4 autres personnes réel et devrez battre l'équipe en face en détruisant leur base."
},
{
    image: src = "./image/bloody2.jpg",
    title: 'Bloody Roar 2',
    author: 'Hudson',
    category: ["sang"],
    genre: ['combat'],
    link: "https://www.youtube.com/watch?v=TRqzHaDCEu4&ab_channel=wal2bros",
    description: "Bloody Roar 2 est un jeu de combat très vif. Le but est de terrasser son adversaire."
},
{
    image: src = "./image/Breath3.jpg",
    title: 'Breath of fire3',
    author: 'CAPCOM',
    category: ["aventure"],
    genre: ['RPG'],
    link: "https://www.youtube.com/watch?v=zhwn8sgxvHk&ab_channel=xMisterEpicx",
    description: "Le jeu se déroule dans un monde imaginaire en compagnie de Ryu, un jeune garçon doté de l'étrange capacité de se transformer en dragon, qui doit découvrir la vérité sur ses origines et retrouver ses amis disparus."
},
{
    image: src = "./image/ff8.png",
    title: 'Final fantasy8',
    author: 'SquareSoft',
    category: ["aventure"],
    genre: ['RPG'],
    link: "https://www.youtube.com/watch?v=LYQnSoXax2s&ab_channel=FinalFantasyGamer",
    description: "L'histoire met en scène un groupe de jeunes mercenaires, entraînés dans un conflit international, qui cherchent à sauver le monde d'une sorcière manipulant la guerre pour arriver à ses fins."
},
{
    image: src = "./image/bomberman.png",
    title: 'BomberMan',
    author: 'Hudson Soft',
    category: ["tactic"],
    genre: ['Plateforme'],
    link: "https://www.youtube.com/watch?v=XpXD7iPKPT4&ab_channel=FinalFantasyGamerFinalFantasyGamer",
    description: "Le joueur doit déposer des bombes sur une arène, et doit éliminer ses adversaires en les faisant exploser. Divers bonus sont éparpillés sur l'arène."
},
{
    image: src = "./image/residentEvil2.jpg",
    title: 'Resident evil 2',
    author: 'CAPCOM',
    category: ["zombie"],
    genre: ['aventure'],
    link: "https://www.youtube.com/watch?v=kYmeNHhwQd4&ab_channel=NintendoCompleteNintendoComplete",
    description: "Resident evil 2 est un jeu d'aventure dans un monde ou un mysterieu virus a transformé la population en zombi."
},
{
    image: src = "./image/wow.jpg",
    title: 'World of warcraft vanilla',
    author: 'Blizzard',
    category: ["social"],
    genre: ['MMORPG'],
    link: "https://www.youtube.com/watch?v=mLyOj_QD4a4",
    description: "World of warcraft est un MMORPG ou vous évoluez dans un monde persistant accompagné d'autre joueur. Le but est de faire tout les donjons que le jeu vous propose."
},

]
const body = document.querySelector("body") 

const container = document.querySelector("section")
const columns = document.createElement("div")
columns.className = " columns is-flex-wrap-wrap"

for (let element of collection) {

const maintContainer = document.createElement('div')
maintContainer.className = "column is-3";

const card = document.createElement("div");
card.className = 'card';
card.style.height = '800px'
card.style.marginBottom = '30px'

const large = document.createElement("div");
large.className = "large"

const divImg = document.createElement("div")
divImg.className ="level-item has-text-centered card-content is-flex is-horizontal-center"

const figureImg = document.createElement("figure")
figureImg.className = "is-justify-content-center"

const img = document.createElement("img")
img.src = element.image

const media = document.createElement("div")
media.className = "media"

const cardContent = document.createElement("div")
cardContent.className = "card-content"

const mediaContent = document.createElement("div")
mediaContent.className = "media-content"

const title = document.createElement("h1")
title.className = "title is-4"
title.textContent = element.title;

const genre = document.createElement("span")
genre.className = "tag is-warning"
genre.textContent = element.genre

const category = document.createElement("span")
category.className = "tag is-danger"
category.textContent = element.category

const author = document.createElement("h5")
author.className = "has-text-grey-light"
author.textContent = element.author

const content = document.createElement("p");
content.className = "content"
content.textContent = element.description

const footer = document.createElement("footer")
footer.className = "card-footer"

const aLien = document.createElement("a")
aLien.className = "card-footer-item fas fa-2x"
aLien.href = element.link
aLien.target = "_blank"

const lien = document.createElement("i")
lien.className = "fab fa-youtube";

body.appendChild(container)
container.appendChild(columns)
columns.appendChild(maintContainer);
mediaContent.appendChild(genre);
mediaContent.appendChild(category);
mediaContent.appendChild(title);
maintContainer.appendChild(card);
card.appendChild(large);
card.appendChild(media);
card.appendChild(cardContent);
cardContent.appendChild(media);
cardContent.appendChild(content);
cardContent.appendChild(footer);
footer.appendChild(lien)
media.appendChild(mediaContent);
mediaContent.appendChild(author);
large.appendChild(divImg);
divImg.appendChild(figureImg);
figureImg.appendChild(img);
footer.appendChild(aLien);
aLien.appendChild(lien);





}