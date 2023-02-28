import type { ECD_ENV_DATA } from "@core/types/ENV/ENV.types";
export declare const ECDENV: {
    data: ECD_ENV_DATA;
    $INIT(url?: string): Promise<void>;
};
