"use strict";
// string
let nome = 'João';
console.log(nome);
//nome = 28 --> aponta erro.
// numbers
let idade = 27;
// idade = 'Luiza' --> aponta erro
idade = 27.5;
console.log(idade);
//boolean
let possuiHobbies = false;
//possuiHobbies = 1 --> aponta erro
console.log(possuiHobbies);
//tipos explicitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'idade é 27' --> aponta erro
//Se a variável não for inicializada ou ter seu tipo definido será tratada como any (aceita ser alterada sem apontar erro)
let soma;
soma = 2;
let logico;
logico = true;
let texto;
texto = 'texto';
let qualquer;
qualquer = 'texto';
qualquer = 1;
let qualquer2;
qualquer2 = 2;
qualquer2 = 'texto2';
console.log(typeof soma);
console.log(typeof logico);
console.log(typeof texto);
console.log(typeof qualquer);
console.log(typeof qualquer2);
// array
let hobbies = ['Cozinhar', 'Praticar Esportes'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 5, 633]; //não aponta erro, pois o array foi declarado do tipo any
console.log(hobbies);
let numeros = [50, 23]; //criando um array de números e atribuindo valor
console.log(numeros);
// tuplas
// Em TypeScript, uma tupla é um tipo de array com comprimento fixo e tipos definidos para cada posição.
let pessoa;
pessoa = ["João", 30]; // ok
//pessoa = [30, "João"]; // erro: ordem e tipos errados
console.log(pessoa);
let endereco = ['Avenida Principal', 444];
console.log(endereco);
// enums
//Em TypeScript, um enum (abreviação de enumeration) é uma forma de definir um conjunto nomeado de valores constantes, facilitando a leitura e manutenção do código.
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho"; //Não gera problema nem erro duplicar o valor
})(Cor || (Cor = {}));
//A atribuição de valores é apenas para demonstração, porém o mais comum é deixar os valores sendo atribuídos de forma automática. 
var Status;
(function (Status) {
    Status[Status["Ativo"] = 0] = "Ativo";
    Status[Status["Inativo"] = 1] = "Inativo";
    Status[Status["Pendente"] = 2] = "Pendente";
})(Status || (Status = {}));
let s = Status.Ativo; // s = 0
// Características:
// Pode ser numérico (começa do 0 por padrão) ou string
// Ajuda a evitar valores mágicos no código (ex: "ativo", "inativo")
// Permite melhor autocompletar e validação de tipo
let minhaCor = Cor.Cinza;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Verde);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
//Exemplo com string enum:
(function (Cor) {
    Cor["Preto"] = "preto";
    Cor["Branco"] = "branco";
})(Cor || (Cor = {}));
// Exemplo com enum e switch:
var StatusPedido;
(function (StatusPedido) {
    StatusPedido[StatusPedido["Pendente"] = 0] = "Pendente";
    StatusPedido[StatusPedido["Processando"] = 1] = "Processando";
    StatusPedido[StatusPedido["Enviado"] = 2] = "Enviado";
    StatusPedido[StatusPedido["Entregue"] = 3] = "Entregue";
})(StatusPedido || (StatusPedido = {}));
function verificarStatus(status) {
    switch (status) {
        case StatusPedido.Pendente:
            console.log("O pedido está pendente.");
            break;
        case StatusPedido.Processando:
            console.log("O pedido está sendo processado.");
            break;
        case StatusPedido.Enviado:
            console.log("O pedido foi enviado.");
            break;
        case StatusPedido.Entregue:
            console.log("O pedido foi entregue.");
            break;
        default:
            console.log("Status desconhecido.");
    }
}
verificarStatus(StatusPedido.Enviado); // Saída: O pedido foi enviado.
// any - conversa com tipos dinâmicos. Não muito utilizada em TS. 
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
// funcões
function retornaMeuNome() {
    return nome; // variável nome criada e atribuida acima. 
    //return minhaIdade --> aponta erro, pois a variável minha idade retorna um number 
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
    // return minhaIdade; -> aponta erro, pois é do tipo void
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2.6, 4));
