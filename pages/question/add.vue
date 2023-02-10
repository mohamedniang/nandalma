<template>
  <div class="flex items-center justify-center">
    <div class="w-1/2">
      <h1>Ajouter une Question/Sujet de discussion</h1>

      <div v-if="response.hasErrors"
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3" role="alert">
        <strong class="font-bold">Plaignant am na deh: </strong>
        <span>{{ response.message }}</span>
      </div>

      <form v-on:submit.prevent class="mt-8 space-y-6" action="#" method="POST">
        <div class="rounded-md shadow-sm -space-y-px mb-1">
          <div>
            <label for="title" class="sr-only">Titre</label>
            <input v-model="title" id="title" name="title" required
              class="appearance-none dark:bg-slate-500 dark:text-white dark:placeholder-white rounded-full relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gren-500 focus:border-gren-500 focus:z-10 sm:text-sm"
              placeholder="Titre" :disabled="isSubmittingQuestion" />
          </div>
        </div>

        <Tiptap v-model="description" />

        <!-- <div class="rounded-md shadow-sm -space-y-px mb-1">
          <div>
            <label for="description" class="sr-only">Description</label>
            <textarea v-model="description" id="description" name="description" rows="25" required
              class="appearance-none dark:bg-slate-500 dark:text-white dark:placeholder-white rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
              placeholder="Description" :disabled="isSubmittingQuestion"></textarea>
          </div>
        </div> -->
      </form>
      <button @click.prevent="submitQuestion" :disabled="isSubmittingQuestion"
        class="mt-5 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
        <ArrowPathIcon v-if="isSubmittingQuestion" class="w-5 animate-spin" />
        Ajouter
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Tiptap from '~/components/Tiptap/index.vue'

import { ArrowPathIcon } from '@heroicons/vue/20/solid/index'
import { submitNewQuestion } from "~/composables/question";
import { FormValidation } from "~~/types/FormValidation";

const title = ref('')
const description = ref('')
const isSubmittingQuestion = ref(false)
let response = ref<FormValidation>({ hasErrors: false })

const config = ref({
  placeholderText: 'Edit Your Content Here!',
  charCounterCount: false
})

async function submitQuestion() {
  console.log(title.value, description.value)
  try {
    isSubmittingQuestion.value = true
    const { data: res, error } = await submitNewQuestion({ title: title.value, description: description.value });

    if (res?.id) {
      await useRouter().push(`/question/${res.id}`)
    } else if (error?.hasErrors) response.value = error
    console.log('question/add#submitQuestion@reponse', res, error)
  } catch (error) {
    console.error(error);
  } finally {
    isSubmittingQuestion.value = false
  }
}
</script>

<style scoped>

</style>