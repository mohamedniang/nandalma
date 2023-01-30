<template>
  <div class="flex flex-col gap-1">
    <Answer v-for="answer in items" :data="answer" :key="answer.id" />
  </div>
</template>

<script setup>
const props = defineProps(['items'])

// console.log(props.items)
</script>