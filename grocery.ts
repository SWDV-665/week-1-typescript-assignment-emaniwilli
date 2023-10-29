class Grocery {
    itemName: string;
    sku: number;
    quantity: number;
    price: number;

    constructor(n: string, s: number, q: number, p: number){
        this.itemName = n;
        this.sku = s;
        this.quantity = q;
        this.price = p;
    }
}

let grocery_list = [
    new Grocery("Milk", 84437, 3, 9.75),
    new Grocery("Bread", 35325, 6, 22.50),
    new Grocery("Eggs", 85473, 11, 50)
]

const ele = document.getElementById("app");

grocery_list.forEach(e => {
    const p = document.createElement("p");
    p.textContent = `Name: ${e.itemName} \nSKU: ${e.sku} \nQuantity:${e.quantity} -> $${e.price}`;
    ele.appendChild(p);
});