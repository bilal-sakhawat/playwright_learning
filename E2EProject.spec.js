const {test, expect} = require('@playwright/test');
const { use } = require('../playwright.config');

test('E2E Project', async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    const userEmail = 'billgates@gmail.com';
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(userEmail);
    await page.locator("#userPassword").fill('Pak@12345.')
    await page.locator("#login").click();
    await expect(page).toHaveTitle("Let's Shop");
    await page.waitForLoadState("networkidle");
    // await page.locator(".card-body b").last().waitFor();
    // console.log(await page.locator(".card-body b").allTextContents());
    const reqProd = 'IPHONE 13 PRO';
    const products = await page.locator(".card-body");
    //console.log(await page.locator(".card-body").count());
    //const listOfProducts = await page.locator(".card-body b").allTextContents();
    //using loop to see the product name
    for(let i=0; i < await products.count(); ++i){
        if(await products.nth(i).locator("b").textContent() === reqProd){
            await console.log(products.nth(i).locator("b").textContent());
            await products.nth(i).locator("text = Add to Cart").click();
            break;
        }
    }
    await page.locator("[routerlink*='/cart']").click();
    await page.locator('div li').first().waitFor();
    expect(await page.locator("h3:has-text('IPHONE 13 PRO')").isVisible()).toBeTruthy();
    await page.locator("text = Checkout").click();
    await page.locator("[placeholder*='Country']").pressSequentially('ind');
    const dropdown = page.locator('.ta-results');
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator('button').count();
    for(let i = 0; i < optionsCount ; ++i){
        const optionValue = await dropdown.locator('button').nth(i).textContent();
        if(optionValue === ' India'){
            await dropdown.locator('button').nth(i).click();
            break;
        }
    }

    expect(page.locator(".user__name [type='text']").first()).toHaveText(userEmail);
    await page.locator(".action__submit").click();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderID = await page.locator('.em-spacer-1 .ng-star-inserted').textContent();
    console.log(orderID);
    const actualOrderID = '663a9705a86f8f74dcdb522d';

    await page.locator("button[routerlink='/dashboard/myorders']").click();

    await page.locator("tbody").waitFor();
    const orderRows = await page.locator("tbody tr")

    for(let i = 0; i < await orderRows.count(); ++i){
        const viewOrderID = await orderRows.nth(i).locator("th").textContent();
        if(orderID.includes(viewOrderID)){
            await orderRows.nth(i).locator("button").first().click();
            break;
        }
    }

    await page.pause();

    expect(orderID.includes(await page.locator(".col-text").textContent())).toBeTruthy();

    await page.pause();
})