import {Property} from "@mikro-orm/core"

import {Node} from "./Node.ts"

export abstract class Record extends Node {
  @Property({type: "datetime"})
  readonly createdAt: Date = new Date()

  @Property({type: "datetime", onUpdate: () => new Date()})
  readonly updatedAt: Date = new Date()
}
