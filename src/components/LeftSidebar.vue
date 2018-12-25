<template>
  <aside class="left-sidebar">
    <section class="sidebar-content">
      <div class="category-block">
        <span class="block-title">Category</span>
        <div class="category-items">
          <div class="cat-type cat-type-meat">
            <input type="checkbox" id="type-meat" name="Meat">
            <label for="type-meat">
              <span class="cat-ico meat-ico"></span>Meat
            </label>
          </div>
          <div class="cat-type cat-type-veggie">
            <input type="checkbox" id="type-veggie" name="Veggie">
            <label for="type-veggie">
              <span class="cat-ico veggie-ico"></span>Veggie
            </label>
          </div>
          <div class="cat-type cat-type-hot">
            <input type="checkbox" id="type-hot" name="Hot">
            <label for="type-hot">
              <span class="cat-ico hot-ico"></span>Hot
            </label>
          </div>
        </div>
      </div>
      <div class="size-block">
        <span class="block-title">Default Size</span>
        <div class="size-items">
          <div class="size-type size-400">
            <input type="checkbox" id="size-400mm" name="400mm">
            <label for="size-400mm">400mm</label>
          </div>
          <div class="size-type size-600">
            <input type="checkbox" id="size-600mm" name="600mm">
            <label for="size-600mm">600mm</label>
          </div>
          <div class="size-type size-800">
            <input type="checkbox" id="size-800mm" name="800mm">
            <label for="size-800mm">800mm</label>
          </div>
        </div>
      </div>
      <div class="price-block">
        <span class="block-title">Price</span>
        <div class="form-wrapper">
          <vue-slider v-model="value"  @callback="inFocused"></vue-slider>
          <div class="price-input-wrap">
            <div class="pirce-min pirce-input">
              <input id="pirce-min" type="number" v-model="value[0]" @change="inFocused">
              <label for="pirce-min" :class="{'in-focus': inFocus}">From</label>
            </div>
            <div class="pirce-max pirce-input">
              <input id="pirce-max" type="number" v-model="value[1]" @change="inFocused">
              <label for="pirce-max" :class="{'in-focus': inFocus}">To</label>
            </div>
          </div>
        </div>
      </div>
    </section>
  </aside>
</template>

<script>
import vueSlider from "vue-slider-component";

export default {
  components: {
    vueSlider
  },
  data() {
    return {
      inFocus: false,
      value: [0, 100],
      query:''
    };
  },
  methods: {
        inFocused () {
        let str_length = this.value;
        (parseFloat(str_length[0]) || parseFloat(str_length[1]) ) >= 0 ? (this.inFocus = true) : (this.inFocus = false);
        this.$store.state.priceFrom = parseFloat(str_length[0]);
        this.$store.state.priceTo = parseFloat(str_length[1]);

      }
    }
  }
</script>