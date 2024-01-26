<script setup>
import {onMounted, ref} from 'vue';

  const theme = ref(localStorage.theme??'');

  onMounted(() => {
    if (theme.value === ''){
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark')
      theme.value = 'dark';
    }
  })

const toggleTheme = () => {
    console.log('theme', theme.value)
    if (theme.value === 'dark'){
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light';
      theme.value = 'light';
    } else {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark')
      theme.value = 'dark';

    }
}



</script>

<template>
  <button
      id="theme-toggle"
      @click="toggleTheme"
      type="button"
      class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
  >
    <span v-if="theme == 'dark'">
      Dark
    </span>
    <span v-else>
      light
    </span>

  </button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
