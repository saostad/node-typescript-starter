"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
test("process.env", async () => {
    const result = await index_1.main();
    expect(result).toBe("Hellooooo");
});
//# sourceMappingURL=index.test.js.map