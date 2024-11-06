import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://edition.cnn.com/");
  await page.getByLabel("Search Icon").click();
  await expect(page.locator("#pageHeader").getByRole("link", { name: "CNN logo" })).toBeVisible();
  await expect(page.locator("#pageHeader")).toContainText("Entertainment");
  await page.locator("#pageHeader").getByPlaceholder("Search CNN...").click();
  await page.locator("#pageHeader").getByPlaceholder("Search CNN...").press("CapsLock");
  await page.locator("#pageHeader").getByPlaceholder("Search CNN...").fill("Cat");
  await page.locator("#pageHeader").getByRole("button", { name: "Submit" }).click();
  await expect(page.locator(".container__link").first()).toBeVisible();
  await expect(page.getByRole("link", { name: "15 things to prevent pets" })).toBeVisible();
  await page.getByRole("link", { name: "15 things to prevent pets" }).click();
  await page.waitForURL("**/pets/how-to-stop-cats-pets-from-ruining-furniture");
});
