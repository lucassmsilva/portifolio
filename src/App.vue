<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { 
  BookFilled,
  CrownFilled,
  SkinFilled,
  GithubFilled,
  LinkedinFilled,
  YoutubeFilled,
  CodeFilled
  } from '@ant-design/icons-vue';
</script>

<template>
  <div class="h-screen w-screen bg-gray-100 flex flex-col items-center">
    <nav class="h-16 bg-gray-200 w-full" >
        <ul class="w-full flex items-center justify-end gap-4 p-4 font-semibold">
          <li>
                <a target="__blank"  class="text-xl" href="/projects" >Projects</a>
            </li>

            <li>
                <a target="__blank"  class="text-xl" href="/about">About</a>
            </li>

            <li>
                <a target="__blank"  class="text-xl flex items-center" href="https://github.com/lucassmsilva">
                  <GithubFilled />
                </a>
            </li>

            <li>
                <a target="__blank"  class="text-xl flex items-center" href="https://www.linkedin.com/in/lucassmsilva">
                  <LinkedinFilled />
                </a>
            </li>
        </ul>
    </nav>
    <main class="flex flex-1 flex-col">
      <div class="w-full h-full flex justify-center">        
        <div class="w-full flex flex-col">
          <section class="pb-4">
            <div class="w-full flex items-center justify-center pt-8 ">
              <span>
                <svg width="128px" height="128px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet"><path d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2zm11.275 44.508h-20.55V17.492h6.063v23.799h14.488v5.217z" fill="#000000"></path></svg>
              </span>
              <span class="text-8xl font-bold text-gray-900">
                ucas Silva
              </span>
            </div>
          </section>




          <section class="flex flex-col gap-8 pt-10">
            <div>
              <label class="text-2xl font-medium font-mono">Who am I?</label>
              <p class="w-full text-center font-mono">
                A simple man motived by <strong>challenges</strong>, to create and evolve as programmer and individual
              </p>
            </div>

            <div>
              <label class="flex gap-1 text-2xl items-baseline">
                <CodeFilled />
                <span class="font-medium font-mono">
                  Main skills
                </span>
              </label>

              <ul class="font-mono flex gap-4 pb-2">
                <li class="px-2 py-1 bg-gray-200 rounded-md">C#</li>
                <li class="px-2 py-1 bg-gray-200 rounded-md">PHP</li>
                <li class="px-2 py-1 bg-gray-200 rounded-md">JAVASCRIPT</li>
                <li class="px-2 py-1 bg-gray-200 rounded-md">ORACLE PL/SQL</li>
                <li class="px-2 py-1 bg-gray-200 rounded-md">GIT</li>
                <li class="px-2 py-1 bg-gray-200 rounded-md">PYTHON</li>
                <li class="px-2 py-1 bg-gray-200 rounded-md">HTML</li>
                <li class="px-2 py-1 bg-gray-200 rounded-md">CSS</li>
              </ul>

              <ul class="font-mono flex gap-4">
                <li class="px-2 py-1 bg-gray-200 rounded-md">VUE JS</li>
                <li class="px-2 py-1 bg-gray-200 rounded-md">.NET </li>
                <li class="px-2 py-1 bg-gray-200 rounded-md">LARAVEL</li>
                <li class="px-2 py-1 bg-gray-200 rounded-md">REACT</li>
                <li class="px-2 py-1 bg-gray-200 rounded-md">REACT NATIVE</li>

              </ul>
              
            </div>
            
            <div>
              <label class="text-2xl font-medium font-mono">Hobbies</label>
              <ul class="font-mono">
                <li>
                  <BookFilled />
                  Read books and light novels
                </li>
                <li>
                  <YoutubeFilled /> 
                  Learn cooking skills and watch series
                </li>
                <li>
                  <CrownFilled /> 
                  Play chess
                </li>
                <li>
                  <SkinFilled />
                  Go to gym
                </li>
              </ul>
            </div>
          </section>
          </div>
        </div>
    </main>
  </div>
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
