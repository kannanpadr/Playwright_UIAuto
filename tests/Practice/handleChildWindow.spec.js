import {test, expect } from "@playwright/test";

test('Handle Child Windor', async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    const  btn_Click = page.locator('.float-right > a');

    const [newPage] = await Promise.all ([
         context.waitForEvent('page'),
         btn_Click.first().click(), 
    ])

    const data =await newPage.locator('.red').first().textContent();

    console.log(data);

})