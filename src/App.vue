<script setup>
import {onMounted, ref} from 'vue';

import { 
  BookFilled,
  CrownFilled,
  SkinFilled,
  GithubFilled,
  LinkedinFilled,
  YoutubeFilled,
  CodeFilled
  } from '@ant-design/icons-vue';

const animmatedText = ref('');
const textos = ref(['Fullstack Developer', 'passionate about coding']);
const index  = ref(0);

async function loopThoughText(){
  let text = textos.value[index.value];
  console.log(text)
  for (let char of text){
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(animmatedText.value += char);
        }, 150)
      });
  }

  for (let char in text){
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(animmatedText.value = animmatedText.value.slice(0, -1));
      }, 100)
    });
  }

  index.value = (index.value + 1) % textos.value.length;
  loopThoughText()
}

onMounted(() => {
  loopThoughText();
})

</script>

<template>
  <div class="h-screen w-screen flex flex-col items-center dark:bg-gray-800 dark:background  dark:text-white" >
    <nav class="h-16 bg-gray-900 w-full" >
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
    <main class="flex flex-1 flex-col px-2">
      <div class="w-full h-full flex xl:justify-center">        
        <div class="w-full flex flex-col">
          <section class="pb-4">
            <div class="w-full flex items-center justify-center pt-8 ">
              <span class="hidden xl:block hover:bg-accent dark:bg-gray-100  rounded-full">
                <svg width="128px" height="128px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet"><path d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2zm11.275 44.508h-20.55V17.492h6.063v23.799h14.488v5.217z" fill="#000000"></path></svg>
              </span>
              <span class="xl:hidden">
                <svg width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet"><path d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2zm11.275 44.508h-20.55V17.492h6.063v23.799h14.488v5.217z" fill="#000000"></path></svg>
              </span>
              <span class="text-4xl xl:text-8xl font-bold text-gray-100">
                ucas Silva
              </span>
            </div>

          </section>


          <div class="flex flex-col-reverse items-center lg:flex-row ">
            <section class="flex flex-col gap-8 pt-10">
              <div class="border-l-2 border-accent w-full px-2">
                <span class="text-xl">
                  <strong>I am </strong>
                  <em>
                    {{ animmatedText }}
                  </em>
              </span>
              </div>

              <div>
                <label class="flex gap-1 text-2xl items-baseline pb-2">
                  <CodeFilled />
                  <span class="font-medium font-mono">
                    Main skills
                  </span>
                </label>

                <ul class="font-mono flex w-full flex-wrap gap-4 pb-2">
                  <li class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-500 hover:font-bold hover:text-gray-100">C#</li>
                  <li class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-500 hover:font-bold hover:text-gray-100">PHP</li>
                  <li class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-500 hover:font-bold hover:text-gray-100">JAVASCRIPT</li>
                  <li class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-500 hover:font-bold hover:text-gray-100">ORACLE PL/SQL</li>
                  <li class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-500 hover:font-bold hover:text-gray-100">GIT</li>
                  <li class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-500 hover:font-bold hover:text-gray-100">PYTHON</li>
                  <li class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-500 hover:font-bold hover:text-gray-100">HTML</li>
                  <li class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-500 hover:font-bold hover:text-gray-100">CSS</li>
                  <li class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-500 hover:font-bold hover:text-gray-100">VUE JS</li>
                  <li class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-500 hover:font-bold hover:text-gray-100">.NET </li>
                  <li class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-500 hover:font-bold hover:text-gray-100">LARAVEL</li>
                  <li class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-500 hover:font-bold hover:text-gray-100">REACT</li>
                  <li class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-500 hover:font-bold hover:text-gray-100">REACT NATIVE</li>

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
                    Learn cooking skills
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

            <img src="./assets/man_coding.svg" alt="A man coding" class="w-1/2">
          </div>


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

.background {
  background-image: url("./assets/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

img {
  filter: grayscale(1);
  transition: .1s;
}

img:hover {
  transform: rotate(-1deg) scale(1.02);
  filter: none;
}

li:hover {
  color: var(--accent-color);
}
</style>
