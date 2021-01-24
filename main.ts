import prompt from "prompt-sync";

import { Batalha } from "./luta";
import { Heroi } from "./Heroi"
import { Vilao } from "./Vilao"

let teclado = prompt()

let heroi: Heroi = new Heroi(teclado(`Qual nome do Heroi? `), 50, 50, 50, 50)
let vilao: Vilao = new Vilao(teclado(`Qual Nome do Vilão? `), heroi.randomizar(),heroi.randomizar(), heroi.randomizar(), heroi.randomizar())
let batalha = new Batalha(heroi, vilao)


console.clear();
console.log(heroi.msgBemVindo())
console.log(heroi.status());

let Option: Number = 0

while (Option < 8) {
    console.log(heroi.msgMenuInicial())
    Option = +teclado('Opção: ')
    switch (Option) {
        case 1:
            console.clear();
            console.log(heroi.msgTreino());
            let tempoA = +teclado(`Quanto tempo deseja treinar(em minutos)?`);
            heroi.TreinoAtaque(tempoA);
            break
        case 2:
            console.clear();
            console.log(heroi.msgTreino());
            let tempoD = +teclado(`Quanto tempo deseja treinar(em minutos)?`);
            heroi.treinoDefesa(tempoD);
            break
        case 3:
            console.clear();
            let opcaoTrab: Number = 0
            while (opcaoTrab < 3) {
                console.log(heroi.msgMenuTrabalho());
                opcaoTrab = +teclado('Opção: ')
                if (opcaoTrab == 1) {
                    heroi.minaCarvao()
                    break
                } else if (opcaoTrab == 2) {
                    heroi.coqueador()
                    break
                } else {
                    break
                }
            }

            break
        case 4:
            console.clear();
            let opcaoAprimora: Number = 0
            while (opcaoAprimora < 4) {
                console.log(heroi.msgMenuMarketplace());
                opcaoAprimora = +teclado('Opção: ')
                if (opcaoAprimora == 1) {
                    heroi.Uva()
                    break
                } else if (opcaoAprimora == 2) {
                    heroi.Energetico()
                    break
                } else if (opcaoAprimora == 3) {
                    heroi.adrenalina()
                    break
                } else {
                    break
                }
            }
            break
        case 5:
            console.clear();
            console.log('Descanse para recuperar sua vida e sua energia!');
            let tDescanso = +teclado(`Quanto tempo deseja Descansar(em minutos)? `)
            heroi.funDescansar(tDescanso);
            break
        case 6:
            console.clear();
            console.log(heroi.status());
            break
        case 7:
            console.clear();
            console.log(heroi.status());
              if (batalha.luta() == true) {
                console.log('Parabens, você venceu!');
                let vilao: Vilao = new Vilao((teclado(`Qual Nome do novo Vilão? `)), (100 + Math.floor(Math.random() * 100)), (100 + Math.floor(Math.random() * 100)), (100 + Math.floor(Math.random() * 100)), (100 + Math.floor(Math.random() * 100)))
                } else {
                    console.log('Você foi derrotado, treine mais e volte para o campo de batalha!');
                }
            break
        default:
            break;

    }
}
