


class Botao {
  constructor(simboloDoBotao, idDoBotao, classeDoBotao, itemPai) {
    let botao = document.createElement("li");
    let botaoMaisPressionado = false;
    this.memoria = [];
    this.total=0;
    botao.setAttribute("id", idDoBotao);
    botao.setAttribute("class", classeDoBotao);
    botao.innerText = simboloDoBotao;

    botao.addEventListener("click", () => {
      this.escreveDisplay(simboloDoBotao);
    });
    itemPai.appendChild(botao);


  }
  escreveDisplay(simboloDoBotao) {
    if(!Botao.botaoMaisPressionado){
      let display = document.getElementById("display");
      display.innerText += simboloDoBotao;
    }else {
      display.innerText =simboloDoBotao
    }
    }
    
}

class Soma extends Botao {
  
  
  escreveDisplay(simboloDoBotao) {
    
    let valorDoDisplay = Number(document.getElementById("display").innerText);
    

    if (Botao.botaoMaisPressionado) {
      this.memoria.push(valorDoDisplay);
      console.log('Essa é a segunda: '+this.memoria);
     this.total = somar(this.memoria)
     
      display.innerText = this.total;
     
    } else {
     this.memoria.push(valorDoDisplay);
      console.log("Essa é primeira passada: " + this.memoria);
      display.innerText = "";
      Botao.botaoMaisPressionado = true;
    }
    
  }


}

let teste = document.getElementById("numeros");
let BotaoUm = new Botao("1", "botUm", "botao", teste);
let BotaoDeMais = new Soma("+", "botMais", "botao", teste);




function somar(item) {
  let total=0;
  for( let i in item){
    
    total = total +item[i];
    
  }
 return total;
 
}