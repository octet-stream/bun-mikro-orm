import {PrimaryKey} from "@mikro-orm/core"

export abstract class Node {
  @PrimaryKey({type: "uuid"})
  id = crypto.randomUUID()
}
