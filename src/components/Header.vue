<template>
  <header id="header" class="header">
    <section class="header-content">
      <div class="site-logo">
        <a href="#">
          <img src="../assets/images/logo-pizza.svg" alt="Pizza Slice<">
        </a>
      </div>
      <nav id="main-navigation" class="main-navigation">
        <ul class="manu">
          <li class="list-item">
            <a href="#">Pizza</a>
          </li>
          <li class="list-item">
            <a href="#">Delivery</a>
          </li>
          <li class="list-item">
            <a href="#">About Us</a>
          </li>
        </ul>
      </nav>
    </section>
    <section class="page-description">
      <div class="description-wrapper">
        <h1 class="page-title">More reasons to eat pizza</h1>
        <span class="delivery-txt">Delivery of delicious pizza to your home</span>
        <div class="button-order" @click="openPopup">Order</div>
      </div>
      <div class="main-product-image">
        <img src="../assets/images/product/main-pizza@2x.png" alt="Big pizza" width="382" height="357">
      </div>
    </section>
  </header>
</template>

<script>
import State from './shoppingCartState'
export default {
  data() {
      return {
        showPopup: State.data
      }
  },
  methods: {
     openPopup () {
        this.showPopup.visible = ! this.showPopup.visible
      }
  }
};
</script>
