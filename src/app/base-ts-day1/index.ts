// diverse types 
let isDone: boolean = false;

let decimal: number = 6;

let hexadecimal: number = 0xf00d;

let color: string = 'blue';

let list: number[] = [1,2,3];

// functions

function sayHello(): void {
    console.log('Hello World !')
}

function getString(): string {
    return 'string';
}

const arrayFunction = (): number => {
    return 12;
}

const arrayWithArgs = (something: string, somethingElse: number) : void => {
    console.log(something, somethingElse, 'toto');
}

class User {

    status: number | string | boolean = "";
}

function showUserStatus( user: User) : number | string | boolean {
    return user.status;
}

let user = new User();
// const statu: string = user.status; // error de typage (string not assignable to string | number | boolean)

class Product1 {

    // attributs ou paramètres
    private _name: string = "marc";
    protected _ref: number = 1000;
    public _quantity: number = 10;

    // setter
    set name(name: string) {
        this._name = name;
    }

    // getter
    get name(): string {
        return this._name;
    }
}

class Electronic extends Product {
    // possibilité d'utiliser _ref
}

const ps5 = new Product1();

console.log(ps5._quantity);

ps5.name = 'PlayStation 5';
console.log(ps5.name);

enum Status {
    published = 0,
    unpublished = 1,
    draft = 2,
}

// let state: Status;

state = Status.draft;

console.log(state);

const var2: any = "bonjour";
console.log(var2.length);
