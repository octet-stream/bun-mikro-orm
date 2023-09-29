import type {Note} from "./entities/Note.js"

export const data = [
  {
    title: "Test note #1",
    details: "I am a test note",
    completed: false
  },
  {
    title: "Test note #2",
    details: "And I am a test note! With a longer details",
    completed: true
  },
  {
    title: "So how it's going?",
    details: null,
    completed: false
  }
] satisfies Omit<Note, "id" | "createdAt" | "updatedAt">[]
