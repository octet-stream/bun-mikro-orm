// import "reflect-metadata"

import {MikroORM} from "@mikro-orm/mysql"

import {config} from "./config.ts"

export const orm = await MikroORM.init(config)
