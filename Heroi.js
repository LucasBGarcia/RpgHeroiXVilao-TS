"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heroi = void 0;
var prompt_sync_1 = __importDefault(require("prompt-sync"));
var Vilao_1 = require("./Vilao");
var teclado = prompt_sync_1.default();
var char1;
var char2;
var Heroi = /** @class */ (function (_super) {
    __extends(Heroi, _super);
    function Heroi(nome, energia, vida, ataque, defesa) {
        var _this = _super.call(this, nome, energia, vida, ataque, defesa) || this;
        _this._dinheiro = 0;
        return _this;
    }
    Heroi.prototype.TreinoAtaque = function (tempoAtaque) {
        var contaAtaque = (tempoAtaque / 100) * 10;
        var contaAtaqueVida = (tempoAtaque / 100) * 5;
        var contaAtaqueEnergia = (tempoAtaque / 100) * 7;
        var VerificacaoAtaque = this._vida - contaAtaqueVida;
        var VerificacaoAtaqueEne = this._energia - contaAtaqueEnergia;
        if (VerificacaoAtaque <= 0 || VerificacaoAtaqueEne <= 0) {
            console.log(this.msgverificaTreino());
        }
        else {
            this._ataque += contaAtaque;
            this._vida -= contaAtaqueVida;
            this._energia -= contaAtaqueVida;
        }
    };
    Heroi.prototype.treinoDefesa = function (tempoDefesa) {
        var contaDefesa = (tempoDefesa / 100) * 10;
        var contaDefesaVida = (tempoDefesa / 100) * 5;
        var contaDefesaEnergia = (tempoDefesa / 100) * 7;
        var VerificacaoDefesa = this._vida - contaDefesaVida;
        var VerificacaoDefesaEne = this._vida - contaDefesaEnergia;
        if (VerificacaoDefesa <= 0 || VerificacaoDefesaEne <= 0) {
            console.log(this.msgverificaTreino());
        }
        else {
            this._defesa += contaDefesa;
            this._vida -= contaDefesaVida;
            this._energia -= contaDefesaEnergia;
        }
    };
    Heroi.prototype.msgverificaTreino = function () {
        return ('\nMuito tempo de treino, isso acabara te matando!!!\n' +
            'Diminua o tempo ou vá descansar um pouco!');
    };
    Heroi.prototype.funDescansar = function (tempoDescanso) {
        var contaDescanso = (tempoDescanso / 100) * 10;
        this._vida += contaDescanso;
        this._energia += contaDescanso;
    };
    Heroi.prototype.minaCarvao = function () {
        console.log('Você escolheu trabalhar na Mina de Carvão.');
        if (this._vida < 16 || this._energia < 21) {
            console.log(this.msgtrabalho());
        }
        else {
            console.log(this.msgRecCarvao());
            this._vida -= 15;
            this._energia -= 20;
            this._dinheiro += 200;
        }
    };
    Heroi.prototype.msgRecCarvao = function () {
        return ('Recompensa: $200\n' +
            'Dano: -15 Vida\n' +
            'Dano: -20 Energia\n');
    };
    Heroi.prototype.coqueador = function () {
        console.log('Você escolheu trabalhar Coqueando Saco.');
        if (this._vida < 21 || this._energia < 26) {
            console.log(this.msgtrabalho());
        }
        else {
            console.log(this.msgRecCoqueador());
            this._vida -= 20;
            this._energia -= 25;
            this._dinheiro += 250;
        }
    };
    Heroi.prototype.msgRecCoqueador = function () {
        return ('Recompensa: $250\n' +
            'Dano: -20 Vida\n' +
            'Dano: -25 Energia\n');
    };
    Heroi.prototype.msgtrabalho = function () {
        return ('Energia ou Vida muito baixa, vá descansar antes de trabalhar');
    };
    Heroi.prototype.Uva = function () {
        if (this._dinheiro < 16) {
            console.log(this.msgAprimora());
        }
        else {
            console.log(this.msgUva());
            this._vida += 5;
            this._energia += 10;
            this._dinheiro -= 15;
        }
    };
    Heroi.prototype.msgUva = function () {
        return ('\nVocê comprou um Suco de Uva');
    };
    Heroi.prototype.Energetico = function () {
        if (this._dinheiro < 26) {
            console.log(this.msgAprimora());
        }
        else {
            console.log(this.msgEnergetico());
            this._vida += 15;
            this._energia += 20;
            this._dinheiro -= 25;
        }
    };
    Heroi.prototype.msgEnergetico = function () {
        return ('\n Você comprou um Energético');
    };
    Heroi.prototype.adrenalina = function () {
        if (this._dinheiro < 1000) {
            console.log(this.msgAprimora());
        }
        else {
            console.log(this.msgAdrenalida());
            this._vida += 100;
            this._energia += 100;
            this._dinheiro -= 1000;
        }
    };
    Heroi.prototype.msgAdrenalida = function () {
        return ('\nVocê comprou uma injeção de Adrenalina!');
    };
    Heroi.prototype.msgAprimora = function () {
        return ('Dinheiro insuficiente!');
    };
    Heroi.prototype.status = function () {
        return ('----------------------------------\n' +
            ("Nome      : " + this._nome + "\n") +
            ("Energia   : " + this._energia + "\n") +
            ("Vida      : " + this._vida + "\n") +
            ("Ataque    : " + this._ataque + "\n") +
            ("Defesa    : " + this._defesa + "\n") +
            ("Dinheiro  : " + this._dinheiro + "\n") +
            '----------------------------------');
    };
    Heroi.prototype.msgTreino = function () {
        return ('Não esqueça que Treinar é cansativo e acabara esgotando sua vida!');
    };
    Heroi.prototype.msgBemVindo = function () {
        return ('Bem Vindo ao Jogo!\n' +
            "Voc\u00EA \u00E9 o heroi e deve derrotar o vil\u00E3o\n" +
            "+==Vamos lhe apresentar o seu Personagem==+");
    };
    Heroi.prototype.msgMenuInicial = function () {
        return ('+=============Menu============+\n' +
            '|1. Treinar ataque            |\n' +
            '|2. Treinar defesa            |\n' +
            '|3. Trabalhar                 |\n' +
            '|4. Marketplace               |\n' +
            '|5. Descansar                 |\n' +
            '|6. Ver Personagem            |\n' +
            '|7. Batalhar                  |\n' +
            '|8+. sair                     |\n' +
            '+=============================+\n');
    };
    Heroi.prototype.msgMenuTrabalho = function () {
        return ('Escolha onde desja Trabalhar:\n' +
            '1. Mina Carvão (+$200, -15 vida e - 20 energia)\n' +
            '2. Coqueando Saco (+$250, -20 vida e - 25 energia)\n' +
            '3+. Desistir de trabalhar');
    };
    Heroi.prototype.msgMenuMarketplace = function () {
        return ('Bem vindo ao Marketplace\n' +
            '1. Suco de Uva = $ 15 (+5 vida e +10 energia)\n' +
            '2. Energético = $20 (+15 vida e +20 energia)\n' +
            '3. Adrenalina = $1000 (+100 vida e +100 energia)\n' +
            '4+. Sair');
    };
    Heroi.prototype.randomizar = function () {
        return 50 + Math.floor(Math.random() * 50);
    };
    return Heroi;
}(Vilao_1.Vilao));
exports.Heroi = Heroi;
