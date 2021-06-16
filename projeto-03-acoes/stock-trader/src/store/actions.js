import Vue from 'vue'

export default {

    loadData({ commit }) {
        console.log("loadData")
        Vue.prototype.$http.get('data.json').then(response => {
            const data = response.data;
             // eslint-disable-next-line no-console
            console.log(data)
            if (data) {
                commit('setStocks', data.stocks);
                commit('setPortfolio', {
                    funds: data.funds,
                    stockPortfolio: data.stockPortfolio,
                })
            }
        })
    }
}

//{commit} chamas todas mutations