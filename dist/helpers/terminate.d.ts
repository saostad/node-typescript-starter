interface TerminateInput {
    coreDump: boolean;
    timeout?: number;
    server?: any;
}
export declare function terminate({ coreDump, timeout, server }: TerminateInput): (code: number, reason: string) => (err: any, promise?: any) => void;
export {};
