<template>
  <div
    class="flex flex-col border border-slate-300 dark:border-slate-700 dark:text-slate-100 rounded-md bg-slate-100 hover:bg-slate-300 p-1 duration-75 dark:bg-slate-600 dark:hover:bg-slate-700 cursor-pointer"
    @click="handleClick">
    <small class="text-slate-400 h-4">@{{ data.author?.username }} date: {{ data.createdAt }}</small>
    <span>{{ data.text }}</span>
  </div>
</template>
<script setup>
const props = defineProps(['data'])
async function handleClick() {
  console.log('answer', data.id)
}
// console.log(props.data)
</script>