<script setup>

import {
  GithubFilled,
  LinkedinFilled,
} from '@ant-design/icons-vue';
import DarkModeButton from "./components/DarkModeButton.vue";

import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const navActiveStyle = "nav-active";

</script>

<template>
  <div class="h-screen w-screen flex flex-col items-center">
    <nav class="h-16 w-full flex items-center">
      <ul class="w-full flex items-center justify-end gap-4 px-2">
        <li>
          <RouterLink activeClass="nav-active" to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink activeClass="nav-active" to="/projects">Projects</RouterLink>
        </li>

        <li>
          <RouterLink activeClass="nav-active" to="/about">About</RouterLink>
        </li>

        <li>
          <a target="__blank" class="md:text-lg decoration-none flex items-center" href="https://github.com/lucassmsilva">
            <GithubFilled />
          </a>
        </li>

        <li>
          <a target="__blank" class="md:text-lg decoration-none flex items-center"
            href="https://www.linkedin.com/in/lucassmsilva">
            <LinkedinFilled />
          </a>
        </li>

        <li>
          <DarkModeButton />
        </li>
      </ul>
    </nav>
    <main class="w-full md:flex h-full gap-2 ">
      <RouterView />
    </main>
  </div>

</template>

<style scoped>
li:hover {
  color: var(--color-accent);
}
</style>
