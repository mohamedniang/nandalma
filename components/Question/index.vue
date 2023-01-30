<template>
  <div
    class="flex flex-col border border-slate-300 dark:border-slate-700 dark:text-slate-100 rounded-md bg-slate-100 hover:bg-slate-300 p-1 duration-75 dark:bg-slate-600 dark:hover:bg-slate-700 cursor-pointer"
    @click="handleClick">
    <small class="text-slate-400 h-1">@{{ data.author.username }}</small>
    <h2>{{ data.title }}</h2>
    <p>{{ data.description?.substr(0, 100) }} (...)</p>
    <div class="flex items-center justify-end">
      <small>{{ data.createdAt }}</small>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(['data'])
const router = useRouter()
async function handleClick() {
  await router.push(`/question/${props.data.id}`)
}
// console.log(props.data)
</script>