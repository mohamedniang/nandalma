<template>
  <div
    class="flex flex-col border border-slate-300 dark:border-slate-700 dark:text-slate-100 rounded-md bg-slate-100 hover:bg-slate-300 p-1 duration-75 dark:bg-slate-600 dark:hover:bg-slate-700 cursor-pointer"
    @click="handleClick">
    <small class="text-slate-400 h-1">@{{ data.author.username }}</small>
    <h2>{{ data.title }}</h2>
    <p>{{ descriptionFormatted }}</p>
    <div class="flex items-center justify-end">
      <small class="text-slate-400">{{ dateFormatted }}</small>
    </div>
  </div>
</template>
<script setup>
import { format } from "date-fns";
const props = defineProps(['data'])
const router = useRouter()
async function handleClick() {
  await router.push(`/question/${props.data.id}`)
}
onMounted(() => {
  console.log("formatted date:", props.data)
})

const descriptionFormatted = computed(() => {
  const first = props.data.description;
  const second = first.replace(/<\/?[^>]+(>|$)/g, "");
  const third = second.substr(0, 100) + '(...)'
  return third
})
const dateFormatted = computed(() => format(new Date(props.data.createdAt), "MM/dd/yyyy"))
</script>