<template>
  <div class="inline-flex flex-col md:flex-row items-center justify-center">
    <HandThumbUpIcon class="w-8 text-green-400 cursor-pointer hover:scale-105" @click="handleSubmit(+1)" />
    <span class="px-3">{{ spinning ? '•••' : votes }}</span>
    <HandThumbDownIcon class="w-8 text-red-400 cursor-pointer hover:scale-105" @click="handleSubmit(-1)" />
  </div>
</template>

<script lang="ts" setup>
import { HandThumbDownIcon, HandThumbUpIcon } from '@heroicons/vue/20/solid/index'

const { votes } = defineProps(['votes'])
const emits = defineEmits(['handleSubmit'])

const spinning = ref(false)

function handleSubmit(value: number){
  toggleSpinner()
  emits('handleSubmit', value, toggleSpinner)
}

function toggleSpinner(){
  spinning.value = !spinning.value
}

onMounted(() => {
  // console.log('votes', votes);
})

</script>

<style lang="scss" scoped>

</style>