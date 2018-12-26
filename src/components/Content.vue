<template>
  <section class="content">
    <section class="filter">
      <div class="sort-type">
        <span class="filter-title">Sort:</span>
        <div class="filter-wrap" @click="showDropdown">
        <div class="selcet-item">{{ defaultValue }} <span class="chevron"></span></div>
            <ul class="dropdown-wrap" v-show="dropdowOn">
                <li class="dropdown-item" v-for="liItem in arrayOfObjects" @click="onChange($event);">{{ liItem.name }}</li>
            </ul>
        </div>
      </div>
      <div class="view-type">
        <a class="list-type" v-bind:class="{ 'active': layout == 'list'}" v-on:click="layout = 'list'"></a>
        <a class="tile-type" v-bind:class="{ 'active': layout == 'tile'}" v-on:click="layout = 'tile'"></a>
      </div>
    </section>
    <section v-if="layout == 'tile'" class="products-wrap tile">
       <ProductItem v-for="product in filterCatalog" :key="product.id"
        :product="product" v-if="product"></ProductItem>
    </section>
    <section v-if="layout == 'list'" class="products-wrap list">
       <ProductItem v-for="product in filterCatalog" :key="product.id"
        :product="product"></ProductItem>
    </section>
    <ul class="pagination">
        <li v-for="pageNumber in totalPages" v-if="Math.abs(pageNumber - currentPage) < 2 || pageNumber == totalPages || pageNumber == 1">
            <a v-bind:key="pageNumber" href = "javascript:void(0);" @click="setPage(pageNumber)" :class="{current: currentPage === pageNumber, last: (pageNumber == totalPages && Math.abs(pageNumber - currentPage) > 2), first:(pageNumber == 1 && Math.abs(pageNumber - currentPage) > 3)}">{{ pageNumber }}</a>
        </li>
    </ul>
    <div class="shopping-cart-popup" v-if="poupOn.visible">
        <shopping-cart></shopping-cart>
    </div>
  </section>
</template>

<script>
  import ProductItem from "./Product.vue";
  import ShoppingCart from "./ShoppingCart.vue";
  import Catalog from "./catalog.js";
  import State from './shoppingCartState';
  export default {
    components: {
        ProductItem,
        ShoppingCart
    },
    data() {
        return {
            products: Catalog,
            currentPage: 1,
            itemsPerPage: 6,
            resultCount: 0,
            layout: 'tile',
            arrayOfObjects: [
                {name: 'Popular'},
                {name: 'Price up'},
                {name: 'Price down'}
            ],
            defaultValue: 'Popular',
            dropdowOn: false,
            poupOn: State.data
        }
    },
    computed: {
        sortCatalog () {
            switch(this.defaultValue) {
                case this.arrayOfObjects[1].name:
                    return this.orderedProdsASC();
                break;
                case this.arrayOfObjects[2].name:
                    return this.orderedProdsDesc();
                break;
                case this.arrayOfObjects[0].name:
                    return this.orderedProdsPopularityASC();
                break;
                default:
                    return this.orderedProdsPopularityASC();
                break;
            }
        },

        totalPages() {
            return Math.ceil(this.products.length / this.itemsPerPage);
        },
        paginate() {
            this.resultCount = this.sortCatalog.length;
            if (this.currentPage >= this.totalPages) {
                this.currentPage = this.totalPages;
            }
            let index = this.currentPage * this.itemsPerPage - this.itemsPerPage;
            return this.sortCatalog.slice(index, index + this.itemsPerPage);
        },
        filterCatalog() {
            let priceFirst = this.$store.state.priceFrom;
            let priceSecond = this.$store.state.priceTo;
            let filterResult;
            return filterResult = this.paginate.map( product => {
                if(typeof product == 'object') {
                    return (product.price >= priceFirst) && (product.price <= priceSecond) ? product : undefined ;
                    
                }
            });
        },
    },
    methods: {
        orderedProdsDesc () {
            return _.orderBy(this.products, 'price').reverse();
        },
        orderedProdsASC () {
            return _.orderBy(this.products, 'price');
        },
        orderedProdsPopularityASC () {
            return _.orderBy(this.products, 'id');
        },
        productsCount() {
            return this.products.length
        },
        onChange(event) {
            this.defaultValue = event.target.textContent;
        },
        setPage (pageNumber) {
            this.currentPage = pageNumber;
        },
        showDropdown () {
            this.dropdowOn = !this.dropdowOn
        }
    }
  }
</script>
