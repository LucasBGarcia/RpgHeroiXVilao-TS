import prompt from "prompt-sync";

import { Heroi } from "./Heroi";
import { Vilao } from "./Vilao";


let teclado = prompt()
export { Batalha }

export default class Batalha {
    private heroi: Heroi;
    private vilao: Vilao;

    constructor(heroi: Heroi, vilao: Vilao) {
        this.heroi = heroi;
        this.vilao = vilao;
    }
    public luta(): boolean {
        console.log(`${this.heroi.nome} vs ${this.vilao.nome}`)
        console.log(`Vida: ${this.heroi.vida} vs ${this.vilao.vida}`);
        console.log(`Energia: ${this.heroi.energia} vs ${this.vilao.energia}`);
        console.log(`Ataque ${this.heroi.ataque} vs ${this.vilao.ataque}`);
        console.log(`Defesa: ${this.heroi.defesa} vs ${this.vilao.defesa}`);
        let vezes = 0
        if (this.heroi.vida > this.vilao.vida) {
            vezes++
        }
        if (this.heroi.energia > this.vilao.energia) {
            vezes++
        }
        if (this.heroi.ataque > this.vilao.ataque) {
            vezes++
        }
        if (this.heroi.defesa > this.vilao.defesa) {
            vezes++
        }
        if (vezes >= 3) {
            return true
          //   char2: Vilao = new Vilao((teclado(`Qual Nome do novo Vilão? `)), (100 + Math.floor(Math.random() * 100)), (100 + Math.floor(Math.random() * 100)), (100 + Math.floor(Math.random() * 100)), (100 + Math.floor(Math.random() * 100)))
        } else {
            return false
        }
    }
}