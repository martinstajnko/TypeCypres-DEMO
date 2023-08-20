type User = {
    readonly id: number;
    name: string;
    age: number;
    email: string;
    isActive: boolean;
}

type cardNumber = {
    readonly cardNumber: number;
}

type cardHolder = {
    readonly cardHolder: string;
}

type cardExpiration = {
    readonly cardExpiration: string;
}

type cardCvv = {
    readonly cardCvv: number;
}

type cardDetails = cardNumber & cardHolder & cardExpiration & cardCvv;


let myUSer: User = {
    id: 1,
    name: 'John',
    age: 25,
    email: 'h@history.com',
    isActive: true
}

console.log(myUSer);

myUSer.age = 30;


let myCardDetails: cardDetails = {
    cardNumber: 123456789,
    cardHolder: 'John Doe',
    cardExpiration: '12/25',
    cardCvv: 123
}

export{}