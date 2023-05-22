<script setup>
import {ref} from "vue";
import ListView from "./widget/ListView.vue";
import WaterWaveClickable from "./widget/WaterWaveClickable.vue";

const lists = ref("床前明月光疑是地上霜举头望明月低头思故乡。".split(''))
const page = ref(1)

const log = (a) => {
  //alert(a)
}
</script>

<template>
  <ListView @item-click="log"
            v-model:items="lists"
            v-model:page="page">
<!--    <template v-slot="item">-->
<!--      <a href="#">{{item.item}}</a>-->
<!--    </template>-->
  </ListView>
  <h3>第{{page}}页</h3>

  <WaterWaveClickable>
    <button @click="page--">previous</button>
  </WaterWaveClickable>
  <button @click="page++">next</button>
</template>

<style scoped>

</style>
