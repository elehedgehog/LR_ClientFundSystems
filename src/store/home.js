const state = {
  userInfo: { name: 'aa' },
}
const mutations = {
  setUserInfo (state, options) {
    state.userInfo = options.userInfo
  },
}
const actions = {
  setUserInfo ({commit}, options) { commit('setUserInfo', options) }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
