const _name: string = "amra";
const age: number = 10;
const isShort: boolean = true;

const array: number[] = [1, 2];

interface IUser {
    readonly id?: number
    name: string,
    age?: number 
}

type TUser = {
    name: string,
    age: number 
}

let user: IUser[] = [
    {id: 1, name: "John"},
    {id: 2, name: "John", age: 10 }
];


enum StatusEnum {
    Pending,
    InProgress,
    Completed,
}

const taskStatus: StatusEnum = StatusEnum.InProgress; // 1

console.log(taskStatus)