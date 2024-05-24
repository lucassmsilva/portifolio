<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue'
import { toRef } from 'vue';
import { useField } from 'vee-validate';

interface BaseInputProps extends InputHTMLAttributes {
    name: string,
    label?: string,
    icon?: string,
    id: string,
    modelValue: string,
}

const props = defineProps<BaseInputProps>();

const { value, errorMessage } = useField(toRef(props, 'name'), undefined, {
  syncVModel: true,
});

</script>


<template>

    <div class="w-full">
        <label :for="id">{{ label }} <span v-if="props.required">*</span></label>
        <div class="flex w-full align-items-center">
            <input v-bind="props" v-model="value">
        </div>
        <small v-if="errorMessage" class="text-red-500">{{ errorMessage }}</small>
    </div>
</template>