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
dotenv_1.default.config();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield fast_node_logger_1.createLogger();
        /** put your code below here */
        fast_node_logger_1.writeLog("logger started!", { stdout: true });
        fast_node_logger_1.writeLog(`here is my secret: ${process.env.MY_SECRET}`, { stdout: true });
        return process.env.MY_SECRET;
    });
}
exports.main = main;
main();
//# sourceMappingURL=app.js.map