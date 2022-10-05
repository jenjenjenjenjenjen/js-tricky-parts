function createAccount(pin, amount=0) {
    return new Account(pin, amount);
}

function Account (pin, amount) {
    this.pin = pin;
    this.amount = amount;
}

Account.prototype.checkBalance = function(pin) {
    if(pin !== this.pin) return "Invalid PIN.";
    return `$${this.amount}`;
}

Account.prototype.deposit = function(pin, amount) {
    if(pin !== this.pin) return "Invalid PIN.";
    this.amount += amount;
    return `Succesfully deposited $${amount}. Current balance: $${this.amount}.`;
}

Account.prototype.withdraw = function(pin, amount) {
    if(pin !== this.pin) return "Invalid PIN.";
    if(this.amount < amount) return `Withdrawal amount exceeds account balance. Transaction cancelled.`;
    this.amount -= amount;
    return `Succesfully withdrew $${amount}. Current balance: $${this.amount}.`;
}

Account.prototype.changePin = function(oldPin, newPin) {
    if(oldPin !== this.pin) return "Invalid PIN.";
    this.pin = newPin;
    return "PIN successfully changed!";
}

module.exports = { createAccount };
