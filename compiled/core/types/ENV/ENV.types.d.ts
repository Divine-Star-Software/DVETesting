export type DVE_ENV_DATA = {
    version: string;
    mode: "dev" | "test" | "prod";
    start: {
        world: string;
    };
};
