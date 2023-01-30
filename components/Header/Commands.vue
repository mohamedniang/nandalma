<template>
  <div class="flex flex-row items-center content-between gap-4">
    <div class="flex flex-row">
      <input v-model="search" id="search" name="search" class="appearance-none dark:bg-slate-500 dark:text-white dark:placeholder-white relative block px-3 py-2 border border-gray-300 border-r-0 placeholder-gray-500 text-gray-900 rounded-full rounded-r-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm w-[400px]" placeholder="Rechercher un sujet ..." />
      <button class="btn p-1 m-0 rounded-full rounded-l-none border-l-0 hover:bg-slate-500" ><MagnifyingGlassIcon class="h-[30px] w-[30px]" /></button>
    </div>
    <NuxtLink to="/question/add" class="cursor-pointer text-slate-400 ring-2 rounded-full ring-slate-500 hover:bg-slate-500 duration-75 " >
      <PlusCircleIcon class="h-[34px] w-[34px]" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { PlusCircleIcon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid/index'
const search = ref("")
</script>

<style lang="scss" scoped>

</style>