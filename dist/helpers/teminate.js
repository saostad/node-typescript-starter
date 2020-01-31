"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function terminate({ coreDump, timeout, server }) {
    const exit = (code) => {
        coreDump ? process.abort() : process.exit(code);
    };
    return (code, reason) => (err, promise) => {
        var _a;
        console.error([`Process exiting with code: ${code}, reason: ${reason}`, promise], {
            level: "fatal",
            stdout: true,
        });
        if (err && err instanceof Error) {
            console.error([err.message], {
                level: "fatal",
                stdout: true,
            });
        }
        /** Try to graceful shutdown */
        (_a = server) === null || _a === void 0 ? void 0 : _a.close(exit);
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
//# sourceMappingURL=teminate.js.map