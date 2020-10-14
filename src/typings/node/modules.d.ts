declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV?: "development" | "production";
    MY_SECRET?: string;
  }
}
