var Grocery = /** @class */ (function () {
    function Grocery(n, s, q, p) {
        this.itemName = n;
        this.sku = s;
        this.quantity = q;
        this.price = p;
    }
    return Grocery;
}());
var grocery_list = [
    new Grocery("Milk", 84437, 3, 9.75),
    new Grocery("Bread", 35325, 6, 22.50),
    new Grocery("Eggs", 85473, 11, 50)
];
var ele = document.getElementById("app");
grocery_list.forEach(function (e) {
    var p = document.createElement("p");
    p.textContent = "Name: ".concat(e.itemName, " \nSKU: ").concat(e.sku, " \nQuantity:").concat(e.quantity, " -> $").concat(e.price);
    ele.appendChild(p);
});
