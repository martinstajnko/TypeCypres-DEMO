const user: string[] = ['John', 'Doe', '33']


let tuple: [string, string, number] = ['John', 'Doe', 33]

let rgb: [number, number, number] = [255, 0, 0]


type User = [number , string]

const user1: User = [1, 'John']

user1[0] = 2

user1.push(2, false)

export{}