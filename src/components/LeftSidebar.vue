<template>
  <aside class="left-sidebar">
    <section class="sidebar-content">
      <div class="category-block">
        <span class="block-title">Category</span>
        <div class="category-items">
          <div v-for="categorie in categories" :class="'cat-type cat-type-'+categorie.name">
            <input type="checkbox" :id="'type-'+categorie.name" :name="categorie.name" v-model="results" :value="categorie.name"  @change="onChecked">
            <label :for="'type-'+categorie.name">
              <span :class="'cat-ico'+' '+categorie.name+'-ico'"></span>{{categorie.name}}
            </label>
          </div>
        </div>
      </div>
      <div class="size-block">
        <span class="block-title">Default Size</span>
        <div class="size-items">
          <div v-for="size in sizes" :class="'size-type size-'+ size.name">
            <input type="checkbox" :id="'size-'+size.name" :name="size.name" v-model="results" :value="size.name" @change="onChecked">
            <label :for="'size-'+ size.name">{{ size.name }}</label>
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
      query:'',
      results: [],
      sizes: [
        {
          name: '400mm'
        },
        {
          name: '600mm'
        },
        {
          name: '800mm'
        }
      ],
      categories: [
        {
          name: 'Meat',
        },
        {
          name: 'Veggie',
        },
        {
          name: 'Hot'
        }
      ]

    };
  },
  methods: {
        inFocused () {
        let str_length = this.value;
        (parseFloat(str_length[0]) || parseFloat(str_length[1]) ) >= 0 ? (this.inFocus = true) : (this.inFocus = false);
        this.$store.state.priceFrom = parseFloat(str_length[0]);
        this.$store.state.priceTo = parseFloat(str_length[1]);

      },
      onChecked () {
        let unique = arr => {
          var obj = {};
          for (var i = 0; i < arr.length; i++) {
            var str = arr[i];
            obj[str] = true;
          }
          if(obj.length > 1){
            return Object.keys(obj[obj.length-1]);
          }else{
            return Object.keys(obj);
          }
        };
        this.$store.state.results[0] = unique(this.results);
        this.inFocused ();
      }
    }
  }
</script>