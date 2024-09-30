const {test, expect} = require('@playwright/test')

test('Assignment - Sign up/Log in - Test Case', async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill('billgates@gmail.com');
    await page.locator("#userPassword").fill('Pak@12345')
    await page.locator("#login").click();
    await expect(page).toHaveTitle("Let's Shop");
    //await page.waitForLoadState("networkidle");
    await page.locator(".card-body b").last().waitFor();
    console.log(await page.locator(".card-body b").allTextContents());

})