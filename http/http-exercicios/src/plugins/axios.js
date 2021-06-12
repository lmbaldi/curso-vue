import Vue from 'vue'
import axios from 'axios'
import  baseUrl from '../constant_url' 

// axios.defaults.baseURL = baseUrl.BASE_URL

Vue.use({
    install(Vue){
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: baseUrl.BASE_URL
        })

        Vue.prototype.$http.interceptors.request.use( config => {
            console.log(config.method)
            return config
        })
    }
})