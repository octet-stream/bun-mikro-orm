import {data, entities} from "@bun-mikro-orm/common"

import {orm} from "./orm.js"

const generator = orm.getSchemaGenerator()

await generator.refreshDatabase()

const em = orm.em.fork()

const notes = data.map(note => em.create(entities.Note, note))

await em.persistAndFlush(notes)

console.log(notes)

await orm.close()
