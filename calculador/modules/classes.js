
 class Botao {
    constructor(simboloDoBotao, idDoBotao, classeDoBotao, local, tela, Armaz) {
      let tecla = document.createElement("button");
      tecla.setAttribute("id", idDoBotao);
      tecla.setAttribute("class", classeDoBotao);
      tecla.innerText = simboloDoBotao;
      local.appendChild(tecla);
  
      tecla.addEventListener("click", () => {
        this.apareceDisplay(simboloDoBotao, tela, Armaz);
      });
    }
  
    apareceDisplay(simboloDoBotao, tela) {
      Armaz.setMemoriaDigitos(simboloDoBotao);
      tela.setInnerText(simboloDoBotao);
    }
  }
  
  class Operacao {
    constructor(simboloDoBotao, idDoBotao, classeDoBotao, local, tela, Armaz) {
      let tecla = document.createElement("button");
      tecla.setAttribute("id", idDoBotao);
      tecla.setAttribute("class", classeDoBotao);
      tecla.innerText = simboloDoBotao;
      local.appendChild(tecla);
  
      tecla.addEventListener("click", () => {
        this.apareceDisplay(simboloDoBotao, tela, Armaz);
      });
    }
  
    apareceDisplay(simboloDoBotao, tela, Armaz) {
      Armaz.setMemoriaOperacao(simboloDoBotao);
      Armaz.concatenaMemoria();
      tela.setInnerText(simboloDoBotao); // escrever a operação
    }
  }
  
  class AC extends Botao {
    apareceDisplay(_, tela, Armaz) {
      Armaz.limpaMemoria();
      tela.limpaTela();
      console.clear();
    }
  }
  
  class Igual extends Operacao {
    apareceDisplay(simboloDoBotao, tela, Armaz) {
      Armaz.concatenaMemoria();
      tela.limpaTela(""); // escrever a operação
      let resultado = Armaz.calculaResultadoFinal();
      tela.setInnerText(resultado);
      Armaz.limpaMemoria();
      Armaz.setMemoriaNumeros(resultado);
    }
  }
  
  class Memoria {
    constructor() {
      this.memoriaDigitos = [];
      this.mememoriaNumeros = [];
      this.memoriaOperacao = [];
    }
  
    setMemoriaDigitos(numero) {
      // adiciona um numero a lista de digitos
      this.memoriaDigitos.push(numero);
      //console.log("Armazenado na memoria " + this.memoriaDigitos);
    }
  
    setMemoriaOperacao(operacao) {
      // adiciona um simbolo de operação na lsita de operações
      this.memoriaOperacao.push(operacao);
      //console.log("Operação na memoria " + this.memoriaOperacao);
    }
  
    setMemoriaNumeros(numero) {
      // adiciona um simbolo de operação na lsita de operações
      this.mememoriaNumeros.push(numero);
      //console.log("Operação na memoria " + this.memoriaOperacao);
    }
  
    concatenaMemoria() {
      //junta todos os digitos e forma um numero e adiciona na lista de Numeros
      let numeroFinal = "";
      for (let elemento of this.memoriaDigitos) {
        numeroFinal += elemento;
      }
      this.memoriaDigitos = [];
      if (numeroFinal != "") {
        this.mememoriaNumeros.push(Number(numeroFinal));
      }
  
      //console.log("Armazenado na memoria Final " + this.mememoriaNumeros);
    }
    limpaMemoria() {
      //limpa memoria
      this.memoriaDigitos = [];
      this.mememoriaNumeros = [];
      this.memoriaOperacao = [];
    }
  
    getMemoria() {
      // retorna lista de numeros e operacoes
      return [this.mememoriaNumeros, this.memoriaOperacao];
    }
  
    calculaResultadoFinal() {
      //TODO : Fazer For com memoriaNumero e MEmoria operações
      //memoriaNumero[i] MemoriaOperacoes[i] memoriaNumero[i+1]
  
      let resultadoAux = 0;
  
      console.log(this.memoriaOperacao);
      console.log(this.mememoriaNumeros);
  
      let qtdOperacoes = this.memoriaOperacao.length;
  
      for (let i = 0; i < qtdOperacoes; i++) {
        if (this.memoriaOperacao[i] == "/") {
          let numerador = this.mememoriaNumeros[i];
          let denominador = this.mememoriaNumeros[i + 1];
  
          console.log("num " + numerador);
          console.log("den " + denominador);
  
          resultadoAux = numerador / denominador;
          this.mememoriaNumeros.splice(i, 1); //retira numero depois de efetuar
          this.mememoriaNumeros[i] = resultadoAux; //substitui numero restante da operaçao pelo resultado
          this.memoriaOperacao.splice(i, 1); //retira operaçao depois de efetua-la
  
          //console.log(this.mememoriaNumeros)
  
          //colocar tratamento de erro para divisao por 0
        }
  
        if (this.memoriaOperacao[i] == "x") {
          let num1 = this.mememoriaNumeros[i];
          let num2 = this.mememoriaNumeros[i + 1];
          resultadoAux = num1 * num2;
          this.mememoriaNumeros.splice(i, 1); //retira numero depois de efetuar
          this.mememoriaNumeros[i] = resultadoAux; //substitui numero restante da operaçao pelo resultado
          this.memoriaOperacao.splice(i, 1); //retira operaçao depois de efetua-la
  
          //console.log(this.mememoriaNumeros)
        }
      }
  
      for (let i = 0; i < qtdOperacoes; i++) {
        if (this.memoriaOperacao[i] == "+") {
          resultadoAux = this.mememoriaNumeros[i] + this.mememoriaNumeros[i + 1];
          this.mememoriaNumeros.splice(i, 1); //retira numero depois de efetuar
          this.mememoriaNumeros[i] = resultadoAux; //substitui numero restante da operaçao pelo resultado
          this.memoriaOperacao.splice(i, 1); //retira operaçao depois de efetua-la
  
          //console.log(this.mememoriaNumeros)
        }
  
        if (this.memoriaOperacao[i] == "-") {
          resultadoAux = this.mememoriaNumeros[i] - this.mememoriaNumeros[i + 1];
          this.mememoriaNumeros.splice(i, 1); //retira numero depois de efetuar
          this.mememoriaNumeros[i] = resultadoAux; //substitui numero restante da operaçao pelo resultado
          this.memoriaOperacao.splice(i, 1); //retira operaçao depois de efetua-la
  
          //console.log(this.mememoriaNumeros)
        }
      }
  
      return resultadoAux;
    }
  }
  
  class Display {
    constructor() {
      this.tela = document.getElementById("display");
    }
  
    getHTML() {
      return this.tela;
    }
  
    getInnerText() {
      return this.getHTML().innerText;
    }
    setInnerText(texto) {
      this.getHTML().innerText += texto;
    }
    limpaTela() {
      this.getHTML().innerText = "";
    }
  }

 