<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue'
import { computed, ref } from 'vue';

interface BaseInputProps extends InputHTMLAttributes {
    name: string,
    label?: string,
    icon?: string,
    id: string,
}

const model = defineModel();
const props = defineProps<BaseInputProps>();
const error = ref("");
const cClass= computed(() => `${props.icon? 'ml-2': ''}`)

</script>

<template>

    <div class="w-full">
        <label :for="id">{{ label }} <span v-if="props.required">*</span></label>
        <div class="flex w-full align-items-center">
            <div v-if="icon">
                <i :class="icon"></i>
            </div>
            <input v-bind="props" v-model="model" :class="cClass">
        </div>
        <small v-if="error" class="text-red-500">{{ error }}</small>
    </div>
</template>