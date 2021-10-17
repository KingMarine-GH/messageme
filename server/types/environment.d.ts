declare global {
    namespace NodeJS {
        interface ProcessEnv {
            SQL_IP:   string;
            SQL_DB:   string;
            SQL_USER: string;
            SQL_PASS: string;
            SQL_PORT: number;
            EXPRESS_PORT: number;
            WS_PORT: number;
        }
    }
}

export {}