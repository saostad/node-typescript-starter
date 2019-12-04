import { main } from "./app";

test("process.env", async () => {
  const result = await main();
  expect(result).toBe("Hellooooo");
});
