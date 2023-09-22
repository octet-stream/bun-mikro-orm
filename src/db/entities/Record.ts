import {Property} from "@mikro-orm/core"

import {Node} from "./Node.ts"

export abstract class Record extends Node {
  @Property()
  readonly createdAt: Date = new Date()

  @Property({onUpdate: () => new Date()})
  readonly updatedAt: Date = new Date()
}
