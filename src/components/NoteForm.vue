<script setup lang="ts">
import { Note } from '@/types/note'
import { ref } from 'vue';

const currentContent = ref("")
const currentTitle = ref("")

const emit = defineEmits<{
    (e: 'add', note: Note): void
}>()

function onAdd() {
    if (
        !currentTitle.value || currentTitle.value.trim() === "" ||
        !currentContent.value || currentContent.value.trim() === ""
    ) {
        return;
    }

    const newNote: Note = {
        id: crypto.randomUUID(),
        title: currentTitle.value,
        content: currentContent.value,
        date: new Date()
    }

    currentContent.value = ""
    currentTitle.value = ""
    emit('add', newNote)
}

</script>

<template>
    <div class="form">
        <label for="title">Title</label>
        <input autofocus name="title" maxlength="20" placeholder="Go to market..." v-model="currentTitle" />

        <label for="content">Content</label>
        <textarea name="content" placeholder="Buy some melons..." v-model="currentContent" />

        <button type="button" @click="onAdd">+ADD</button>
    </div>
</template>

<style scoped>
button {
    background-color: var(--primary);
}

input {
    max-width: 220px;
    padding: 1em 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
}

textarea {
    max-width: 100%;
    min-width: 100%;

    max-height: 100px;
    min-height: 100px;

    resize: none;

    padding: 1em 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 1em;
}
</style>
