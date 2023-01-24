var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// diverse types 
var isDone = false;
var decimal = 6;
var hexadecimal = 0xf00d;
var color = 'blue';
var list = [1, 2, 3];
// functions
function sayHello() {
    console.log('Hello World !');
}
function getString() {
    return 'string';
}
var arrayFunction = function () {
    return 12;
};
var arrayWithArgs = function (something, somethingElse) {
    console.log(something, somethingElse, 'toto');
};
var User = /** @class */ (function () {
    function User() {
        this.status = "";
    }
    return User;
}());
function showUserStatus(user) {
    return user.status;
}
var user = new User();
// const statu: string = user.status; // error de typage (string not assignable to string | number | boolean)
var Product = /** @class */ (function () {
    function Product() {
        // attributs ou paramètres
        this._name = "marc";
        this._ref = 1000;
        this._quantity = 10;
    }
    Object.defineProperty(Product.prototype, "name", {
        // getter
        get: function () {
            return this._name;
        },
        // setter
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var Electronic = /** @class */ (function (_super) {
    __extends(Electronic, _super);
    function Electronic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Electronic;
}(Product));
var ps5 = new Product();
console.log(ps5._quantity);
ps5.name = 'PlayStation 5';
console.log(ps5.name);
var Status;
(function (Status) {
    Status[Status["published"] = 0] = "published";
    Status[Status["unpublished"] = 1] = "unpublished";
    Status[Status["draft"] = 2] = "draft";
})(Status || (Status = {}));
var state;
state = Status.draft;
console.log(state);
var var2 = "bonjour";
console.log(var2.length);
