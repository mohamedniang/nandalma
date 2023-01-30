<template>
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex flex-1 items-center sm:items-stretch justify-start">
          <NuxtLink to="/" class="flex flex-shrink-0 items-center">
            <img class="w-9" src="/logo/n_0.5x.png" alt="Nandalma Logo">
          </NuxtLink>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <NuxtLink href="/" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                aria-current="page">
                Accueil
              </NuxtLink>

              <a href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Top
                Posts</a>

              <a href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projet</a>

              <a href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Live</a>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-3">

          <HeaderCommands />
          
          <!-- Color mode switch -->
          <Switch v-model="colorModeSwitch"
            class="relative inline-flex h-[38px] w-[74px] shrink-0 p-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 bg-slate-200 dark:bg-slate-400"
            @click="handleColorModeChange">
            <span aria-hidden="true" :class="colorModeSwitch ? 'translate-x-9' : 'translate-x-0'"
              class="pointer-events-none inline-block h-[34px] w-[34px] transform  transition duration-200 ease-in-out">
              <SunIcon v-if="!colorModeSwitch" />
              <MoonIcon v-else />
            </span>
          </Switch>

          <template v-if="!user">
            <NuxtLink to="/login"
              class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Login</NuxtLink>
            <NuxtLink to="/register"
              class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Sign Up</NuxtLink>
          </template>

          <!-- Profile dropdown -->
          <Menu v-else as="div" class="relative inline-block text-left ml-3">
            <div>
              <MenuButton
                class="inline-flex justify-center border border-gray-300 bg-gray-400 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-500 rounded-full">
                <UserIcon class="w-5" />
                {{ user.username }}
              </MenuButton>
            </div>

            <transition enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95">
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                  <a href="#"
                    :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Account
                    Paramètres </a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                  <a href="#"
                    :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">
                    Support </a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                  <a href="#"
                    :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">
                    Licence </a>
                  </MenuItem>
                </div>
                <div class="border-t">
                  <MenuItem v-slot="{ active }">
                  <a href="#"
                    @click="handleLogout"
                    :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">
                    Déconnexion </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>

        </div>
      </div>
    </div>
  </nav>

</template>
<script setup>
import { ref } from 'vue'
import { Switch, DisclosureButton, DisclosurePanel, Disclosure, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { SunIcon, MoonIcon, UserIcon } from '@heroicons/vue/20/solid/index'

const user = useState('user')
const colorMode = useColorMode()

const modes = [
  { label: "System", value: "system" },
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "Sepia", value: "sepia" }
]

const colorModeSwitch = ref(false)

function handleColorModeChange(e) {
  const mode = colorModeSwitch.value ? 'light' : 'dark'
  colorMode.preference = mode
}

function handleLogout(e) {
  userLogout()
}
</script>