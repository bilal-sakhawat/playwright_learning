const {test, expect} = require('@playwright/test')

test('First PW Test Case - Browser Context', async ({browser})=> 
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.youtube.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("YouTube");
    
});

test('Second PW Test Case - Page', async ({page})=> 
{
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    
});

//https://rahulshettyacademy.com/loginpagePractise/

//tagname#class, tagname.id, [attribute='value']
test('PW Test Case for Selectors - Browser Context', async ({browser})=> 
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    //await expect(page).toHaveTitle("YouTube");
    await page.locator("input#username").fill("rahulshetty");
    await page.locator("input#password").fill("learning");
    await page.locator("input#signInBtn").click();
    var message = await page.locator("[style*='block']").textContent();
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
});

test('Valid Login Creds - Test Case', async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("input#username").fill('rahulshettyacademy');
    await page.locator("input#password").fill('learning');
    await page.locator("input#signInBtn").click();
    await expect(page).toHaveTitle("ProtoCommerce")

});

test.only('Valid Login Creds with Home Page Products - Test Case', async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("input#username").fill('rahulshettyacademy');
    await page.locator("input#password").fill('learning');
    await page.locator("input#signInBtn").click();
    await expect(page).toHaveTitle("ProtoCommerce")
    console.log(await page.locator(".card-body a").first().textContent());
    console.log(await page.locator(".card-body a").nth(1).textContent());
    console.log(await page.locator(".card-body a").nth(2).textContent());
    console.log(await page.locator(".card-body a").last().textContent());
    console.log(await page.locator(".card-body a").allTextContents());

});