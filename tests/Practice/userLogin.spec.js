import { test, expect } from "@playwright/test";

test('User Login', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    const email=page.locator('#userEmail');
    const password = page.locator('#userPassword')
    const login =page.locator('#login');
    await email.fill('kannanpbgr@gmail.com');
    await password.fill('Kannan@@@1')
    await login.click();
    await page.locator('#sidebar >p').waitFor()
    const exp =await page.locator('#sidebar >p').textContent();
    console.log(exp);
    expect(exp).toBe(' Home | Search');
    console.log( await page.locator('.card-body>h5').allTextContents())
})