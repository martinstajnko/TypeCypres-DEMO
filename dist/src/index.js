"use strict";
console.log('Typescript is working!');
// class User {
//     email: string;
//     name: string;
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }
// Alternative way to write the above
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}
const martin = new User('m@m.com', 'Martin');
console.log(martin.email);
