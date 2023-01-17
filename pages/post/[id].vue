<template>
  <div class="flex flex-col p-3">
    <h1>{{ post.title }}</h1>
    <p v-html="post.description"></p>
  </div>
</template>
<script setup>
const post = ref({})
const route = useRoute()
onMounted(() => {
  const tab = useState('posts')
  post.value = tab.value.find(p => p.id == route.params.id)
})
</script>