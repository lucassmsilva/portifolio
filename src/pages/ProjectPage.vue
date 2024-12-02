<script setup>

import {
    GithubFilled,
} from '@ant-design/icons-vue';
</script>

<template>
    <div class="overflow-auto py-4" style="margin: 0 auto; max-width: 1200px;">
        <h4 class="title">Meus Projetos</h4>
        <div class="w-full flex flex-col gap-4">
            <div class="card w-full">
                <div>
                    <GithubFilled></GithubFilled>
                    <a class="title" href="https://github.com/lucassmsilva/Sistema.Presenca"> Sistema.Presença </a>
                </div>

                <p>🚀 Desenvolvimento de Aplicação Web para Controle de Presença com Arquitetura Limpa e Design Patterns
                    🚀
                    Estou entusiasmado em compartilhar o tema do meu TCC, onde explorei a criação de um sistema web de
                    controle de presença utilizando arquitetura limpa, Entity Framework e Vue.js.
                    🔍 Resumo do Projeto: Este trabalho investiga a aplicação estratégica de padrões de design na
                    concepção
                    de um sistema web de presença, com o objetivo de otimizar sua eficiência e escalabilidade. A revisão
                    da
                    literatura destaca a importância dos padrões de design como elementos fundamentais no
                    desenvolvimento de
                    sistemas de software robustos.
                </p>
            </div>

            <div class="card w-full">
                <div>
                    <GithubFilled></GithubFilled>
                    <a class="title" href="https://github.com/lucassmsilva/Depara"> DEPARA </a>
                </div>

                <p>O método de "depara" ou "mapeamento de dados" é comumente chamado de ETL (Extract, Transform, Load)
                    no contexto de transferência e transformação de dados entre sistemas. Nesse projeto eu utilizo
                    técnicas de distância entre strings para encontrar as duplicatas numa base
                    utilizando a <strong>Distância de Levenshtein (ou Edit Distance)</strong> e o <strong>Coeficiente de
                        Jaccard</strong>
                </p>

            </div>

            <div class="card w-full">
                <div>
                    <GithubFilled></GithubFilled>
                    <a class="title" href="https://github.com/lucassmsilva/processar-documentos"> Processar Documentos
                    </a>
                </div>

                <p> Nesse Projeto eu utilizo o <strong>Microsoft.Office.Interop.Word;</strong> para aproveitar o Word
                    instalado na máquina e a partir de um templates gerar o documento final em PDF a partir de dados
                    dinamizados.
                </p>

            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    background: hsl(0, 0, 90%);
    padding: 20px;
    border-radius: 20px;
    position: relative;
    box-shadow: var(--shadow);
    flex: 1;
    min-width: 150px;
}
</style>