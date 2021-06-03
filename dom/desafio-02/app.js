new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert('Exibindo alerta')
        },
        alterarValor(event){
            this.valor = event.target.value
        }
    }
})