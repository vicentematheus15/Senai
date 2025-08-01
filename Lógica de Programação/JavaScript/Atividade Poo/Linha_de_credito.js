const Conta_bancaria = require('./Conta_bancaria')
class Linha_de_credito extends Conta_bancaria{
    constructor(nome, sobrenome, CPF, tipo_conta, limite_credito, valor_fatura, saldo){
        super(nome, sobrenome, CPF, tipo_conta, limite_credito, saldo)
        this._limite_credito = limite_credito
        this._valor_fatura = valor_fatura
    }
    get limite_credito(){
        return this._limite_credito
    }
    set limite_credito(limite_credito){
        this._limite_credito = limite_credito
    }
    get valor_fatura(){
        return this._valor_fatura
    }
    set valor_fatura(valor_fatura){
        this._valor_fatura = valor_fatura
    }
    imprimirDados(){  
        return `${this._nome} ${this._sobrenome}\n${this._CPF}\n${this._tipo_conta}\n${this._limite_credito}\n${this.valor_fatura}\n${this._saldo}`
    }
    deposito(saldoAtual, valorDepositado){
        let novoSaldo = saldoAtual + valorDepositado
        return `Saldo anterior: R$${saldoAtual.toFixed(2)}\nValor depositado: R$${valorDepositado.toFixed(2)}\nSaldo atual: R$${novoSaldo.toFixed(2)}`
    }
    saque(saldoAtual, valorSaque){
        if(saldoAtual >= valorSaque){
            let novoSaldo = saldoAtual - valorSaque
            return `Saldo anterior: R$${saldoAtual.toFixed(2)}\nValor saque: R$${valorSaque.toFixed(2)}\nSaldo atual: R$${novoSaldo.toFixed(2)}`
        }else{
            return `Saldo insuficiente para saque!`
        }
    }
    restoLimite(limiteCredito, valorFatura){
        if(valorFatura < limiteCredito){
            let limiteRestante = limiteCredito - valorFatura
            return `Você ainda tem R$${limiteRestante.toFixed(2)} de limite no crédito`
        } else{
            return `Você não tem mais limite disponível no crédito!`
        }
    }
    pagarFatura(saldoAtual, valorFatura){
        if(saldoAtual >= valorFatura){
            return `Você tem saldo suficiente para pagar sua fatura!`
        }else{
            return `Você não tem saldo suficiente para pagar sua fatura!`
        }
    }
}
module.exports = Linha_de_credito