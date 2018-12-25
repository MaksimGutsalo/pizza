import Vue from 'vue'
import App from './App.vue'
import _ from 'lodash';
import store from '../src/components/shopingFiltersStates';
new Vue({
  el: '#app',
  render: h => h(App),
  store: store,
  methods: {
    fetchData: _.debounce(function () {
        this.$http.get('widgets/quickfindordernumber/' + this.quickFindOrderNumber).then(function (response) {
            console.log(response.body)
        }, function (error) {
            console.log(error);
        });
    }, 500)
}
})