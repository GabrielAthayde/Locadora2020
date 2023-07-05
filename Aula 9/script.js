function changeParagraph() {
    document.getElementById('paragraph').innerHTML = "Texto Alterado";
    console.log("Funcionou");
}

// Para comentar tem esses dois jeitos "//" or "/*bla bla bla*/"

function changeNumber(title) {
document.getElementById("number").innerHTML = `${title}`;
console.log("Funcionou");
}

//é a crase ali no `${title}`

function showMyName(MyName) {
    document.getElementById("name").innerHTML = `${MyName}`;
    console.log("Funcionou");
    }

    //Mostar o nome`

function showAlert() {
        window.alert("Alerta");

    }

        //Função de aviso`
/*
var  color = "vermelho";
var color = "verde";
color = "roxo";

function changeColor(){
color = "marrom"
console.log(color);
}

//Processo de Hoisting
console.log(color);
var color = "marrom";

//Let letcolor ="roxo" Não é possível redefinir, só atualizar a variavel. 

let letColor = "verde";
letColor = "roxo"; //atualizar
console.log(letColor);

let sayHi = "Olá"
function sayHello(){
    let sayHi = "Olá, tudo bem?";

    console.log(sayHi);
}

// Const - valor constante, nunca atualiza a informação. Depois que pega o valor, não muda mais. 

const color = "marrom"
const color = "verde" //não atualiza para verde,será sempre marrom.
color = "roxo" //não funciona

{
const color = "verde"
console.log(color)
//não vai funcionar pq foi definido antes a cor
}

*/