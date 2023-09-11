namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "production" | "development" | "test"

    readonly MIKRO_ORM_DBNAME: string
    readonly MIKRO_ORM_HOST?: string
    readonly MIKRO_ORM_PORT?: string
    readonly MIKRO_ORM_USER: string
    readonly MIKRO_ORM_PASSWORD: string
  }
}
