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
            { id: 1, name: "Laptop", price: 8000 },
            { id: 2, name: "İşlemci", price: 4000 },
            { id: 3, name: "Ram", price: 2000 }
        ],
        selectedProduct: null,
        totalPrice: 0,
    }

    // Public
    return {
        getProducts: function () {
            return data.products;
        },
        getData: function () {
            return data;
        }
    }
})();

// UI Controller
const UIController = (function () {

    const Selectors = {
        productList: "#item-list"
    }

    return {
        createProductList: function (products) {
            let html = '';

            products.forEach(prd => {
                html+=`
                    <tr>
                        <td>${prd.id}</td>
                        <td>${prd.name}</td>
                        <td>${prd.price}</td>
                        <td class="text-right">
                            <button type="submit" class="btn btn-warning btn-sm">
                                <i class="far fa-edit"></i>
                            </button>
                        </td>
                    </tr>
                `;
            });

            document.querySelector(Selectors.productList).innerHTML = html;
        },
        
        getSelectors : function(){
            return Selectors;
        }
    }

})()

// App Controller
const App = (function (ProductCtrl, UICtrl) {
    return {
        init: function () {
            console.log("Uygulama Çalışıyor!");
            const products = ProductCtrl.getProducts();
            
            UICtrl.createProductList(products);
        }
    }

})(ProductController, UIController);

App.init();