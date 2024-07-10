class Products { // Класс - это форма, или шаблон, по которому создаются объекты. Классы в JavaScript определяют свойства - какой будет объект и методы - что этот объект будет делать. При создании классов используется ключевое слово class, после которого указывается имя класса.
    constructor(){
        this.classNameActive = 'products-element__btn_active'
        this.labelAdd = 'Добавить в корзину'
        this.labelRemove = 'Удалить из корзины'
    }

    handleSetLocationStorage(element,id){
       const { pushProduct, products } =  localStorageUtil.putProducts(id) //  т.к. .putProducts(id) возвращает объект состоящий из двух переменных мы сраз его им же и присваиваем 
        if (pushProduct){
            element.classList.add(this.classNameActive)
            element.innerHTML = this.labelRemove
        }else{
            element.classList.remove(this.classNameActive)
            element.innerHTML = this.labelAdd
        }
        
        headerPage.render( products.length)
    }

    render (){
        const productsStore = localStorageUtil.getProducts()
        let htmlCatalog = ''
        CATALOG.forEach(({id,name,price,img})=> {    //  мы используем метод  forEach , чтобы перебрать 
           // сверху мы провели Деструктуризациу для нашего объекта CATALOG (который является локальным хранилищем), мы используем фигурные скобки , чтобы вывести все свойства нашего объекта CATALOG и все данные по кажому объекту выводятся  , как отдельные переменные  
           let activeClass = ''
           let activeText = '' 

           if (productsStore.indexOf(id) === -1){
                activeText = this.labelAdd
           }else{
                activeClass = ' '+ this.classNameActive
                activeText = this.labelRemove
           }
           htmlCatalog += `
            <li class = "products-element" >
                <span class = "products-element__name" >${name}</span>
                <img class = "products-element__img"  src = "${img} " />
                <span class = "products-element__price" >
                    💲${price.toLocaleString()} USD
                </span>
                <button class = "products-element__btn ${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}')" > 
                ${activeText}</button>
            </li>
            ` 
            //  сверху мы записываем часть кода html , который позже поместим в сам html используем li - используется для создания элементов списка , и span - является основным строковым контейнером для фразового контента 
        })
        const html = `
            <ul class = "products-container" >
                ${htmlCatalog}
            </ul>
        `
        // ul - это список в который по помещаем элементы списка прописанные ранее , мы добивили класс , чтобы обратиться в css  и добавить стиле1 
        ROOT_PRODUCTS.innerHTML = html
    }
}

const productsPage = new Products()
