import { createStore } from 'vuex'

export default createStore({
  state: {
    errlist: []
  },
  mutations: {
    addErr(state, errs) {
      state.errlist.push({
        show: errs[0],
        type: errs[1],//danger
        message: errs[2]
      })
    },
    delErr(state){
      state.errlist=[]
    }
  },
  actions: {
    addErr(context, errs) {
      context.commit('addErr', errs)
      setTimeout(() => {
        context.commit('delErr')
      }, 1000)
    }
  }
})
