<template>
  <div class="container p-5 mx-auto my-4">
    <div class="flex flex-col md:flex-row justify-center items-center gap-2">
      <div class="text-center">
        <h2 class="text-green-800">Pose tes questions</h2>
        <h1 class="text-green-300">Sa batt dafa am solo</h1>
        <h3>Aide les autres</h3>
      </div>
      <div class="flex flex-col justify-center items-center">
        <img src="/logo/n_no_bg.png" class="rounded-xl">
        <h1 class="text-green-700 dark:text-green-600 font-extrabold uppercase -mt-8">
          Nandalma
        </h1>
      </div>
      <div class="text-center">
        <h1 class="text-green-400">Nandalal gars yi</h1>
        <h3 class="text-slate-400">Réponds aux question</h3>
        <h2>Participe aux débats</h2>
      </div>
    </div>

    <div>
      <QuestionContainer :items="questions" />
    </div>
  </div>
</template>
<script setup lang="ts">
const colorMode = useColorMode()
const { data: questions } = await useFetch('/api/question', {
  method: 'GET',
  query: {}
})
console.log('index#setup@colorMode&questions', colorMode.preference, questions.value)


// questions.value = [
//   {
//     id: 0,
//     title: "title 1",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, necessitatibus dolorem nesciunt ex debitis, earum delectus voluptatibus est beatae deleniti ipsum vel fugit laboriosam eos in et aliquid excepturi. Dolorum amet numquam sequi officiis quos porro veniam similique qui, quam optio pariatur nostrum a, quasi itaque explicabo perferendis voluptatibus mollitia?",
//   },
//   {
//     id: 1,
//     title: "title 2",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, necessitatibus dolorem nesciunt ex debitis, earum delectus voluptatibus est beatae deleniti ipsum vel fugit laboriosam eos in et aliquid excepturi. Dolorum amet numquam sequi officiis quos porro veniam similique qui, quam optio pariatur nostrum a, quasi itaque explicabo perferendis voluptatibus mollitia?",
//   },
//   {
//     id: 2,
//     title: "title 3",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, necessitatibus dolorem nesciunt ex debitis, earum delectus voluptatibus est beatae deleniti ipsum vel fugit laboriosam eos in et aliquid excepturi. Dolorum amet numquam sequi officiis quos porro veniam similique qui, quam optio pariatur nostrum a, quasi itaque explicabo perferendis voluptatibus mollitia?",
//   },
// ]


</script>