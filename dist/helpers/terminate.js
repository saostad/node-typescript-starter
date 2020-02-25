"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function terminate({ coreDump, timeout, server }) {
    const exit = (code) => {
        coreDump ? process.abort() : process.exit(code);
    };
    return (code, reason) => (err, promise) => {
        console.error(`Process exiting with code: ${code}, reason: ${reason}`, promise);
        if (err && err instanceof Error) {
            console.error(err.message);
        }
        /** Try to graceful shutdown */
        server === null || server === void 0 ? void 0 : server.close(exit);
        if (timeout) {
            // TODO: this seams a bug in @types/node
            // @ts-ignore
            setTimeout(exit, timeout).unref();
        }
        else {
            exit(code);
        }
    };
}
exports.terminate = terminate;
//# sourceMappingURL=terminate.js.map