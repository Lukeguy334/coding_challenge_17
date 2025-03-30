
// Task 1: Create a Customer Class
class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
    }
    
    addPurchase(amount) {
        this.purchaseHistory.push(amount);
    }
    
    getTotalSpent() {
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    }
}

// Logging
const customer1 = new Customer("Alice Johnson", "alice@example.com");
customer1.addPurchase(150);
customer1.addPurchase(200);
console.log(`Customer: ${customer1.name}, Total Spent: $${customer1.getTotalSpent()}`);

// Task 2: Create a SalesRep Class
class SalesRep {
    constructor(name) {
        this.name = name;
        this.clients = [];
    }
    
    addClient(customer) {
        this.clients.push(customer);
    }
    
    getClientTotal(name) {
        const client = this.clients.find(customer => customer.name === name);
        return client ? client.getTotalSpent() : 0;
    }
}

// Logging
const rep1 = new SalesRep("John Doe");
rep1.addClient(customer1);
console.log(`Sales Rep: ${rep1.name}, Client Total for Alice: $${rep1.getClientTotal("Alice Johnson")}`);
