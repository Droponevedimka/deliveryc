export const getters = {
    getResult: (state, getters) => () => {
        return state.result
    },
    getPromo: (state, getters) => () => {
        return state.promo
    }
}
