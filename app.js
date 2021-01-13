// Storage Controller
const StorageController = (function () {


})();

// Product Controller
const ProductController = (function () {

    // Private
    const Product = function (id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    const data = {
        products: [
            { id: 0, name: "Laptop", price: 8000 },
            { id: 0, name: "İşlemci", price: 4000 },
            { id: 0, name: "Ram", price: 2000 }
        ],
        selectedProduct: null,
        totalPrice: 0,
    }

    // Public
    return {
        getProducts: function(){
            return data.products;
        },
        getData: function(){
            return data;
        }
    }
})();

// UI Controller
const UIController = (function () {


})()

// App Controller
const App = (function (ProductCtrl, UICtrl) {
    return{
        init: function(){
            console.log("Uygulama Çalışıyor!");
            const products = ProductCtrl.getProducts();
            console.log(products);
        }
    }

})(ProductController, UIController);

App.init();