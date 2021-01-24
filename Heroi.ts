import prompt from "prompt-sync";
import { Personagem } from "./Personagem";
import { Vilao } from "./Vilao";
let teclado = prompt()


let char1: Heroi
let char2: Vilao

export class Heroi extends Personagem {
    private _dinheiro: number;
    constructor(nome: string, energia: number, vida: number, ataque: number, defesa: number) {
        super(nome, energia, vida, ataque, defesa);
        this._dinheiro = 0;
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
    public TreinoAtaque(tempoAtaque: number): void {
        let contaAtaque = (tempoAtaque / 100) * 10
        let contaAtaqueVida = (tempoAtaque / 100) * 5
        let contaAtaqueEnergia = (tempoAtaque / 100) * 7
        let VerificacaoAtaque = this._vida - contaAtaqueVida
        let VerificacaoAtaqueEne = this._energia - contaAtaqueEnergia
        if (VerificacaoAtaque <= 0 || VerificacaoAtaqueEne <= 0) {
            console.log(this.msgverificaTreino());
        } else {
            this._ataque += contaAtaque
            this._vida -= contaAtaqueVida
            this._energia -= contaAtaqueVida
        }
    }

    public treinoDefesa(tempoDefesa: number): void {
        let contaDefesa = (tempoDefesa / 100) * 10
        let contaDefesaVida = (tempoDefesa / 100) * 5
        let contaDefesaEnergia = (tempoDefesa / 100) * 7
        let VerificacaoDefesa = this._vida - contaDefesaVida
        let VerificacaoDefesaEne = this._vida - contaDefesaEnergia
        if (VerificacaoDefesa <= 0 || VerificacaoDefesaEne <= 0) {
            console.log(this.msgverificaTreino());
        } else {
            this._defesa += contaDefesa
            this._vida -= contaDefesaVida
            this._energia -= contaDefesaEnergia
        }
    }
    private msgverificaTreino(): string {
        return (
            '\nMuito tempo de treino, isso acabara te matando!!!\n' +
            'Diminua o tempo ou vá descansar um pouco!'
        )
    }

    public funDescansar(tempoDescanso: number): void {
        let contaDescanso = (tempoDescanso / 100) * 10
        this._vida += contaDescanso
        this._energia += contaDescanso
    }

    public minaCarvao(): void {
        console.log('Você escolheu trabalhar na Mina de Carvão.');
        if (this._vida < 16 || this._energia < 21) {
            console.log(this.msgtrabalho());
        } else {
            console.log(this.msgRecCarvao());
            this._vida -= 15
            this._energia -= 20
            this._dinheiro += 200
        }
    }
    private msgRecCarvao(): string {
        return (
            'Recompensa: $200\n' +
            'Dano: -15 Vida\n' +
            'Dano: -20 Energia\n'
        )
    }
    public coqueador(): void {
        console.log('Você escolheu trabalhar Coqueando Saco.');
        if (this._vida < 21 || this._energia < 26) {
            console.log(this.msgtrabalho());
        } else {
            console.log(this.msgRecCoqueador());
            this._vida -= 20
            this._energia -= 25
            this._dinheiro += 250
        }
    }
    private msgRecCoqueador(): string {
        return (
            'Recompensa: $250\n' +
            'Dano: -20 Vida\n' +
            'Dano: -25 Energia\n'
        )
    }
    private msgtrabalho(): string {
        return (
            'Energia ou Vida muito baixa, vá descansar antes de trabalhar'
        )
    }
    public Uva(): void {
        if (this._dinheiro < 16) {
            console.log(this.msgAprimora());
        } else {
            console.log(this.msgUva());
            this._vida += 5
            this._energia += 10
            this._dinheiro -= 15
        }
    }
    private msgUva(): string {
        return (
            '\nVocê comprou um Suco de Uva'
        )
    }

    public Energetico(): void {
        if (this._dinheiro < 26) {
            console.log(this.msgAprimora());
        } else {
            console.log(this.msgEnergetico());
            this._vida += 15
            this._energia += 20
            this._dinheiro -= 25
        }
    }
    private msgEnergetico(): string {
        return (
            '\n Você comprou um Energético'
        )
    }

    public adrenalina(): void {
        if (this._dinheiro < 1000) {
            console.log(this.msgAprimora());
        } else {
            console.log(this.msgAdrenalida());
            this._vida += 100
            this._energia += 100
            this._dinheiro -= 1000
        }
    }
    private msgAdrenalida(): string {
        return (
            '\nVocê comprou uma injeção de Adrenalina!'
        )
    }
    private msgAprimora(): string {
        return (
            'Dinheiro insuficiente!'
        )
    }



    public status(): string {
        return (
            '----------------------------------\n' +
            `Nome      : ${this._nome}\n` +
            `Energia   : ${this._energia}\n` +
            `Vida      : ${this._vida}\n` +
            `Ataque    : ${this._ataque}\n` +
            `Defesa    : ${this._defesa}\n` +
            `Dinheiro  : ${this._dinheiro}\n` +
            '----------------------------------'
        )
    }

    public msgTreino(): string {
        return (
            'Não esqueça que Treinar é cansativo e acabara esgotando sua vida!'
        )
    }
    public msgBemVindo(): string {
        return (
            'Bem Vindo ao Jogo!\n' +
            `Você é o heroi e deve derrotar o vilão\n` +
            `+==Vamos lhe apresentar o seu Personagem==+`
        )
    }

    public msgMenuInicial(): string {
        return (
            '+=============Menu============+\n' +
            '|1. Treinar ataque            |\n' +
            '|2. Treinar defesa            |\n' +
            '|3. Trabalhar                 |\n' +
            '|4. Marketplace               |\n' +
            '|5. Descansar                 |\n' +
            '|6. Ver Personagem            |\n' +
            '|7. Batalhar                  |\n' +
            '|8+. sair                     |\n' +
            '+=============================+\n'
        )
    }

    public msgMenuTrabalho(): string {
        return (
            'Escolha onde desja Trabalhar:\n' +
            '1. Mina Carvão (+$200, -15 vida e - 20 energia)\n' +
            '2. Coqueando Saco (+$250, -20 vida e - 25 energia)\n' +
            '3+. Desistir de trabalhar'
        )
    }

    public msgMenuMarketplace(): string {
        return (
            'Bem vindo ao Marketplace\n' +
            '1. Suco de Uva = $ 15 (+5 vida e +10 energia)\n' +
            '2. Energético = $20 (+15 vida e +20 energia)\n' +
            '3. Adrenalina = $1000 (+100 vida e +100 energia)\n' +
            '4+. Sair'
        )
    }

    public randomizar(): number {
        return 50 + Math.floor(Math.random() * 50)
    }


}
