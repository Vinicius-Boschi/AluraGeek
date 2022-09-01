import { starwars, consoles, diversos } from './pictures.js'

let store = document.querySelector('.main__info-store')
function showStarWarsItens() {
    for (let i = 0; i < starwars.length; i++) {
       store.innerHTML += `
       <div class="main__content-store">
            <img src="${starwars[i].img}" alt="${starwars[i].alt}">
            <h3>${starwars[i].name}</h3>
            <p class="main__price">${starwars[i].price}</p>
            <button class="main__link">Ver produto</button>
        </div>
       `
    }
}

let second = document.querySelector('#second')
function showConsolesItens() {
    for (let i = 0; i < consoles.length; i++) {
        second.innerHTML += `
            <div class="main__content-store">
                <img src="${consoles[i].img}" alt="${consoles[i].alt}">
                <h3${consoles[i].name}</h3>
                <p class="main__price">${consoles[i].price}</p>
                <button class="main__link">Ver produto</button>
            </div>
        `
    }
}

let third = document.querySelector('#third')
function showDiversosItens() {
    for (let i = 0; i < diversos.length; i++) {
        third.innerHTML += `
            <div class="main__content-store">
                <img src="${diversos[i].img}" alt="${diversos[i].alt}">
                <h3${diversos[i].name}</h3>
                <p class="main__price">${diversos[i].price}</p>
                <button class="main__link">Ver produto</button>
            </div>
        `
    }
}

showStarWarsItens()
showConsolesItens()
showDiversosItens()