const {test, expect} = require('@playwright/test');

test('Using getBy - Test Case', async ({page})=>{

    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Gender").selectOption("Male");
    await page.getByLabel("Employed").click();
    await page.getByPlaceholder("Password").fill("Pak@12345");

    await page.getByRole("button", {name: "Submit"}).click();

    await page.getByRole("link", {name: "Shop"}).click();

    await page.locator("app-card").filter({hasText: "Blackberry"}).getByRole("button", {name: "Add "}).click();

    await page.getByText("Checkout ( 1 )").click();

    await page.getByRole("button", {name: "Checkout"}).click();

    await page.pause();

    const countryName = "Pakistan";

    await page.locator("#country").pressSequentially(countryName);

    // const dropdown = page.locator('.ta-results');
    // await dropdown.waitFor();
    // const optionsCount = await dropdown.locator('button').count();
    // for(let i = 0; i < optionsCount ; ++i){
    //     const optionValue = await dropdown.locator('button').nth(i).textContent();
    //     if(optionValue === ' India'){
    //         await dropdown.locator('button').nth(i).click();
    //         break;
    //     }
    // }

    // const dropdown = await page.locator('suggestion');
    // await dropdown.waitFor();
    // await page.locator('suggestion').waitFor();
    // const listCount = await dropdown.locator("ul").count();
    // for (let i = 0; i < listCount; ++i){
    //     if(countryName === await dropdown.locator('ui').nth(i).textContent()){
    //         dropdown.locator('ui').nth(i).click();
    //         break;
    //     }

    // }

    await page.getByText("Pakistan").waitFor();
    await page.getByText("Pakistan").click();

    // await page.getByLabel("I agree with the term & Conditions").click();

    // await page.getByLabel("I agree with the term &").click();

    await page.getByRole("button", {name: "Purchase"}).click();

    // await expect(page.locator(".alert-success").toContainText("Success"));

    await page.pause();


})