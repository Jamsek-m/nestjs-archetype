import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export interface EnvironmentConfig {
    port?: number | string;
    db: TypeOrmModuleOptions;
}

export interface ServerConfig {
    [envName: string]: EnvironmentConfig;
}

const config: ServerConfig = {
    development: {
        port: 3000,
        db: {
            type: "postgres",
            host: "localhost",
            port: 5432,
            database: "nestjs-sample",
            username: "postgres",
            password: "postgres",
            synchronize: true,
            entities: ["src/entities/*.entity.ts"],
            logging: true,
        },
    },
    production: {
        port: process.env.PORT || 3000,
        db: {
            type: "postgres",
            host: process.env.DB_HOST || "localhost",
            port: parseInt(process.env.DB_PORT, 10) || 5432,
            database: process.env.DB_NAME || "nestjs-sample",
            username: process.env.DB_USER || "postgres",
            password: process.env.DB_PASSWORD || "postgres",
            synchronize: (process.env.DB_AUTODDL === "true") || false,
            entities: ["dist/entities/*.entity.js"],
        },
    },
};

export function getConfiguration(): EnvironmentConfig {
    return config[process.env.NODE_ENV || "development"];
}

export function logEnvironment(): void {
    const env = process.env.NODE_ENV || "development";
    console.log(`[App] Starting process in environment: '${env}'`);
}
