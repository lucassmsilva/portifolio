<script setup>
import Contact from '../components/Contact.vue';
</script>
<template>
    <div style="margin: 0 auto; max-width: 1200px;">
        <div class="flex flex-col gap-4 ">

            <h4 class="title">
                Sobre mim
            </h4>

            <div class="flex flex-col md:flex-row">

                <div class="w-full md:w-1/2">

                    <img src="../assets/eu.webp" alt="Eu mesmo" class="imagem-responsiva">
                </div>

                <div class="w-full md:w-1/2">

                    <p>
                        Formado em Engenharia de Computação pela <strong>UFMT</strong>
                    </p>

                    <p>
                        Tenho mais de 3 anos de experiência como <strong>Desenvolvedor Fullstack</strong>, tendo atuado
                        desde sistemas de
                        protocolos,
                        monitoramento de equipamentos, acadêmico e por último assinatura eletrônica, tenho experiência
                        em
                        fazer
                        relatórios, API's, e integrações com sistemas, já participei de migração entre sistemas, fazendo
                        o
                        ETL e de-para
                        de tabelas, e fiz também meu TCC baseado nos estudos de padrões de projeto, design patterns, na
                        construção de um
                        sistema de presença.

                        Em tecnologias, tenho domínio no backend o <strong>PHP e C# </strong> ambas orientadas a
                        objetos, e no front end tenho
                        mais
                        experiência com o framework <strong>Vue</strong>, mas também conheço e já utilizei react, e o
                        antigo angular.js, e
                        tenho uma base
                        sólida com javascript, html e css para resolver os problemas.
                    </p>
                </div>
            </div>

            <Contact></Contact>

        </div>
    </div>
</template>

<style scoped>
.imagem-responsiva {
    width: 100%;
    /* A imagem vai se ajustar à largura do contêiner */
    max-width: 400px;
    height: auto;
    /* A altura será ajustada proporcionalmente */
}
</style>