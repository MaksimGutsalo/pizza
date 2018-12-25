<template>
    <div class="button-group">
        <button v-for="p in pagination.pages" @click.prevent="setPage(p)"> {{ p }}</button>
    </div>
</template>
<script>
import VueLodash from 'vue-lodash'
export default {
    components: {
     VueLodash
    },
    props: {
        products: {
            type: Array,
        }
    },
    data() {
        return {
            products,
            perPage: 6,
            pagination: {}
        };
    },
    computed: {
        collection() {
            return this.paginate(this.products);
        }
    },
    methods: {
        setPage(page) {
            this.pagination = this.paginator(this.products.length, p);
        },
        paginate(products) {
            return _.slice(products, this.pagination.startIndex, this.pagination.endIndex + 1)
        },
        paginator(totalItems, currentPage) {
            var startIndex = (currentPage - 1) * this.perPage,
            endIndex = Math.min(startIndex + this.perPage, totalItems -1 );
            return {
                currentPage: currentPage,
                startIndex: startIndex,
                endIndex: endIndex,
                pages: _.range(1, Math.ceil(totalItems / this.perPage) + 1)
            };
        }
    },
    created() {
        this.setPage(1);
    }

}
</script>
