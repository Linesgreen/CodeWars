let isCompleted = false;
isCompleted = true;

const decimal = 6;
const myName:string = "Vlad";

const greetUser = ()=> {
    console.log("Bibos")
}

const enum directions {
    up,
    down
}

const createPassword = (name: string, age : number | string) => `${name} ${age}`;

console.log(createPassword('Vlad',27));
console.log(createPassword('Vlad',"26"));
console.log(createPassword(null)); // выдает ошибку
console.log(createPassword('Vlad')) // выдает ошибку

const createPassword1 = (name: string, age? : number | string) => `${name} ${age}`;
console.log(createPassword1('Vlad')) // не выдает за счет знака ?


let user : any = {
    name: 'Vlad',
    age: 30,
}


let user1 : {name:string, age:number} = {
    name: 'Vlad',
    age: 30,
}


let admin : {name:string, age:number} = {
    name: 'Vlad',
    age: 30,
}
