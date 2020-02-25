"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const fast_node_logger_1 = require("fast-node-logger");
async function main() {
    const logger = await fast_node_logger_1.createLogger({
        prettyPrint: { colorize: true, translateTime: " yyyy-mm-dd HH:MM:ss" },
    });
    /** put your code below here */
    logger.info("logger started!", { stdout: true, level: "trace" });
    logger.info(`here is my secret: ${process.env.MY_SECRET}`, { stdout: true });
    throw "hi";
    return process.env.MY_SECRET;
}
exports.main = main;
main().catch((err) => {
    fast_node_logger_1.writeLog(err, { level: "error" });
    process.exit(100);
});
//# sourceMappingURL=app.js.map