class Pizza {
    constructor(ingredients) {
        this.ingredients = ingredients || 'Cheese';
        this.price = 10;
    }
    getCost(){
        this.ingredients.forEach((ingredient) =>
            this.price++);
        console.log('This pizza costs:', this.price)
    }
}




const pizza = new Pizza();
const pizza2 = new Pizza(['Pepperoni', 'Green Olives']);
const pizza3 = new Pizza(['Potato', 'Bacon', 'Cheddar', 'Onion']);

console.log(pizza);
console.log(pizza2);
pizza2.getCost();
pizza3.getCost();