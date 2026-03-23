let account = {
    name: "Ravi" ,
    balance: 1000
};

function deposit(amount) {
    account.balance += amount;
    console.log("Deposit of " + amount + " successful. New balance: " + account.balance);
};

function withdraw(amount) {
    if (amount > account.balance) {
        console.log("Insufficient balance. Withdrawal of " + amount + " failed.");
    } else {
        account.balance -= amount;
        console.log("Withdrawal of " + amount + " successful. New balance: " + account.balance);
    } 
};

function checkBalance() {
    console.log("Current balance: " + account.balance);
}

deposit(500);
withdraw(200);
checkBalance();