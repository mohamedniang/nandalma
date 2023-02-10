<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { runInThisContext } from "vm";
import { loginWithEmail } from "~/composables/useAuth";
import { FormValidation } from "~~/types/FormValidation";

const email = ref("");
const password = ref("");
const username = ref("");
const errors = ref(new Map())
let response = ref<FormValidation>({ hasErrors: false })

async function postLoginForm() {
  try {
    await loginWithEmail(email.value, password.value);
  } catch (error) {
    console.error(error);
  }
};

async function runTest(): Promise<void> {
  console.log('running test')
  const r = await $fetch('/api/')
  console.log(r)
}

</script>

<template>
  <div class="dark:bg-slate-800 h-screen">
    <div class="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full">
        <form v-on:submit.prevent class="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />

          <div class="rounded-md shadow-sm -space-y-px mb-1">
            <div>
              <label for="email-address" class="sr-only">Adresse Email</label>
              <input v-model="email" id="email-address" name="email" type="email" autocomplete="email" required
                class="dark:bg-slate-500 dark:text-white dark:placeholder-white appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                :class="errors.has('email') ? ' border-red-500' : ''" placeholder="Adresse Email" />
            </div>
          </div>
          <div>
            <label for="password" class="sr-only">Mot de passe</label>
            <input v-model="password" id="password" name="password" type="password" autocomplete="current-password"
              required
              class="dark:bg-slate-500 dark:text-white dark:placeholder-white appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
              :class="errors.has('password') ? ' border-red-500' : ''" placeholder="Mot de passe" />
          </div>

          <div class="flex items-center justify-between">
            <div class="text-sm">
              <a href="#" class="font-medium text-green-600 hover:text-green-500">
                Mot de passe oublié ?
              </a>
            </div>
          </div>

          <div></div>
        </form>
        <button @click.prevent="postLoginForm"
          class="mt-5 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          Se connecter
        </button>
      </div>
    </div>
  </div>
</template>