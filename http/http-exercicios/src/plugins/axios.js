import Vue from 'vue'
import axios from 'axios'
import baseUrl from '../constant_url'

// axios.defaults.baseURL = baseUrl.BASE_URL

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: baseUrl.BASE_URL
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method)
            return config
        }, error => Promisse.reject(error))

        Vue.prototype.$http.interceptors.response.use(res => {
            const array = []
            // for (let chave in res.data) {
            //     array.push({ id: chave, ...res.data[chave] })
            // }
            // res.data = array
            return res
        }, error => Promisse.reject(error))
    }
})