import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        priceFrom:  1,
        priceTo: 100,
        results: []
    }
});

export default store;