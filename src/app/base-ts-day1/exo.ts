// //  EXO1 Récupérez le code ci-dessus et ajoutez les setter et getter pour l’identifiant _ref, puis affichez ses valeurs en console. Essayez le code (par exemple changez le nom de votre produit et affichez-le).
// // Définition de la classe
// class Product2 {
//     private _name: string = ''; // attribut privé dans la classe actuelle
//     protected _ref: number = 1000; // attribut protégé dans la classe actuelle et dans sa fille

//     constructor(name: string) {
//         this.name = name; // le setter assigne une valeur à l'attribut _name
//     }
    
//     // setter
//     set name(name: string) {
//         this._name = name;
//     }
    
//     // getter : afficher une valeur dans le code courant
//     get name():string {
//         return this._name;
//     }
    
//     set (ref: number): void {
//         this._ref = ref;
//     }

//     get ref(): number {
//         return this._ref;
//     }
// }

// let bike = new Product2('Super Bike');
// // bike.ref = 1001;

// console.log(bike.name) // affichera Super Bike

// // EXO2 : Vous allez préciser dans la classe Guitar sans créer de setter le nom de l’instrument à l’aide de l’attribut _instrument. Puis affichez le nom de l’instrument dans le script courant à l’aide d’un getter que vous écrirez dans l’une des deux classes, la plus appropriée.

// // Transformez la classe Music en classe abstraite (dans ce cas on ne pourra plus faire d’instance de la classe Music directement dans le script courant. Cette classe devient alors non instanciable ou abstraite. Voyez le contrat makeSound définit dans la classe Music. Vous devez maintenant implémenter le code qui manque à la classe Guitar pour que celle-ci compile.

// //     Remarques : une classe abstraite permet de définir un/des contrat(s), méthode(s) abstraite(s) et du code utile dans la classe elle-même. Si au moins une méthode est abstraite dans votre classe alors elle doit être définie « abstraite », sinon votre code ne compilera pas.

// abstract class Music {
    
//     protected _instrument: string = "";
//     abstract makeSound(): string;

    
//     play(): string {
//         return "play music";
//     }
    
//     get instrument(): string {
//         return this._instrument;
//     }
// }

// // Classe étendue
// class Guitar extends Music {
//     protected override _instrument: string = 'guitar';

//     makeSound(): string {
//         return "sound of the string!";
//     }

// }

// let guitar = new Guitar();
// console.log(guitar.instrument)
// console.log(guitar.makeSound());

// // EXO3 Soit l’interface Duck suivante. La classe Thing l’implémente. Complétez le code pour que tout fonctionne correctement (compile). Il ne faut pas préciser la visibilité des membres d’une interface, par définition ils sont tous publiques.

// // Testez votre code en affichant en console le message : « Nage comme un canard ».
// // Définition de l'interface <=> contrat
// interface Duck {
//     name: string;
//     swim(): string;
// }

// class Thing implements Duck {
//     name: string = 'duck';
//     swim() :string {
//         console.log('swim swim');
//         return 'swim swim';
//     }
// }

// const duck = new Thing();
// duck.swim();

// // EXO4.1 Soit la définition suivante ajoutez quelques recettes dans la variable recipes ci-dessous.
// // Affichez ces valeurs en console.

// class Recipe {
//     name: string = '';
//     star?: number;
// }

// let recipes: Recipe[] = []; // pour le type, la notation est équivalente à Array<Recipe>

// EXO 5.1 Implémentez une Queue en définissant une classe et en utilisant le typage générique. Voici comment dans le script courant vous devez appeler votre code pour ajouter un élément dans la queue et récupérer le premier élément de la queue (une queue est l’inverse d’un array en JS) :

class Queue<T> {
    private array: T[] = [];

    push(value: any) {
        this.array.push(value)
        return this.array;
    }

    pop() {
        return this.array.shift();
    }

    get elem(): T[] {return this.array;}
}

let queue = new Queue<number>();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);

console.log(queue.pop()) // affiche 1

let queueArray = new Queue<Array<number>>();
queueArray.push([1, 2]);
queueArray.push([3, 4]);
queueArray.push([5, 6]);
queueArray.push([7, 8]);

console.log(queueArray.pop()); // affiche [1,2]

import { Details, Delivery, MockDetails, MockDelivery } from './3waFsd40_Angular/typescript/jour1/source/chap3_Sources/05.2_Exercice_source/Cart/src/data/MockProducts';
import { Product } from './3waFsd40_Angular/typescript/jour1/source/chap3_Sources/05.2_Exercice_source/Cart/src/Product';
let products: Array<Product<Details, Delivery>> = [];
console.log(MockDelivery);
MockDetails.forEach((detail) => {
        let deliveryRetrieved = MockDelivery.filter(delivery => detail.id === delivery.id);
        console.log(deliveryRetrieved);
        let detailToAdd = {...detail, ...deliveryRetrieved};
        console.log(detailToAdd);
})