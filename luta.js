"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Batalha = void 0;
var prompt_sync_1 = __importDefault(require("prompt-sync"));
var teclado = prompt_sync_1.default();
var Batalha = /** @class */ (function () {
    function Batalha(heroi, vilao) {
        this.heroi = heroi;
        this.vilao = vilao;
    }
    Batalha.prototype.luta = function () {
        console.log(this.heroi.nome + " vs " + this.vilao.nome);
        console.log("Vida: " + this.heroi.vida + " vs " + this.vilao.vida);
        console.log("Energia: " + this.heroi.energia + " vs " + this.vilao.energia);
        console.log("Ataque " + this.heroi.ataque + " vs " + this.vilao.ataque);
        console.log("Defesa: " + this.heroi.defesa + " vs " + this.vilao.defesa);
        var vezes = 0;
        if (this.heroi.vida > this.vilao.vida) {
            vezes++;
        }
        if (this.heroi.energia > this.vilao.energia) {
            vezes++;
        }
        if (this.heroi.ataque > this.vilao.ataque) {
            vezes++;
        }
        if (this.heroi.defesa > this.vilao.defesa) {
            vezes++;
        }
        if (vezes >= 3) {
            return true;
            //   char2: Vilao = new Vilao((teclado(`Qual Nome do novo Vilão? `)), (100 + Math.floor(Math.random() * 100)), (100 + Math.floor(Math.random() * 100)), (100 + Math.floor(Math.random() * 100)), (100 + Math.floor(Math.random() * 100)))
        }
        else {
            return false;
        }
    };
    return Batalha;
}());
exports.Batalha = Batalha;
exports.default = Batalha;
