import { chromium,expect, test } from "@playwright/test";

test(" Salesforce_Application ", async ({ page }) => {

await page.goto("https://login.salesforce.com/");
await page.getByRole("textbox", {name:"Username"}).fill("dilipkumar.rajendran@testleaf.com");
await page.getByRole("button", {name:"Log In"}).click();
await page.getByRole("textbox", {name:"Password"}).fill("TestLeaf@2025");
await page.getByRole("button", {name:"Log In"}).click();
await page.getByRole("button", {name:"App Launcher"}).click();
await page.getByRole("button", {name:"View All Applications"}).click();
await page.waitForTimeout (1000)
await page.getByPlaceholder("Search apps or items...").fill("Leads");
await page.getByText("Leads", {exact:true});
await page.getByRole("link", {name:"Leads"}).click();
await page.getByTitle("New",{exact:true}).nth(1).click();
await page.getByRole("combobox", {name:"Salutation"}).click()
await page.getByText('Mr.', { exact: true }).click();
await page.waitForTimeout (1000)
await page.getByRole("textbox", {name:"Last Name"}).fill("Sundaram");
await page.getByRole("textbox", {name:"Company"}).fill("Virtusa");
await page.getByRole("button", {name:"Save"}).nth(1).click();
const search= page.getByPlaceholder("Search this list...")
await search.fill("Sundaram")
await search.press("Enter")
const select = page.getByText("Sundaram" , {exact:true}).nth(1);
//await expect(page.getByText("Lead Mr. Sundaram was created.")).toBeVisible(); 
await page.waitForTimeout (5000)

})