<template>
  <div v-if="question" class="flex flex-col p-3 container mx-auto">
    <div class="flex flex-col border-b border-slate-400 pb-3">
      <h1 class="flex flex-row items-center justify-center border-b-2">
        <Feedback class="mx-2 p-0" @handleSubmit="handleSubmitVote" :votes="question.voteCount" /> {{ question.title }}
      </h1>
      <div v-html="question.description"></div>
    </div>
    <div class="my-3 p-3 rounded-md flex flex-col gap-2">

      <div v-if="response.hasErrors"
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3" role="alert">
        <strong class="font-bold">Plaignant am na deh: </strong>
        <span>{{ response.message }}</span>
      </div>

      <textarea name="answer" id="answer" cols="30" rows="5" v-model="answer" placeholder="Mettre un commentaire ..."
        class="focus:ring-1 focus:ring-green-300" :class="response.hasErrors && 'ring-1 ring-red-400'"
        :disabled="isSubmittingAnswer"></textarea>
      <button
        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        @click="submitAnswer" :disabled="isSubmittingAnswer">
        <ArrowPathIcon v-if="isSubmittingAnswer" class="w-5 animate-spin" /> Répondre
      </button>
    </div>
    <div>
      <h2>{{ question.answers?.length || 0 }} commentaire(s):</h2>
      <AnswerContainer :items="question.answers" />
    </div>
  </div>
  <div v-else>
    {{ error?.message }}
  </div>
</template>
<script lang="ts" setup>
import { ArrowPathIcon } from '@heroicons/vue/20/solid/index'
import { FormValidation } from '@/types/FormValidation';
import { submitNewAnswer } from "~/composables/answer";
import { IQuestion } from '~~/types/IQuestion';

const user = await useUser()
const route = useRoute()
// const { data: question, error } = await useFetch<IQuestion>(`/api/question/${route.params.id}`)
const { data: question, error } = await useAsyncData<IQuestion>(() => $fetch((`/api/question/${route.params.id}`)))
const answer = ref('')
const isSubmittingAnswer = ref(false)
let response = ref<FormValidation>({ hasErrors: false })

onMounted(async () => {
  console.log(`question[${route.params.id}]#onMounted@question`, question.value)
})

async function handleSubmitVote(value: number, callback: Function) {
  try {
    const { voteCount } = await $fetch(`/api/question/${question?.value?.id}`, {
      body: { 
        voteCount: value,
        authorId: user.id
      },
      method: "PUT"
    })
    console.log("fe", voteCount)
    question.value!.voteCount = voteCount
  } catch (error) {
    console.error(error);
  } finally { callback() }
}
async function submitAnswer() {
  try {
    isSubmittingAnswer.value = true
    const { data: res, error } = await submitNewAnswer({ text: answer.value, question: question.value! })
    console.log('question[id]#submitAnswer@res', res)
    if (res?.id != null) {
      question.value?.answers.unshift(res)
      answer.value = ""
      response.value = { hasErrors: false }
    } else if (error?.hasErrors) response.value = error
  } catch (error) {
    console.error(error);
  } finally {
    isSubmittingAnswer.value = false
  }
}
</script>