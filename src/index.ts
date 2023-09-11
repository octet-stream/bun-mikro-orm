import {orm} from "./lib/db/orm.ts"

import {Note} from "./db/entities.ts"

const generator = orm.getSchemaGenerator()

await generator.refreshDatabase()

const input = [
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

const em = orm.em.fork()

const notes = input.map(note => em.create(Note, note))

await em.persistAndFlush(notes)

console.log(notes)

await orm.close()
