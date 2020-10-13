class Order {
    static store = [];
    constructor({
        small,
        midle,
        big,
        cheese,
        tomato,
        chicken,
        mushrooms,
        sausage
    }) {
        this.small = small,
            this.midle = midle,
            this.big = big,
            this.cheese = cheese,
            this.tomato = tomato,
            this.chicken = chicken,
            this.mushrooms = mushrooms,
            this.sausage = sausage
    }
    static describeOrder(data) {
        Order.setOrder(new Order(data))
    }
    static setOrder(order) {
         console.log(order);
        Order.store.push(order)
        console.log(Order.store)
    }

}