<script setup>
import {computed, ref} from "vue";
import WaterWaveClickable from "./WaterWaveClickable.vue";

const props = defineProps(['itemEachPage'])


// 声明双向绑定模型
const items = defineModel('items')
const page = defineModel('page', {
  default: 1
})

//声明单项绑定属性

const itemEachPage = ref(props.itemEachPage === undefined ? 5 : props.itemEachPage) //每一页具有的物品数

const getItemCountSafely = computed(() => {
  if (page.value < 1) {
    page.value = 1
    return []
  }
  let start = (page.value - 1) * itemEachPage.value
  let end = start + itemEachPage.value
  if (end > items.value.length) {
    page.value = items.value.length % itemEachPage.value === 0 ? items.value.length / itemEachPage.value : Math.ceil(items.value.length / itemEachPage.value)
    return items.value.slice((page.value - 1) * itemEachPage.value,items.value.length)
  }
  return items.value.slice(start, end)
})
</script>

<template>
  <ul>
      <li @click="$emit('itemClick',i)" class="item" v-for="i in getItemCountSafely">
        <slot :item="i">
            <water-wave-clickable>
              <div>{{ i }}</div>
            </water-wave-clickable>
        </slot>
      </li>

  </ul>
</template>

<style scoped>

.item {
  border-top: 1px solid gray;
  list-style: none;
}

div {
  padding-top: 10px;
  padding-bottom: 10px;
}

.item:last-child {
  border-bottom: 1px solid gray;
}
</style>