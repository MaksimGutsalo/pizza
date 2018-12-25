<template>
  <div class="cart">
    <div class="title-wrap">
      <p class="cart-title">Checkout</p>
      <button class="close-popup"  @click="closePopup">Close</button>
    </div>
    <p class="cart-empty" v-if="total == 0">Your Shopping Cart is Empty!</p>
    <div class="product-wrapper" v-else>
      <div class="product-item" v-for="(item, index) in items">
        <div class="top-group">
          <div class="category">
              <div v-for="cat in item.category" v-bind:class="[cat.catStatus ? cat.className : '']"></div>
          </div>
          <div class="product-image">
              <a href="#">
                  <img :src="item.image" alt="" width="72" height="72">
              </a>
          </div>
        </div>
        <div class="product-details">
          <div class="product-title">{{item.title}}</div>
          <div class="product-description">{{item.descr}}</div>
        </div>
        <div class="select-wrap" @click="showDropdown(item.id)">
            <div class="selcet-item" ><span class="name">{{ paramName }}</span><span class="value">{{ paramVal }}</span><span class="chevron"></span></div>
            <ul class="dropdown-wrap" v-show="dropdowOn">
                <li class="dropdown-item" v-for="liItem in item.sizes" @click="onChange($event)"><span class="name">{{ liItem.name }}</span><span class="value">{{liItem.value}}</span></li>
            </ul>
        </div>
        <div class="basket-item-count">
          <div class="item-count">
            <button class="inc btn" @click="inc(item.id)">+</button>
            <input type="text" v-model="item.qty">
            <button class="dec btn" @click="dec(item.id)">-</button>
          </div>
        </div>
        <p class="product-price">${{item.qty * item.price}}</p>
         <button class="remove-btn" v-on:click="items.splice(index, 1)">Remove</button>
      </div>
    </div>
    <div class="cart-total">
      <button class="add-more" @click="closePopup">Add more Pizza</button>
      <div class="total-price-wrap">
        <span class=label>Total</span>
        <span class="total-price">${{total}}</span>
      </div>
    </div>
    <div class="address-form-wrap" v-if="notEmptyCart">
      <form>
        <fieldset>
          <legend>Address</legend>
          <div class="field-wrap">
            <div class="address-wrap">
              <p class="street">
                <input type="text" name="street" id="street">
                <label for="street">Street</label>
              </p>
              <p class="build">
                <input type="text" name="build" id="build">
                <label for="build">Build</label>
              </p>
              <p class="entrance">
                <input type="text" name="entrance" id="entrance">
                <label for="entrance">Entrance</label>
              </p>
            </div>
            <div class="form-bottom">
                <p class="phone">
                  <input type="text" name="phone" id="phone">
                  <label for="phone">Phone</label>
                </p>
                <button class="confirm-btn" type="submit">Confirm order</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>
<script>
  import State from './shoppingCartState'
  import _ from 'lodash'

  export default {
    props:['prods'],
    data() {
      return {
        items: State.data.cart,
        arrayOfObjects: [
            { name: 'Small', value: '400mm' },
            { name: 'Medium', value: '600mm' },
            { name: 'Large', value: '800mm' }
        ],
        paramName: '',
        paramVal:'',
        shared: State.data,
        notEmptyCart: true,
        dropdowOn: false,
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
        inc (id) {
          return _.sumBy(this.items, function(item) {
            if(id == item.id) {
              return  item.qty++
            }
          })
        },
        dec (id) {
          return _.sumBy(this.items, function(item ,) {
            if(item.qty > 1 && id == item.id){
              return  item.qty--
            } 
          })
        },
        showDropdown (id) {
          this.dropdowOn = !this.dropdowOn
        },
        closePopup() {
          this.shared.visible = ! this.shared.visible
        }
    },
    computed: {
      total () {
        return _.sumBy(this.items, function(item) {
          return (item.price * item.qty)
        })
      },
      qtyInCart () {
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