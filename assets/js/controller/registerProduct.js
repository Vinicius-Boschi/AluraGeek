import { clienteService } from '../service/cliente-service.js'

const form = document.querySelector('[data-form]')

form.addEventListener('submit', (e) => {
    (e).preventDefault()

    const image = document.querySelector('[data-image]').value
    const category = document.querySelector('[data-category]').value
    const name = document.querySelector('[data-name]').value
    const price = document.querySelector('[data-price]').value

    try {
        clienteService.createProducts(image, category, name, price)
        .then(() => {
            window.location.href = 'registerConcluded.html'
        })
    }
    catch (erro) {
        console.log(erro)
    }
})