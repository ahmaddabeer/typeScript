//interface in TypeScript
interface userType {
    name: string,
    age: number,
    getName: () => string
}
let users: userType = {
    name: 'anil sidhu',
    age: 33,
    getName: function () {
        return "anil sidhu"
    }
}
console.log(users.getName());