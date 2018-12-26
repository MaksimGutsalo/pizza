<template>
<div class="select-wrap" @click="showDropdown()">
    <div class="selcet-item" ><span class="name">{{ paramName }}</span><span class="value">{{ paramVal }}</span><span class="chevron"></span></div>
        <ul class="dropdown-wrap" v-show="dropdowOn">
            <li class="dropdown-item" v-for="liItem in arrayOfObjects" @click="onChange($event)"><span class="name">{{ liItem.name }}</span><span class="value">{{liItem.value}}</span></li>
        </ul>
    </div>
</template>
<script>
  import State from './../shoppingCartState'
  export default {
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
        dropdowOn: false
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
        showDropdown () {
            this.dropdowOn = !this.dropdowOn;
        }
    },
    created() {
      this.paramName = this.arrayOfObjects[0].name;
      this.paramVal = this.arrayOfObjects[0].value;
    }
  }
</script>