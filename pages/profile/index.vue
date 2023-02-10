<template>
  <div class="p-2">
    <h1>Profile</h1>
    <div v-if="user" class="flex flex-col p-4 border border-slate-200 rounded-md w-max">
      <span><b>Nom d'Utilisateur:</b> {{ user.username }}</span>
      <span><b>Adresse Email:</b> {{ user.email }}</span>
      <span><b>Nom Complet:</b> {{ user.name }}</span>
      <span><b>Utilisateur depuis:</b> {{ user.createdAt ? format(new Date(user.createdAt), "dd MMMM yyyy") : "-" }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { format } from 'date-fns';
import { IUser } from '~~/types/IUser';

const user = useState<IUser>('user')
</script>

<style scoped>

</style>