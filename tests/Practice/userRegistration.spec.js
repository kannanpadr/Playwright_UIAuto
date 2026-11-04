import {test, expect} from '@playwright/test'

test('user Registration', async({browser})=> {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

  await  page.getByText('Register here').click();

    const fName=page.locator('#firstName');
    const lName=page.getByPlaceholder('Last Name');
    const email=page.getByPlaceholder('email@example.com');
    const mobile= page.locator('#userMobile');
    const occpuation = page.locator('[formcontrolname="occupation"]')
    const gender= page.locator('[formcontrolname="gender"]');
    const password = page.locator('#userPassword');
    const confpassword = page.locator('#confirmPassword');
    const terms = page.locator('[formcontrolname="required"]');
    const register = page.locator('[name="login"]');

    await fName.fill('kannan');
    await lName.fill('Parth');
    await email.fill('kannanpbgr7@gmail.com');
    await mobile.fill('7012235008');
    await occpuation.selectOption('Engineer');
    await gender.first().check();
    await password.fill('Kannan@@@1')
    await confpassword.fill('Kannan@@@1');
    await terms.check();
    await register.click();
    await page.waitForLoadState('networkidle');
    const exptext= await page.locator('h1.headcolor').textContent();
    console.log(exptext);
    expect(exptext).toBe('Account Created Successfully')




})