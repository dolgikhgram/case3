class Shopping {
    heandleClear(){
        ROOT_SHOPPING.innerHTML=''
    }

    render(){
        const productsStore = localStorageUtil.getProducts()
        let htmlCatalog = ''
        let sumCatalog = 0

        CATALOG.forEach(({id,name,price})=> { 
            if (productsStore.indexOf(id) !== -1){
                htmlCatalog += `
                    <tr>
                        <td  class = "shopping-element__name">💲 ${name}</td>
                        <td class = "shopping-element__price">${price.toLocaleString()} USD</td> 
                    </tr>
                `// Тег <tr> создаёт в таблице строку. Он содержит ячейки <td> .  метод toLocaleString() преобразует числовое значение (объект Number) в строковое и возвращает это значение, используя текущий или указанный языковой стандарт.
              sumCatalog += price
        }
        })

        const html = `
            <div class = "shopping-container">
            <div class = "shopping__close" onclick ="shoppingPage.heandleClear()"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                    <td  class = "shopping-element__name">💵 Сумма :</td>
                    <td class = "shopping-element__price">${sumCatalog.toLocaleString()} USD</td> 
                </tr>
                </table>
            </div>
        `//<table> HTML представляет табличные данные, то есть информацию, представленную в двумерной таблице, состоящей из строк и столбцов ячеек, содержащих данные.
        ROOT_SHOPPING.innerHTML=html
    }
}

const shoppingPage = new Shopping()