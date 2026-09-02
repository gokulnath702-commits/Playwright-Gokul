import { chromium,expect, test } from "@playwright/test";

test(" Salesforce_Application ", async ({ page }) => {

await page.goto("https://login.salesforce.com/");
await page.getByRole("textbox", {name:"Username"}).fill("dilipkumar.rajendran@testleaf.com");
await page.getByRole("button", {name:"Log In"}).click();
await page.getByRole("textbox", {name:"Password"}).fill("TestLeaf@2025");
await page.getByRole("button", {name:"Log In"}).click();
await page.getByRole("button", {name:"App Launcher"}).click();
await page.getByRole("button", {name:"View All Applications"}).click();
await page.getByPlaceholder("Search apps or items...").fill("Individuals");
await page.getByText("Individuals", {exact:true});
await page.getByRole("link", {name:"Individuals"}).click();
await page.getByRole("button", {name:"Individuals List"}).click();
await page.getByRole("menuitem", {name:"New Individual"}).click();
await page.getByRole("button", {name:"Salutation --None--"}).click();
await page.getByText("Prof.", {exact: true}).click()
await page.getByRole("textbox", {name:"Last Name"}).fill("Gokulnath");
await page.getByRole("button", {name:"Save"}).nth(1).click();
await page.waitForTimeout(3000);

})