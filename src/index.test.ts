import { main } from "./index";

test("process.env", async () => {
  const result = await main();
  expect(result).toBe("Hellooooo");
});
