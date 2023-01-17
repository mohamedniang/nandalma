<template>
  <!-- <h1>Post container</h1> -->
  <div class="flex flex-col gap-1">
    <Post v-for="post in items" :data="post" :key="post.id" />
  </div>
</template>

<script setup>
const props = defineProps(['items'])

// console.log(props.items)
</script>