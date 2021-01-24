"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vilao = void 0;
var Vilao = /** @class */ (function () {
    function Vilao(nome, energia, vida, ataque, defesa) {
        this._nome = nome;
        this._energia = energia;
        this._vida = vida;
        this._ataque = ataque;
        this._defesa = defesa;
    }
    Object.defineProperty(Vilao.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vilao.prototype, "energia", {
        get: function () {
            return this._energia;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vilao.prototype, "vida", {
        get: function () {
            return this._vida;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vilao.prototype, "ataque", {
        get: function () {
            return this._ataque;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vilao.prototype, "defesa", {
        get: function () {
            return this._defesa;
        },
        enumerable: false,
        configurable: true
    });
    return Vilao;
}());
exports.Vilao = Vilao;
//(50 + Math.floor(Math.random() * 50)), (50 + Math.floor(Math.random() * 50)), (50 + Math.floor(Math.random() * 50)), (50 + Math.floor(Math.random() * 50)), 0)
