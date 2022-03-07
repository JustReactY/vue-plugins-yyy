// import Vuex from 'vuex'
import Vue from 'vue'
import Vuex from './vuex.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        age: 12
    },
    getters: {
        lastAge(state) {
            return state.age + 1
        }
    },
    mutations: {  // 同步

    }, 
    actions: { // 异步

    },
    modules: {

    }
})