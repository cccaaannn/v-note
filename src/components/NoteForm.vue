<script setup lang="ts">
import { Note } from '@/types/note'
import { ref } from 'vue';

const currentText = ref("")

const emit = defineEmits<{
    (e: 'add', note: Note): void
}>()

function onAdd() {
    if (!currentText.value || currentText.value.trim() === "") {
        return;
    }

    const newNote: Note = {
        id: crypto.randomUUID(),
        content: currentText.value
    }

    currentText.value = ""
    emit('add', newNote)
}

</script>

<template>
    <div class="form">
        <textarea autofocus v-model="currentText" rows="5" />
        <button type="button" @click="onAdd">+ADD</button>
    </div>
</template>

<style scoped>
button {
    background-color: var(--primary);
}

.form {
    display: flex;
    flex-direction: column;
    gap: 1em;
}
</style>
