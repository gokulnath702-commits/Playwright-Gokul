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
const search= page.getByPlaceholder("Search this list...")
await search.fill("Reaha")
await search.press("Enter")
const select = page.getByText("Reaha" , {exact:true}).nth(1);
await page.waitForTimeout(3000);
await select.click();
//await page.getByText("Reaha" , {exact:true}).nth(1).click();
//await page.waitForTimeout(5000);
await page.getByRole("button", {name:"Edit", exact:true}).click();
const Sal = page.getByRole("button", {name:"Salutation --None--"})
await expect(Sal).toBeVisible();
await Sal.click();
await page.getByText("Mx.",{exact:true}).click();
const LNchange= page.getByRole("textbox", {name:"Last Name"});
await expect(LNchange).toBeVisible();
await LNchange.fill("Reahaupdated");
await page.waitForTimeout(5000);
})