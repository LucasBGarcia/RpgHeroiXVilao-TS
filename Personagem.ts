export class Personagem {
    protected _nome: string;
    protected _energia: number;
    protected _vida: number;
    protected _ataque: number;
    protected _defesa: number;
    constructor(nome: string, energia: number, vida: number, ataque: number, defesa: number) { 
        this._nome = nome;
        this._energia = energia;
        this._vida = vida;
        this._ataque = ataque;
        this._defesa = defesa;
    }
}