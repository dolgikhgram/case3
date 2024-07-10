function render (){
    const productsStore =  localStorageUtil.getProducts()

    headerPage.render( productsStore.length)
    productsPage.render()
}

let CATALOG = []

render()

fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body
    })
    .catch (error => {
        console.log(error)
    })

 
 