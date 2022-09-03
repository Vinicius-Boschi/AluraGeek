const productsList = async () => {
    const response = await fetch ('http://localhost:3000/profile')
    if (response.ok) {
        return response.json()
    }
    throw new Error('Não foi possível mostrar os produtos')
}

const createProducts = async (image, category, name, price) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            image: image,
            category: category,
            name: name,
            price: price
        })
    })
    .then(response => {
        if (response.ok) {
            return response.body
        }
        throw new Error('Não foi possível criar a lista de produtos.')
    })
}

const deleteProduct = async (id) => {
    const response = await fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
    if (!response.ok) {
        throw new Error('Não foi possível deletar o produto.')
    }
}

const editProduct = async (id) => {
    const response = await fetch(`http://localhost:3000/profile/${id}`)
    if (response.ok) {
        return response.json()
    }
    throw new Error('Não foi possível editar o produto.')
}

const updateProduct = async (id, image, category, name, price) => {
    await fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            image: image,
            category: category,
            name: name,
            price: price
        })
    })
}

export const clienteService = {
    productsList,
    createProducts,
    deleteProduct,
    editProduct,
    updateProduct
}