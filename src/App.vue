<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { Note } from '@/types/note'
import StorageUtils from '@/utils/storage-utils'
import Layout from '@/components/Layout.vue'
import NoteCard from '@/components/NoteCard.vue'
import NoteForm from '@/components/NoteForm.vue'
import AddToggleButton from '@/components/AddToggleButton.vue'

const isAddModeActive = ref<boolean>(false)
const notes = ref<Note[]>([])

onMounted(() => {
	const savedNotes = StorageUtils.getNotes()
	if (savedNotes) {
		notes.value = [...savedNotes]
	}
})

watch(notes, () => StorageUtils.saveNotes(notes.value), { deep: true })

function onAdd(newNote: Note) {
	notes.value.push(newNote)
}

function onDelete(note: Note) {
	notes.value = notes.value.filter(n => n.id !== note.id)
}

</script>

<template>
	<Layout>

		<template #header>
			<h2>
				v-note
			</h2>

			<AddToggleButton :is-active="isAddModeActive" @click="isAddModeActive = !isAddModeActive" />
		</template>

		<template #form v-if="isAddModeActive">
			<NoteForm @add="onAdd" />
		</template>

		<template #notes>
			<template v-for="note in [...notes].reverse()">
				<NoteCard :note="note" @delete="onDelete" />
			</template>
		</template>

	</Layout>
</template>

