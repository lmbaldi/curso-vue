import Vue from 'vue'
import axios from 'axios'
import  baseUrl from '../constant_url' 

axios.defaults.baseURL = baseUrl.BASE_URL

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios
    }
})