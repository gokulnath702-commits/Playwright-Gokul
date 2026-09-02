import { chromium,expect, test } from "@playwright/test";

test(" Salesforce_Application ", async ({ page }) => {

await page.goto("https://login.salesforce.com/");
await page.getByRole("textbox", {name:"Username"}).fill("dilipkumar.rajendran@testleaf.com");
await page.getByRole("button", {name:"Log In"}).click();
await page.getByRole("textbox", {name:"Password"}).fill("TestLeaf@2025");
await page.getByRole("button", {name:"Log In"}).click();
await page.getByRole("button", {name:"App Launcher"}).click();
await page.getByRole("button", {name:"View All Applications"}).click();
await page.getByRole("link", {name:"Sales",exact: true }).click();
await page.getByRole("link", {name:"Leads"}).click();
await page.getByRole("link", {name:"ss" , exact: true }).click();
await page.waitForTimeout(5000);
await page.getByRole("button", {name:"Edit"}).nth(1).click();
await page.waitForTimeout(5000);
const salu = page.getByRole("combobox", {name:"Salutation"});
await expect(salu).toBeVisible()
await salu.click()
await page.getByText("Dr.",{exact:true}).click();
const lastname = page.getByRole("textbox", {name:"Last Name"});
await lastname.clear();
await lastname.fill("Lastname_Changed");
const companyname = page.getByRole("textbox", {name:"Company"});
await companyname.clear();
await companyname.fill("Changedcompany")
await page.waitForTimeout(5000);
//await page.getByRole("button", {name:"Save"}).nth(1).click();
})
