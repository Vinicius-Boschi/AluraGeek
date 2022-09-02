import { allItens } from './allProducts.js'

let all = document.querySelector('.main__products')
function showItens() {
    for (let i = 0; i < allItens.length; i++) {
       all.innerHTML += `
       <div class="main__content-store">
            <div class='main__action'>
                <img src="${allItens[i].delete}" alt="${allItens[i].altDelete}">
                <img src="${allItens[i].edit}" alt="${allItens[i].altEdit}">
            </div> 
            <img src="${allItens[i].img}" alt="${allItens[i].alt}" class='main__img'>
            <h3 class='main__h3'>${allItens[i].name}</h3>
            <p class="main__price">${allItens[i].price}</p>
        </div>
       `
    }
}

showItens()