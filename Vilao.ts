import { Personagem } from "./Personagem";

export class Vilao extends Personagem {
    constructor(nome: string, energia: number, vida: number, ataque: number, defesa: number) {
        super(nome, energia, vida, ataque, defesa);
    }

    public get nome(): string {
        return this._nome
    }

    public get energia(): number {
        return this._energia
    }

    public get vida(): number {
        return this._vida
    }

    public get ataque(): number {
        return this._ataque
    }

    public get defesa(): number {
        return this._defesa
    }
}
//(50 + Math.floor(Math.random() * 50)), (50 + Math.floor(Math.random() * 50)), (50 + Math.floor(Math.random() * 50)), (50 + Math.floor(Math.random() * 50)), 0)