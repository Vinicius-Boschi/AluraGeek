import { clienteService } from '../service/cliente-service.js'

const createProducts = (image, category, name, price, id) => {
    const allProducts = document.createElement('div')
    const content = `
        <div class="main__content-store">
            <div class='main__action'>
                <button class='main__btn-delete'>
                    <img class="main__img-delete" src="https://user-images.githubusercontent.com/74377158/188174662-8780a6bb-55cb-416e-818d-0c6105e4ed2e.png" alt="icone de deletar">
                </button>
                <a href="editProduct.html?id=${id}">
                    <img src='https://user-images.githubusercontent.com/74377158/188174658-3897e069-4d05-4e94-81ae-74ee68d2b8bf.png' alt="icone de editar">
                </a>
            </div> 
            <img src="${image}" alt="${name}" class='main__img'>
            <h3 class='main__h3'>${name}</h3>
            <p class="main__price">${price}</p>
            <p class="main__category">#${category}</p>
        </div>
    `
    allProducts.innerHTML = content
    allProducts.dataset.id = id

    return allProducts
}

const products = document.querySelector('[data-products]')

products.addEventListener('click', async (event) => {
    let deleteButton = event.target.className === 'main__img-delete'

    if (deleteButton) {
        try {
            const lineProduct = event.target.closest('[data-id]')
            const id = lineProduct.dataset.id
            await clienteService.deleteProduct(id)
            lineProduct.remove()
        }
        catch(erro) {
            console.log(erro)
        }
    }
})

const render = async () => {
    try {
        const productsList = await clienteService.productsList()
        productsList.forEach(element => {
            products.appendChild(createProducts(element.image, element.category, element.name, element.price, element.id))
        })
    }
    catch(erro) {
        console.log(erro)
    }
}

render()