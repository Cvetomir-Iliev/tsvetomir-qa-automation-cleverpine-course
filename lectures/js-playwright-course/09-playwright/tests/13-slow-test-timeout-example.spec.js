import { test } from "@playwright/test";

// Solution: Increase timeout or fix slow operations
test("slow test", async () => {
  test.setTimeout(60000); // 60 seconds
  // rest of test
});
