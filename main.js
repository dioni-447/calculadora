let valor = "0";
let produto1;
let ativado = true
let sinal;
let resultado;



function receberNumero(x) {
    if (valor === "0") {
        valor = x;
    } else {
        valor = valor + x;
        
    }
    console.log(valor);
    atualizarVisor();
    return valor;
}

function operacao(op) {
    produto1 = valor;
    valor = "0";
    sinal = op;
    atualizarVisor();
    atualizarExpressao();
    console.log(sinal);
    return sinal;
}

function atualizarVisor() {
    document.querySelector('.visor-valor').textContent = valor;
}


function atualizarExpressao(){
    document.querySelector('.visor-expressao').textContent = produto1 + sinal;
}

const teclado = document.querySelector('.teclado');
teclado.addEventListener('click', (event) => {
    const elementoClicado = event.target;
    const numero = elementoClicado.dataset.num;
    const ope = elementoClicado.dataset.op;
    const opcao = elementoClicado.dataset.action;
    if (numero) {
        receberNumero(String(numero));
    }
    else if (ope) {
        operacao(ope);
        ativado = false;
    }
    else if (opcao) {
        if (opcao == "clear") {
            valor = "0";
            produto1 = null;
            ativado = true;
            sinal = null;
            atualizarVisor();
            atualizarExpressao();
        }
        else if (opcao == "sign") {
            valor = -valor;
            atualizarVisor();
        }
        else if (opcao == "equal") {
            if (!ativado) {
                const n1=Number(produto1);
                const n2=Number(valor);
                if (sinal == "+") {
                    resultado = n1 + n2;
                }
                else if (sinal == "-") {
                    resultado = n1 - n2;
                }
                else if (sinal == "*") {
                    resultado = n1 * n2;
                }
                else {
                    if (n2 != 0) {
                        resultado = n1 / n2;
                    }
                }
            }
            valor = String(resultado);
            atualizarVisor();
        }
    }
})


