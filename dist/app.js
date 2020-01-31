"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const fast_node_logger_1 = require("fast-node-logger");
const terminate_1 = require("./helpers/terminate");
dotenv_1.default.config();
// process.on("uncaughtException", err => {
//   writeLog([`Uncaught Exception: ${err.message}`, err], {
//     level: "fatal",
//     stdout: true,
//   });
//   process.exit(1);
// });
// process.on("unhandledRejection", (reason, promise) => {
//   writeLog([`Unhandled rejection at:`, promise, `reason: ${reason}`], {
//     level: "fatal",
//     stdout: true,
//   });
//   process.exit(1);
// });
const exitHandler = terminate_1.terminate({ coreDump: false, timeout: 0 });
process.on("uncaughtException", exitHandler(1, "Unexpected Error"));
process.on("unhandledRejection", exitHandler(1, "Unhandled Promise"));
process.on("SIGTERM", exitHandler(0, "SIGTERM"));
process.on("SIGINT", exitHandler(0, "SIGINT"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield fast_node_logger_1.createLogger();
        /** put your code below here */
        fast_node_logger_1.writeLog("logger started!", { stdout: true, level: "trace" });
        fast_node_logger_1.writeLog(`here is my secret: ${process.env.MY_SECRET}`, { stdout: true });
        throw "dhdhdhgd@@@@@@@@@@@@@@@";
        return process.env.MY_SECRET;
    });
}
exports.main = main;
main();
//# sourceMappingURL=app.js.map