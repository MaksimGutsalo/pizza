<template>
    <div class="product-item">
        <div class="top-group">
            <div class="category">
                <div v-for="cat in product.category" v-bind:class="[cat.catStatus ? cat.className : '']"></div>
            </div>
            <div class="product-image">
                <a href="#">
                    <img :src="product.image" alt="" width="176px" height="176px">
                </a>
            </div>
        </div>
        <div class="group-bottom">
            <div class="product-title">
                <a href="#">{{product.title}}</a>
            </div>
            <div class="product-description">
                <p>{{product.desription}}</p>
            </div>
            <div class="group-info">
                <div class="select-wrap" @click="showDropdown">
                    <div class="selcet-item" ><span class="name">{{ paramName }}</span><span class="value">{{ paramVal }}</span><span class="chevron"></span></div>
                    <ul class="dropdown-wrap" v-show="dropdowOn">
                        <li class="dropdown-item" v-for="liItem in arrayOfObjects" @click="onChange($event)"><span class="name">{{ liItem.name }}</span><span class="value">{{liItem.value}}</span></li>
                    </ul>
                </div>
                <div class="price">$ {{product.price}}</div>
                <button class="order-button" @click="addToCart"  v-if="qtyInCart == 0">Order</button>
            </div>
        </div>
    </div>
</template>
<script>
import _ from 'lodash';
import State from './shoppingCartState';
import dropdown from 'vue-dropdowns';
      export default {
         components: {
            'dropdown': dropdown,
        },
         props: {
            product: {
                type: Object,
                required: true,
            },
            index: {
                type: Number
            },
            poupOn: {
                type: Boolean
            }
        },
        data() {
          return {
            arrayOfObjects: [
                { name: 'Small', value: '400mm' },
                { name: 'Medium', value: '600mm' },
                { name: 'Large', value: '800mm' }
            ],
            paramName: '',
            paramVal:'',
            shared: State.data,
            dropdowOn: false,
            showPopup: State.data
          }
        },

        methods: {
            onChange(event) {
                this.paramName = '';
                this.paramVal = '';
                this.defaultValue = event.target.parentNode.children;
                this.paramName = this.defaultValue[0].textContent;
                this.paramVal = this.defaultValue[1].textContent;
            },
            addToCart () {
                State.add(this.product);
                this.showPopup.visible = ! this.showPopup.visible
            },
            showDropdown () {
                this.dropdowOn = !this.dropdowOn
            }
        },
        computed: {
            qtyInCart () {
                var found = _.find(this.shared.cart, ['id', this.product.id])
                if(typeof found == 'object') {
                    return found.qty
                } else {
                    return 0
                }
            }
        },
        created() {
            this.paramName = this.arrayOfObjects[0].name;
            this.paramVal = this.arrayOfObjects[0].value;
        },

}
</script>