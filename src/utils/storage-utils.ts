import { Note } from '@/types/note'

const getNotes = (): Note[] | null => {
    const loadedNotes: string | null = localStorage.getItem("NOTES")
    if (!loadedNotes) {
        return null
    }
    const parsedNotes: Note[] = JSON.parse(loadedNotes)
    if (!parsedNotes || !Array.isArray(parsedNotes)) {
        return null
    }

    return parsedNotes.map((note: Note) => {
        return {
            ...note,
            date: new Date(note.date)
        }
    })
}

const saveNotes = (notes: Note[]): void => {
    localStorage.setItem("NOTES", JSON.stringify(notes))
}

const StorageUtils = {
    getNotes,
    saveNotes
}

export default StorageUtils;
