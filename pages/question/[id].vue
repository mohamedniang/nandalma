<template>
  <div class="flex flex-col p-3">
    <div class="flex flex-col">
      <h1>{{ question.title }}</h1>
      <p v-html="question.description"></p>
    </div>
    <div class="border my-3 p-3 rounded-md flex flex-col gap-2">
      <textarea name="answer" id="answer" cols="30" rows="10" v-model="answer" placeholder="Mettre un commentaire ..."></textarea>
      <button class="mt-5 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" @click="submitAnswer">Répondre</button>
    </div>
    <div>
      <h2>Commentaire(s):</h2>
      <AnswerContainer :items="question.answers" />
    </div>
  </div>
</template>
<script setup>
const route = useRoute()
const { data: question } = await useFetch(`/api/question/${route.params.id}`)
const answer = ref('')
onMounted(async () => {
  console.log(`question[${route.params.id}]#onMounted@question`, question.value)
})

async function submitAnswer() {
  const res = await submitNewAnswer({ text: answer.value, question: question.value })
  console.log('question[id]#submitAnswer@res', res)

  if(res?.id != null) {
    question.value.answers.unshift(res)
    answer.value = ""
  }
}
</script>