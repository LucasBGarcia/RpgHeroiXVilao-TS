"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = __importDefault(require("prompt-sync"));
var luta_1 = require("./luta");
var Heroi_1 = require("./Heroi");
var Vilao_1 = require("./Vilao");
var teclado = prompt_sync_1.default();
var heroi = new Heroi_1.Heroi(teclado("Qual nome do Heroi? "), 50, 50, 50, 50);
var vilao = new Vilao_1.Vilao(teclado("Qual Nome do Vil\u00E3o? "), heroi.randomizar(), heroi.randomizar(), heroi.randomizar(), heroi.randomizar());
var batalha = new luta_1.Batalha(heroi, vilao);
console.clear();
console.log(heroi.msgBemVindo());
console.log(heroi.status());
var Option = 0;
while (Option < 8) {
    console.log(heroi.msgMenuInicial());
    Option = +teclado('Opção: ');
    switch (Option) {
        case 1:
            console.clear();
            console.log(heroi.msgTreino());
            var tempoA = +teclado("Quanto tempo deseja treinar(em minutos)?");
            heroi.TreinoAtaque(tempoA);
            break;
        case 2:
            console.clear();
            console.log(heroi.msgTreino());
            var tempoD = +teclado("Quanto tempo deseja treinar(em minutos)?");
            heroi.treinoDefesa(tempoD);
            break;
        case 3:
            console.clear();
            var opcaoTrab = 0;
            while (opcaoTrab < 3) {
                console.log(heroi.msgMenuTrabalho());
                opcaoTrab = +teclado('Opção: ');
                if (opcaoTrab == 1) {
                    heroi.minaCarvao();
                    break;
                }
                else if (opcaoTrab == 2) {
                    heroi.coqueador();
                    break;
                }
                else {
                    break;
                }
            }
            break;
        case 4:
            console.clear();
            var opcaoAprimora = 0;
            while (opcaoAprimora < 4) {
                console.log(heroi.msgMenuMarketplace());
                opcaoAprimora = +teclado('Opção: ');
                if (opcaoAprimora == 1) {
                    heroi.Uva();
                    break;
                }
                else if (opcaoAprimora == 2) {
                    heroi.Energetico();
                    break;
                }
                else if (opcaoAprimora == 3) {
                    heroi.adrenalina();
                    break;
                }
                else {
                    break;
                }
            }
            break;
        case 5:
            console.clear();
            console.log('Descanse para recuperar sua vida e sua energia!');
            var tDescanso = +teclado("Quanto tempo deseja Descansar(em minutos)? ");
            heroi.funDescansar(tDescanso);
            break;
        case 6:
            console.clear();
            console.log(heroi.status());
            break;
        case 7:
            console.clear();
            console.log(heroi.status());
            if (batalha.luta() == true) {
                console.log('Parabens, você venceu!');
                var vilao_1 = new Vilao_1.Vilao((teclado("Qual Nome do novo Vil\u00E3o? ")), (100 + Math.floor(Math.random() * 100)), (100 + Math.floor(Math.random() * 100)), (100 + Math.floor(Math.random() * 100)), (100 + Math.floor(Math.random() * 100)));
            }
            else {
                console.log('Você foi derrotado, treine mais e volte para o campo de batalha!');
            }
            break;
        default:
            break;
    }
}
