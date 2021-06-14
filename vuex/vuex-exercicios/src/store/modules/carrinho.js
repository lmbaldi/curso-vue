export default {
    state: {
        produtos: [],
    },
    getters: {
        valorTotal(state) {
            return state.produtos
                .map((p) => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0);
        },
    },
    mutations: {
        adicionarProduto(state, payload) {
            state.produtos.push(payload)
        },

    },
    actions: {
        //adicionarProduto(context, payload) {
        //destructuring expoe o  metodo para fora do objto
        adicionarProduto({ commit }, payload) {
            //setTimeout(() => {
            //context.commit('adicionarProduto', payload)
            commit('adicionarProduto', payload)
            //    }, 1000)
        }
    }
}