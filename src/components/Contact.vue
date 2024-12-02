<script setup>

import {
    GithubFilled,
    LinkedinFilled,
    MailFilled,
    WhatsAppOutlined,
} from '@ant-design/icons-vue';

</script>


<template>
    <h4 class="title py-2">Contact</h4>
    <ul class="w-full flex flex-col gap-4">
        <li>
            <a target="__blank" class="md:text-lg" href="https://github.com/lucassmsilva">
                <GithubFilled /> github.com/lucassmsilva
            </a>
        </li>

        <li>
            <a target="__blank" class="md:text-lg" href="https://www.linkedin.com/in/lucassmsilva">
                <LinkedinFilled /> www.linkedin.com/in/lucassmsilva
            </a>
        </li>

        <li>
            <a target="__blank" class="md:text-lg" href="mailto:lucassmsilvadev@gmail.com">
                <MailFilled /> lucassmsilvadev@gmail.com
            </a>
        </li>

        <li>
            <a target="__blank" class="md:text-lg decoration-none flex items-center"
                href="https://api.whatsapp.com/send?phone=5565984699962&text=Ol%C3%A1%20encontrei%20seu%20site%20e%20gostaria%20de%20entrar%20em%20contato">
                <WhatsAppOutlined /> (65) 98469-9962
            </a>
        </li>
    </ul>
</template>