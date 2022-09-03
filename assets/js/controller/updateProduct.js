import { clienteService } from '../service/cliente-service.js'

( async () => {
        const catchURL = new URL(window.location)
        const id = catchURL.searchParams.get('id')
        
        const image = document.querySelector('[data-image]')
        const category = document.querySelector('[data-category]')
        const name = document.querySelector('[data-name]')
        const price = document.querySelector('[data-price]')

        try {
            const dados = await clienteService.editProduct(id)

            image.value = dados.image
            category.value = dados.category
            name.value = dados.name
            price.value = dados.price
        }
        catch (erro) {
            console.log(erro)
        }

        const form = document.querySelector('[data-form]')

        form.addEventListener('submit', async (event) => {
            event.preventDefault()
            try {
                await clienteService.updateProduct(id, image.value, category.value, name.value, price.value)
                window.location.href = '/assets/pages/editProductConcluded.html'
            }
            catch (erro) {
                console.log(erro)
            }
        })
    }
)
()