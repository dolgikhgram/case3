class LocalStorageUtil {
    constructor() {
        this.keyName = 'products';
    }
    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }
    putProducts(id) {
        let products = this.getProducts();
        let pushProduct = false;
        const index = products.indexOf(id);// indexOf () — это метод в JavaScript, который ищет указанный элемент в массиве или строке. Если значение найдено, вернёт индекс этого элемента; если нет, то вернёт -1. 

        if (index === -1) {
            products.push(id);//. push () это метод, который добавляет один и более элементов в конец массива и возвращает его новую длину.
            pushProduct = true;
        } else {
            products.splice(index, 1);// splice() позволяет изменить содержимое массива за счёт удаления существующих элементов, и/или добавления новых
        }

        localStorage.setItem(this.keyName, JSON.stringify(products));// мы используем setItem , чтобы положить в наш localStorage новые продукты для этого мы сначала в скубках пишем первый аргумент - это то под каким ключом добавляем продукт , а вторым аргументом мы уже пишеи продукт Б но предварительно используем JSON.stringify , чтобы перевести массив в строку 

        return { pushProduct, products };
    }
};

const localStorageUtil = new LocalStorageUtil();
