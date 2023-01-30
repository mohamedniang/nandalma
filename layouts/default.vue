<template>
  <div class="flex flex-col h-auto min-h-screen bg-slate-200 dark:bg-slate-900 dark:text-white">
    <Header />
    <div class="flex-1">
      <slot />
    </div>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import { IUser } from '~/types/IUser'
const user: IUser = await useUser()
</script>