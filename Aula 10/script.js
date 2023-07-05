var x = 5;
var y = 6;
var z = x + y;
console.log("Valor de X:",X,"Valor de y:", y, "Valor de Z:", z);

//Var - let - const: var saiu de linha e entrou o let

var nome = "john doe";
var nome = "jose";
//representação do erro 

let name = "john doe";
let name = "john doe"; //SyntaxError: "Name" has already been declared

//Com a let, possui outra funcionalidade importante, que é o escopo de blocos

{
    let x = 2;
}

console.log(x);

//Não pode ser utilizado fora do escopo

{
    var x = 2;    
}

console.log(x);

//? Como isso pode impactar nosso código
var x = 10
//Aqui o X = 10
{
    var x=2
    //Aqui o X = 2
}
   //Aqui o X = 2

   // com a let

   let x = 10 

   //aqui o x = 10 
   {
    let x = 2;
    //Aqui o X = 2
    console.log(x)
   }
    console.log(x)
   //Aqui o X = 10

   // Principais diferenças entre let e var:
   // var é possivel atualizar e redeclarar a informação
   // let não  é possivel atualizar e redeclarar a informação

   //! Const
   const pi = 3.1415
   pi = 3.15; //erro
   const pi = 3.16 //erro

   //const não podemos alterar redeclarar e nem modificar
   //const não pode ser alterada, nunca. 

   //! Operador de Atribuição "="
   let num = 2; //atribuindo ao number o valor de 2
   num == 3 ; //verifica se o valor de num é igual a 3 (true or false)
   num === 4; // Exatamente igual;

   console.log(num == 3); //false
   console.log(num == 2); //true

   //! Tipagem de dados
   let nome = "João" //Tipo string
//'' string normal
//""string normal
//`meu nome é ${nome}` > meu nome é João. 

   let number = 2 //Tipo number
   let numberDecimal = 2.5 // Tipo number decimal
   let verificado = true //boolean = Verdadeiro
   let notVerificado = false //boolean = Falso
   let test;

   console.log(test); //tipo undefined = indefinido
   console.log(testNull); //tipo null = vazio


   //É possivel declarar mais de uma variavel em uma intrução
   let car = "gol";
   let dono = "John Doe";
   let preco = 200

   let car = 'gol', dono = 'John Doe', preco = 200;

   let moto = 'honda', dono = 'John Doe', preco = 200;

   // Tipo objeto

   let carro1 = {
    nome = "gol",
    dono = "John Doe",
    preco = 200,
   }

   let carro2 = {
    nome = "gol",
    dono = "John Doe",
    preco = 300,
   }

   let moto = {
    1:{
        nome = "honda",
        dono = "John Doe",
        preco = 300,
        }
    2:{
        nome = "honda",
        dono = "John Doe",
        preco = 400,
        }

   }