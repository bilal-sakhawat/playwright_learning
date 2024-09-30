const {test, expect} = require('@playwright/test')

test('Child Window - Test Case', async ({browser})=> {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    const [childPage] = await Promise.all([

    context.waitForEvent('page'),
    page.locator("[href*='documents-request']").click(),
    ])

    var message = await childPage.locator('.red').textContent();
    console.log(message)

    //Extracting email address from the message

    function isValid(str) { 
        return /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(str); 
    } 
      
    function extract(str) { 
        const words = str.split(' '); 
        const email = []; 
        for (const word of words) { 
            if (isValid(word)) { 
                email.push(word); 
            } 
        } 
        return email[0]; 
    } 
    
    console.log(extract(message));

})
