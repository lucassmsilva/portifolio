<script setup>
import { onMounted, ref } from 'vue';

import {
  CodeFilled
} from '@ant-design/icons-vue';

const animmatedText = ref('');
const textos = ref(['passionate about coding', 'Creative problem solver', 'Results-oriented professional', 'Lifelong learner']);
const index = ref(0);

async function loopThoughText() {
  let text = textos.value[index.value];
  console.log(text)
  for (let char of text) {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(animmatedText.value += char);
      }, 150)
    });
  }

  for (let char in text) {
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
});

</script>

<template>
    <div class="md:w-3/5 md:pt-20 flex-col md:flex-1 px-4 pl-8 md:pl-20">

        <div class="" style="font: 2.5rem/1.4em var(--ff);">
            Hello <br>
            <span style="font: bold 2.5rem/1.4em var(--ff)">I’m Lucas Silva</span> <br>
            Desenvolvedor Fullstack <br>
            Based in Mato Grosso, Brazil. <br>
        </div>

        <div class="text-xl pt-8 md:pt-20">
            <span style="font: var(--h2)">
                <CodeFilled></CodeFilled> <strong>Main skills</strong>
            </span>
            <br>
            C#, .NET CORE, ASP.NET <br>
            PHP, LARAVEL <br>
            Vue, React, Angular, React Native <br>
            ORACLE, SQLSERVER , MONGODB <br>
            GIT, HTML, CSS, JS <br>
        </div>
    </div>
    <div class="md:w-2/5 flex-col md:flex-1 justify-center px-8 pt-8 md:pt-20">

        <div class="flex flex-col gap-2">
            <img src="../assets/eu.webp" alt="Eu mesmo" class="imagem-responsiva">
            <code>
      I'm a {{ animmatedText }}
    </code>
        </div>
    </div>
</template>


<style scoped>
.imagem-responsiva {
  width: 100%; /* A imagem vai se ajustar à largura do contêiner */
  max-width: 600px;
  height: auto; /* A altura será ajustada proporcionalmente */
}


img {
  filter: grayscale(1);
  transition: .1s;
}

img:hover {
  transform: rotate(-1deg) scale(1.02);
  filter: none;
}

.padding-top-20 {
  padding-top: 20%;
}

li:hover {
  color: var(--color-accent);
}
</style>
