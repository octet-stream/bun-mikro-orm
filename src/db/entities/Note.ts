import {Entity, Property, OptionalProps} from "@mikro-orm/core"

import {Record} from "./Record.ts"

@Entity()
export class Note extends Record {
  [OptionalProps]?: "createdAt" | "updatedAt" | "completed"

  @Property({type: "varchar"})
  title!: string

  @Property({type: "text", nullable: true, default: null})
  details!: string | null

  @Property({type: "boolean", default: false})
  completed = false
}
