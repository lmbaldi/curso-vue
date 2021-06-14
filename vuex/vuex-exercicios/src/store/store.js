import Vue from 'vue'
import Vuex from 'vuex'
import carrinho from './modules/carrinho.js'
import parametros from './modules/parametros.js'
import * as getters from './getters'


Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        nome: 'Bianca',
        sobrenome: ' Cristina'
    },
    getters,
    modules: { carrinho, parametros }
})

