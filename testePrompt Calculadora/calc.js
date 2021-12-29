var input = document.getElementById('calculator');
input.addEventListener('keyup', calcular);

function calcular(e) {
    calculadora(e.target.value);
}
var conta = 0;
var operadores = ['*', '/', '+', '-', ];
var operacoes = [

function (a, b) {
    return a * b;
},

function (a, b) {
    return a / b;
},

function (a, b) {
    return a + b;
},

function (a, b) {
    return a - b;
}];
var stop = 0;

function resolverParentesis(eq) {
    return eq.replace(/\(.*\)/, function (match) {
        return calculadora(match.substring(1, match.length - 1));
    });
}

function calculadora(pedido) {
    if (pedido.match(/[*\/+\-]$/)) return;
    var pedido = pedido.replace(/\s/g, '');
    pedido = resolverParentesis(pedido);
    if (!/[*\/+\-]/.test(pedido)) return resultado(pedido);
    var regex = /[*\/]/.test(pedido) ? new RegExp("([^\/*+\-]*[*\/][^\/*+\-]*)") : new RegExp("([^\/*+\-]*[+\-][^\/*+\-]*)");
    pedido = processar(pedido, regex);
    if (/[*\/+\-]/.test(pedido)) return calculadora(pedido);
    return resultado(pedido);
}

function processar(input, regex) {
    return input.replace(regex, function (str) {
        var op = str.match(/([*\/+\-])/)[0];
        var pedacos = str.split(op);
        var fn = operacoes[operadores.indexOf(op)];
        return fn(pedacos[0] * 1, pedacos[1] * 1);
    });
}

function resultado(conta){
    var result = document.getElementById('result');
    result.innerHTML = conta
}