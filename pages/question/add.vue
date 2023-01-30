<template>
  <div class="flex items-center justify-center">
    <div class="w-1/2">
      <h1>Ajouter un post</h1>
      <form v-on:submit.prevent class="mt-8 space-y-6" action="#" method="POST">
        <div class="rounded-md shadow-sm -space-y-px mb-1">
          <div>
            <label for="title" class="sr-only">Titre</label>
            <input v-model="title" id="title" name="title" required
              class="appearance-none dark:bg-slate-500 dark:text-white dark:placeholder-white rounded-full relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gren-500 focus:border-gren-500 focus:z-10 sm:text-sm"
              placeholder="Titre" />
          </div>
        </div>
        <div class="rounded-md shadow-sm -space-y-px mb-1">
          <div>
            <label for="description" class="sr-only">Description</label>
            <textarea v-model="description" id="description" name="description" rows="25" required
              class="appearance-none dark:bg-slate-500 dark:text-white dark:placeholder-white rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
              placeholder="Description"></textarea>
          </div>
        </div>
      </form>
      <button @click.prevent="submitQuestion"
        class="mt-5 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
        Ajouter
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const title = ref('')
const description = ref('')
const response = ref()


async function submitQuestion() {
  console.log(title.value, description.value)
  try {
    response.value = await submitNewQuestion({title: title.value, description: description.value});

    console.log('question/add#submitQuestion@reponse', response.value)
  } catch (error) {
    console.error(error);
  }
}
</script>

<style scoped>

</style>