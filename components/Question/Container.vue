<template>
  <div class="flex flex-col gap-1">
    <Question v-for="question in items" :data="question" :key="question.id" />
  </div>
</template>

<script setup>
const props = defineProps(['items'])

// console.log(props.items)
</script>