import {resolve} from "node:path"

import {defineConfig} from "@mikro-orm/mysql"

export const config = defineConfig({
  dbName: process.env.MIKRO_ORM_DBNAME,
  host: process.env.MIKRO_ORM_HOST,
  port: parseInt(process.env.MIKRO_ORM_PORT || "", 10) || undefined,
  user: process.env.MIKRO_ORM_USER,
  password: process.env.MIKRO_ORM_PASSWORD,
  entities: Array.of(resolve("src", "db", "entities", "**", "*.ts"))
})
