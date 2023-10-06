<script setup lang="ts">

const props = defineProps<{ isActive: boolean }>()
const emit = defineEmits<{
    (e: 'click', payload: MouseEvent): void
}>()

function click(payload: MouseEvent) {
    emit('click', payload)
}

</script>

<template>
    <button type="button" @click="click"
        :style="props.isActive ? { 'background-color': 'var(--secondary)' } : { 'background-color': 'var(--primary)' }">
        {{ props.isActive ? "-" : "+" }}
    </button>
</template>

<style scoped>
button {
    padding: 0PX;
    width: 40px;
    height: 40px;
    font-size: 2em;
    background: none;
}
</style>
