<template>
    <div class="filter-wrap">
      <div class="selcet-item">{{ defaultValue }} <span class="chevron"></span></div>
      <ul>
        <li class="dropdown-item" v-for="liItem in arrayOfObjects" @click="onChange($event)">{{ liItem.name }}</li>
      </ul>
    </div>
</template>


<script>

    export default {
        data() {
          return {
            arrayOfObjects: [
                {name: 'Popular'},
                {name: 'Price up'},
                {name: 'Price down'}
            ],
            defaultValue: "Popular "
          }
        },

        methods: {
          onChange(event) {
            this.defaultValue = event.target.textContent;
          }
        }
      }
</script>
