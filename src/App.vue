<script setup>
import { onMounted, ref } from 'vue';

import {
  BookFilled,
  CrownFilled,
  SkinFilled,
  GithubFilled,
  LinkedinFilled,
  YoutubeFilled,
  CodeFilled
} from '@ant-design/icons-vue';
import DarkModeButton from "./components/DarkModeButton.vue";

const animmatedText = ref('');
const textos = ref(['Fullstack Developer', 'passionate about coding']);
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
})

</script>

<template>
  <div class="h-screen w-screen flex flex-col items-center dark:bg-gray-800  background dark:text-white">
    <nav class="h-16 bg-gray-200 dark:bg-gray-900 w-full">
      <ul class="w-full flex items-center justify-end gap-4 p-4 font-semibold">
        <li>
          <a target="__blank" class="text-xl" href="/projects">Projects</a>
        </li>

        <li>
          <a target="__blank" class="text-xl" href="/about">About</a>
        </li>

        <li>
          <a target="__blank" class="text-xl flex items-center" href="https://github.com/lucassmsilva">
            <GithubFilled />
          </a>
        </li>

        <li>
          <a target="__blank" class="text-xl flex items-center" href="https://www.linkedin.com/in/lucassmsilva">
            <LinkedinFilled />
          </a>
        </li>

        <li>
          <DarkModeButton />
        </li>
      </ul>
    </nav>
    <main class="flex flex-1 flex-col px-4 lg:px-10 ">
      <div class="w-full h-full flex xl:justify-center">
        <div class="w-full flex flex-col">
          <section class="pb-4">
            <div class="w-full flex items-center justify-center pt-8 ">
              <span class="hidden xl:block hover:bg-accent dark:bg-gray-100 dark:hover:bg-accent rounded-full">
                <svg width="128px" height="128px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                  class="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet">
                  <path
                    d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2zm11.275 44.508h-20.55V17.492h6.063v23.799h14.488v5.217z"
                    fill="#000000"></path>
                </svg>
              </span>
              <span class="xl:hidden">
                <svg width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                  class="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet">
                  <path
                    d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2zm11.275 44.508h-20.55V17.492h6.063v23.799h14.488v5.217z"
                    fill="#000000"></path>
                </svg>
              </span>
              <span class="text-4xl xl:text-8xl font-bold dark:text-gray-100 text-gray-900">
                ucas Silva
              </span>
            </div>

          </section>


          <div class="flex flex-col-reverse items-center lg:flex-row">
            <section class="flex flex-col gap-8 pt-10 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md p-4">
              <div class="border-l-2 border-accent w-full px-2">
                <span class="text-xl">
                  <strong>I am </strong>

                  <em>
                    <code>
                    {{ animmatedText }}
                  </code>
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
                <ul class="font-mono flex w-full flex-wrap gap-4 pb-2 rounded-md">
                  <li class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-500 hover:font-bold hover:text-gray-100 group">
                    C#
                    <div class="hidden group-hover:block absolute bg-gray-500 left-0 bottom-0 w-full h-[40%] transition-transform transform translate-y-full group-hover:translate-y-0">
                      <div class="w-full lg:w-1/2 p-4">
                        <p>C# é uma linguagem de programação, multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma . NET. A sua sintaxe orientada a objetos foi baseada no C++ mas inclui muitas influências de outras linguagens de programação, como Object Pascal e, principalmente, Java.</p>
                      </div>
                    </div>
                  </li>
                  <li class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-500 hover:font-bold hover:text-gray-100 group">
                    PHP
                    <div class="hidden group-hover:block absolute bg-gray-500 left-0 bottom-0 w-full h-[40%] transition-transform transform translate-y-full group-hover:translate-y-0">
                      <div class="w-full lg:w-1/2 p-4">
                        <p>PHP (um acrônimo recursivo para "PHP: Hypertext Preprocessor", originalmente Personal Home Page) é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web. O código é interpretado no lado do servidor pelo módulo PHP, que também gera a página web a ser visualizada no lado do cliente.</p>
                      </div>
                    </div>
                  </li>
                  <li class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-500 hover:font-bold hover:text-gray-100 group">
                    JAVASCRIPT
                    <div class="hidden group-hover:block absolute bg-gray-500 left-0 bottom-0 w-full h-[40%] transition-transform transform translate-y-full group-hover:translate-y-0">
                      <div class="w-full lg:w-1/2 p-4">
                        <p>JavaScript é uma linguagem de programação interpretada, amplamente utilizada para criar comportamento dinâmico em páginas web. É uma das principais tecnologias da web, ao lado de HTML e CSS, permitindo a criação de interfaces interativas e complexas em websites.</p>
                      </div>
                    </div>
                  </li>
                  <li class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-500 hover:font-bold hover:text-gray-100 group">
                    ORACLE PL/SQL
                    <div class="hidden group-hover:block absolute bg-gray-500 left-0 bottom-0 w-full h-[40%] transition-transform transform translate-y-full group-hover:translate-y-0">
                      <div class="w-full lg:w-1/2 p-4">
                        <p>PL/SQL é uma extensão procedural da linguagem SQL, usada em bancos de dados Oracle. Permite a criação de scripts complexos e processos automáticos dentro do banco de dados, combinando o poder do SQL com estruturas de programação.</p>
                      </div>
                    </div>
                  </li>
                  <li class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-500 hover:font-bold hover:text-gray-100 group">
                    GIT
                    <div class="hidden group-hover:block absolute bg-gray-500 left-0 bottom-0 w-full h-[40%] transition-transform transform translate-y-full group-hover:translate-y-0">
                      <div class="w-full lg:w-1/2 p-4">
                        <p>Git é um sistema de controle de versão distribuído, amplamente utilizado para gerenciar o desenvolvimento de software. Permite que múltiplos desenvolvedores trabalhem simultaneamente em um projeto, rastreando mudanças e facilitando a colaboração.</p>
                      </div>
                    </div>
                  </li>
                  <li class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-500 hover:font-bold hover:text-gray-100 group">
                    PYTHON
                    <div class="hidden group-hover:block absolute bg-gray-500 left-0 bottom-0 w-full h-[40%] transition-transform transform translate-y-full group-hover:translate-y-0">
                      <div class="w-full lg:w-1/2 p-4">
                        <p>Python é uma linguagem de programação de alto nível, conhecida por sua sintaxe clara e legível. É amplamente utilizada em várias áreas, incluindo desenvolvimento web, automação de scripts, análise de dados, inteligência artificial e mais.</p>
                      </div>
                    </div>
                  </li>
                  <li class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-500 hover:font-bold hover:text-gray-100 group">
                    HTML
                    <div class="hidden group-hover:block absolute bg-gray-500 left-0 bottom-0 w-full h-[40%] transition-transform transform translate-y-full group-hover:translate-y-0">
                      <div class="w-full lg:w-1/2 p-4">
                        <p>HTML (HyperText Markup Language) é a linguagem padrão para criação de páginas web. Estrutura o conteúdo na web através de elementos, definindo títulos, parágrafos, links, imagens e outros componentes.</p>
                      </div>
                    </div>
                  </li>
                  <li class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-500 hover:font-bold hover:text-gray-100 group">
                    CSS
                    <div class="hidden group-hover:block absolute bg-gray-500 left-0 bottom-0 w-full h-[40%] transition-transform transform translate-y-full group-hover:translate-y-0">
                      <div class="w-full lg:w-1/2 p-4">
                        <p>CSS (Cascading Style Sheets) é uma linguagem de estilo utilizada para descrever a apresentação de um documento escrito em HTML ou XML. Define a aparência e o layout de páginas web, permitindo separação entre o conteúdo e o design.</p>
                      </div>
                    </div>
                  </li>
                  <li class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-500 hover:font-bold hover:text-gray-100 group">
                    VUE JS
                    <div class="hidden group-hover:block absolute bg-gray-500 left-0 bottom-0 w-full h-[40%] transition-transform transform translate-y-full group-hover:translate-y-0">
                      <div class="w-full lg:w-1/2 p-4">
                        <p>Vue.js é um framework JavaScript progressivo para a construção de interfaces de usuário. Focado na camada de visualização, facilita a criação de aplicações de uma página através de componentes reutilizáveis.</p>
                      </div>
                    </div>
                  </li>
                  <li class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-500 hover:font-bold hover:text-gray-100 group">
                    .NET
                    <div class="hidden group-hover:block absolute bg-gray-500 left-0 bottom-0 w-full h-[40%] transition-transform transform translate-y-full group-hover:translate-y-0">
                      <div class="w-full lg:w-1/2 p-4">
                        <p>.NET é uma plataforma de desenvolvimento de software criada pela Microsoft, que suporta a criação e execução de diversos tipos de aplicações. Oferece um ambiente de desenvolvimento consistente e bibliotecas abrangentes.</p>
                      </div>
                    </div>
                  </li>
                  <li class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-500 hover:font-bold hover:text-gray-100 group">
                    LARAVEL
                    <div class="hidden group-hover:block absolute bg-gray-500 left-0 bottom-0 w-full h-[40%] transition-transform transform translate-y-full group-hover:translate-y-0">
                      <div class="w-full lg:w-1/2 p-4">
                        <p>Laravel é um framework PHP para desenvolvimento web, conhecido por sua sintaxe expressiva e elegante. Simplifica tarefas comuns, como roteamento, autenticação e caching, facilitando o desenvolvimento rápido de aplicações robustas.</p>
                      </div>
                    </div>
                  </li>
                  <li class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-500 hover:font-bold hover:text-gray-100 group">
                    REACT
                    <div class="hidden group-hover:block absolute bg-gray-500 left-0 bottom-0 w-full h-[40%] transition-transform transform translate-y-full group-hover:translate-y-0">
                      <div class="w-full lg:w-1/2 p-4">
                        <p>React é uma biblioteca JavaScript para a construção de interfaces de usuário, mantida pelo Facebook. Utiliza uma abordagem baseada em componentes, permitindo o desenvolvimento de aplicações web escaláveis e de alta performance.</p>
                      </div>
                    </div>
                  </li>
                  <li class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-500 hover:font-bold hover:text-gray-100 group">
                    REACT NATIVE
                    <div class="hidden group-hover:block absolute bg-gray-500 left-0 bottom-0 w-full h-[40%] transition-transform transform translate-y-full group-hover:translate-y-0">
                      <div class="w-full lg:w-1/2 p-4">
                        <p>React Native é um framework para desenvolvimento de aplicativos móveis utilizando JavaScript e React. Permite criar aplicativos nativos para iOS e Android a partir de um único código base.</p>
                      </div>
                    </div>
                  </li>
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

            <img src="./assets/man_coding.svg" alt="A man coding" class=" w-full md:w-1/2">
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
