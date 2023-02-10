<template>
  <div
    class="flex flex-col dark:text-slate-100 rounded-md bg-slate-100 hover:bg-slate-300 p-3 duration-75 dark:bg-slate-600 dark:hover:bg-slate-700 cursor-pointer">
    <div class="flex flex-row w-full justify-between items-center">
      <div class="flex flex-col justify-start">
        <small class="text-slate-400 h-4">@{{ data.author?.username }} - {{ dateFormatted }}</small>
        <span>{{ data.text }}</span>
        <div class="flex flex-row gap-2 text-slate-400">
          <HandThumbUpIcon class="w-5 hover:scale-110 hover:text-green-400" title="Voter: non utile"
            @click.stop="handleSubmitVote(+1)" />
          <span v-if="!isSubmittingVote">{{ data.voteCount }}</span>
          <span v-else class="animate-bounce">⁎</span>
          <HandThumbDownIcon class="w-5 hover:scale-110 hover:text-red-400" title="Voter: utile"
            @click.stop="handleSubmitVote(-1)" />
          <ChatBubbleOvalLeftIcon class="w-5 hover:scale-110 hover:text-blue-400" title="Répondre"
            @click.stop="handleReply" />
          <FlagIcon class="w-5 hover:scale-110 hover:text-orange-400" title="Signaler" />
        </div>
      </div>
      <div class="flex flex-col justify-center items-center hover:scale-105 hover:text-green-400"
        @click.stop="handleClick">
        <div class="flex flex-row">
          {{ data.replies?.length || 0 }}
          <!-- <ChatBubbleOvalLeftIcon class="w-5 hover:scale-110 hover:text-blue-400" title="Voir les réponses"/> -->
        </div>
        <ChevronDownIcon class="w-5" />
      </div>
    </div>

    <div v-if="!collapsedState" class="ml-10 my-1 pl-3 border-l-2 flex flex-col gap-1 border-slate-500">
      <Answer v-for="reply in data.replies" :key="reply.id" :data="reply" />
    </div>

    <div v-if="isRepliying" class="flex flex-row justify-center items-center gap-2 px-5">
      <template v-if="!isSubmittingReply">
        <input type="text" v-model="reply" :name="`reply-to-${data.id}`" placeholder="Ajouter une contribution ...">
        <button @click="submitReply"
          class="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Répondre</button>
      </template>
      <ArrowPathIcon v-else class="w-5 animate-spin" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { HandThumbDownIcon, HandThumbUpIcon, ChatBubbleOvalLeftIcon, FlagIcon, ArrowPathIcon, ChevronDownIcon } from '@heroicons/vue/24/outline/index'
import { FormValidation } from '~~/types/FormValidation';
import { format } from "date-fns";

const user = await useUser()
const props = defineProps(['data'])
const collapsedState = ref<boolean>(true)

const reply = ref("")
const response = ref<FormValidation>({ hasErrors: false })
const isSubmittingReply = ref(false)

async function submitReply() {
  try {
    isSubmittingReply.value = true
    const { data: res, error } = await submitNewReply({ text: reply.value, answer: props.data })
    console.log('answer[id]#submitReply@res', res)
    if (res?.id != null) {
      props.data.replies.unshift(res)
      reply.value = ""
      response.value = { hasErrors: false }
    } else if (error?.hasErrors) response.value = error
  } catch (error) {
    console.error(error);
  } finally {
    isSubmittingReply.value = false
  }
}
const isRepliying = ref(false)
function handleReply() {
  isRepliying.value = !isRepliying.value
}

async function handleClick() {
  collapsedState.value = !collapsedState.value
}
const dateFormatted = computed(() => format(new Date(props.data.createdAt), "MM/dd/yyyy"))

const isSubmittingVote = ref<boolean>(false)
async function handleSubmitVote(value: number) {
  try {
    isSubmittingVote.value = true
    const { voteCount } = await $fetch(`/api/answer/${props.data?.id}`, {
      body: {
        voteCount: value,
        authorId: user.id
      },
      method: "PUT"
    })
    props.data.voteCount = voteCount
  } catch (error) {
    console.error(error);
  } finally { isSubmittingVote.value = false }
}
</script>