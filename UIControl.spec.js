const {test,expect} = require('@playwright/test')

test('UI Control - Test Case', async ({browser})=> {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('learning')
    await page.locator('.radiotextsty').last().click();
    await expect(page.locator('.radiotextsty').last()).toBeChecked();
    await page.locator('#okayBtn').click();
    await page.locator('select.form-control').selectOption('consult');
    await expect(page.locator('select.form-control')).toContainText('Consultant');
    await page.locator('input#terms').click();
    await expect(page.locator('input#terms')).toBeChecked();
    //await page.pause();
    await expect(page.locator("[href*='documents']")).toHaveAttribute('class','blinkingText');
    await page.locator('input#signInBtn').click();
    await expect(page).toHaveTitle('ProtoCommerce');

});