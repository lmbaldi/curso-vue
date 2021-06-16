import Vue from 'vue'
import axios from 'axios'
import baseUrl from '../constant_url'

Vue.use({
    intall(Vue){
        Vue.prototype.$http = axios.create({
            baseURL: baseUrl.BASE_URL
        })
    }
})