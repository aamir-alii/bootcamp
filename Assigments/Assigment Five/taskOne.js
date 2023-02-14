//  Task One 
class payment {
    constructor(amount) {
        this.amount = amount;
    }

    paymentDetails() {
        return "Payment: " + this.amount;
    }
}

class cashPayment extends payment {
    constructor(amount) {
        super(amount);
    } 
    paymentDetails() {
        return "Payment: " + this.amount + " in cash"; 
    }
}
class CreditCards extends payment {
    constructor(amount, name, expDate, cardNum) {
        super(amount);
        this.name = name;
        this.expDate = expDate;
        this.cardNum = cardNum;
    }
    paymentDetails() {
                return "Payment: " + this.amount + " with " + this.name + " " + this.expDate + " " + this.cardNum;
            }
}
class CardPayment extends CreditCards {
    constructor(amount, name, expDate, cardNum) {
        super(amount, name, expDate, cardNum);
    }
    paymentDetails () {
        return "Payment: " + this.amount + " with Card: " + this.cardNum + " Expiration: " + this.expDate; 
    }
}



let cashPayment1 = new cashPayment(100);
console.log(cashPayment1.paymentDetails());
let cashPayment2 = new cashPayment(200);
console.log(cashPayment2.paymentDetails());
let cardPayment = new CardPayment(500,"John", "12/12/2020", "1234567890");
console.log(cardPayment.paymentDetails());
console.log(cardPayment.name);
console.log(cardPayment.expDate);
console.log(cardPayment.cardNum);
console.log(cardPayment.paymentDetails());
