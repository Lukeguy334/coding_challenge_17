
// ✅ Task 1: Create a Customer Class
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
