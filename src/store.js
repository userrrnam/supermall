import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        counter:100
    },
    mutations:{
        addcrement(state){
            state.counter+=5
        }
    },
    getters:{
        add10crement(state){
            return state.counter*state.counter
        }
    },
    actions:{

    },
    modules:{

    }


})
