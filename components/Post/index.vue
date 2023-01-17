<template>
  <div class="flex flex-col border border-slate-300 dark:border-slate-700 dark:text-slate-100 rounded-md bg-slate-100 hover:bg-slate-300 p-1 duration-75 dark:bg-slate-600 dark:hover:bg-slate-700 cursor-pointer" @click="handleClick">
    <h2>{{ data.title }}</h2>
    <p v-html="data.description"></p>
  </div>
</template>
<script setup>
const props = defineProps(['data'])
const router = useRouter()
async function handleClick() {
  await router.push(`/post/${props.data.id}`)
}
// console.log(props.data)
</script>