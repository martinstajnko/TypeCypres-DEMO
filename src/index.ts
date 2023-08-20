console.log('Typescript is working!')

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
    constructor(
        public email: string, 
        public name: string) 
        {}
}

const martin = new User('m@m.com', 'Martin')

console.log(martin.email);

