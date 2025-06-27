// string
let nome = 'João'
console.log(nome)
//nome = 28 --> aponta erro.

// numbers
let idade = 27
// idade = 'Luiza' --> aponta erro
idade = 27.5
console.log(idade)

//boolean
let possuiHobbies = false
//possuiHobbies = 1 --> aponta erro
console.log(possuiHobbies)

//tipos explicitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
// minhaIdade = 'idade é 27' --> aponta erro


//Se a variável não for inicializada ou ter seu tipo definido será tratada como any (aceita ser alterada sem apontar erro)
let soma: number
soma = 2
let logico: boolean
logico = true
let texto: string
texto = 'texto'
let qualquer: any
qualquer = 'texto'
qualquer = 1
let qualquer2
qualquer2 = 2
qualquer2 = 'texto2'
console.log(typeof soma);
console.log(typeof logico);
console.log(typeof texto);
console.log(typeof qualquer);
console.log(typeof qualquer2);

// array
let hobbies: any[] = ['Cozinhar', 'Praticar Esportes']
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [100, 5, 633] //não aponta erro, pois o array foi declarado do tipo any
console.log(hobbies);

let numeros: number[] = [50, 23] //criando um array de números e atribuindo valor
console.log(numeros);

// tuplas
// Em TypeScript, uma tupla é um tipo de array com comprimento fixo e tipos definidos para cada posição.
let pessoa: [string, number];
pessoa = ["João", 30]; // ok
//pessoa = [30, "João"]; // erro: ordem e tipos errados
console.log(pessoa);


let endereco: [string, number] = ['Avenida Principal', 444]
console.log(endereco)

// enums
//Em TypeScript, um enum (abreviação de enumeration) é uma forma de definir um conjunto nomeado de valores constantes, facilitando a leitura e manutenção do código.
enum Cor {
    Cinza, //0
    Verde = 100, //100
    Azul = 10,  //10
    Laranja, // 11
    Amarelo, // 12
    Vermelho = 100 //Não gera problema nem erro duplicar o valor
}

//A atribuição de valores é apenas para demonstração, porém o mais comum é deixar os valores sendo atribuídos de forma automática. 

enum Status {
    Ativo,
    Inativo,
    Pendente
}
let s: Status = Status.Ativo; // s = 0

// Características:
// Pode ser numérico (começa do 0 por padrão) ou string
// Ajuda a evitar valores mágicos no código (ex: "ativo", "inativo")
// Permite melhor autocompletar e validação de tipo

let minhaCor: Cor = Cor.Cinza
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Verde);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);

//Exemplo com string enum:
enum Cor {
    Preto = "preto",
    Branco = "branco",
}

// Exemplo com enum e switch:

enum StatusPedido {
  Pendente,
  Processando,
  Enviado,
  Entregue
}

function verificarStatus(status: StatusPedido) {
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
let carro: any = 'BMW'
console.log(carro);
carro = { marca: 'BMW', ano: 2019 }
console.log(carro);

// funcões
function retornaMeuNome(): string { //funcao tipada como string
    return nome // variável nome criada e atribuida acima. 
    //return minhaIdade --> aponta erro, pois a variável minha idade retorna um number 
}
console.log(retornaMeuNome());

function digaOi(): void { //Como não retorna nada pode ser tipada como void
    console.log('Oi');
    // return minhaIdade; -> aponta erro, pois é do tipo void
}

digaOi()

function multiplicar(numA: number, numB: number): number {
    return numA * numB;
}
console.log(multiplicar(2.6,4));

const teste = function (a: number, b: number) : boolean {
    if (a > b){
        return false
    }else{
        return true
    }
}
console.log(teste(1,5));

//tipo funcao
let calculo: (numeroA: number, numeroB: number) => boolean
//calculo = digaOi  -> aponta erro
//calculo = multiplicar -> aponta erro
calculo = teste   
console.log(calculo(5,1)); //valor false
