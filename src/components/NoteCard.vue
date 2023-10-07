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
        <div class="card-header-container">
            <div class="card-header">
                <h3>{{ note.title }}</h3>
                <h6 class="date">
                    {{ note.date.toLocaleDateString() }}
                </h6>
            </div>

            <button @click="onDelete">X</button>
        </div>

        <p>
            {{ note.content }}
        </p>
    </div>
</template>

<style scoped>
button {
    background: none;
}

button:hover {
    border-color: var(--secondary);
}

.date {
    color: var(--primary);
}

.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid var(--primary);
    padding: 1em;
    gap: 1em;
    word-wrap: break-word;
    word-break: break-all;
    border-radius: 10px;
}

.card-header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
}
</style>
