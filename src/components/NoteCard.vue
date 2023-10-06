<script setup lang="ts">
import { Note } from '@/types/note'

const props = defineProps<{ note: Note }>()
const emit = defineEmits<{
    (e: 'delete', note: Note): void
}>()

function onDelete() {
    emit('delete', props.note)
}

</script>

<template>
    <div class="card">
        <p>
            {{ note.content }}
        </p>

        <div>
            <button @click="onDelete">X</button>
        </div>
    </div>
</template>

<style scoped>
button {
    background: none;
}

button:hover {
    border-color: var(--secondary);
}

.card {
    display: flex;
    justify-content: space-between;
    border: 1px solid var(--primary);
    padding: 1em;
    gap: 1em;
    word-wrap: break-word;
    word-break: break-all;
    border-radius: 10px;
}
</style>
