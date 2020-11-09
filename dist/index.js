"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const fast_node_logger_1 = require("fast-node-logger");
/** server mode base on process.env.NODE_ENV */
let nodeMode = process.env.NODE_ENV || "production";
if (process.env.NODE_ENV) {
    nodeMode = process.env.NODE_ENV;
}
async function main() {
    /** ready to use instance of logger */
    const logger = await fast_node_logger_1.createLogger({
        level: nodeMode === "development" ? "trace" : "warn",
        prettyPrint: { colorize: true, translateTime: " yyyy-mm-dd HH:MM:ss" },
        logDir: path_1.default.join(process.cwd(), "logs"),
    });
    /** put your code below here */
    logger.trace("logger started!");
    // alternative to access logger
    fast_node_logger_1.writeLog(`here is my secret: ${process.env.MY_SECRET}`, {
        stdout: true,
        level: "warn",
    });
    return process.env.MY_SECRET;
}
exports.main = main;
main().catch((err) => {
    fast_node_logger_1.writeLog(err, { level: "error", stdout: true });
});
//# sourceMappingURL=index.js.map