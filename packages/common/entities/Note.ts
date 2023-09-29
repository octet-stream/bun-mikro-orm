import {Entity, Property, OptionalProps} from "@mikro-orm/core"

import {Record} from "./Record.ts"

@Entity()
export class Note extends Record {
  [OptionalProps]?: "createdAt" | "updatedAt" | "completed"

  @Property()
  title!: string

  @Property({nullable: true, default: null})
  details!: string | null

  @Property({default: false})
  completed: boolean = false
}
