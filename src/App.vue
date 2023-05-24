<template>
  {{x}},{{y}}
</template>

<script setup>
import {useMousePositionInWidget} from "./js/MouseUtil.js";

const {x,y} = useMousePositionInWidget()
</script>


<style scoped>

</style>