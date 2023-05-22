<template>
  <div ref="root" @click="update" class="root">
    <slot></slot>
    <div v-show="isAnim" ref="container" class="container">
      <div ref="container0" class="anim"></div>
    </div>
  </div>
</template>


<script setup>
import {computed, onMounted, ref} from "vue";

const x = ref(0)
const y = ref(0)
const root = ref(null)
const container = ref(null)
const container0 = ref(null)
const isAnim = ref(false)
const scale = computed(() => {
  return Math.max(root.value.getBoundingClientRect().width / 3, root.value.getBoundingClientRect().height / 3)
})

onMounted(() => {
  container0.value.addEventListener('animationend', () => {
    container0.value.classList.remove('anim_running')
    isAnim.value = false
  }, false)
})

const update = (event) => {
  x.value = event.offsetX
  y.value = event.offsetY
  // container0.value.classList.remove('anim_running')
  container0.value.classList.add('anim_running')
  isAnim.value = true
}

//此函数若不删掉则页数在最后且元素非满时响应性会丢失
// onUnmounted(() => {
//   container.value.removeEventListener('click', update)
// })
</script>

<style scoped>

.root {
  position: relative;
}

.container {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
}

.anim {
  position: absolute;
  width: 10px;
  height: 10px;
  left: v-bind(x+ 'px');
  top: v-bind(y+ 'px');
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0;
  pointer-events: none;
}

.anim_running {
  animation: waterWave .5s linear;
}

@keyframes waterWave {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    scale: v-bind(scale)
  }
}
</style>