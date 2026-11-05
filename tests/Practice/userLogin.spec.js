import { test, expect } from "@playwright/test";

test.only('User Login', async({page})=>{

    const product ='ZARA COAT 3';
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
    const count= await page.locator('.card-body').count();
    console.log(count);

    for(let i=0; i<count; i++)
    {
      const name=  await page.locator('.card-body').nth(i).locator('b').textContent();
      if(name === product)
      {     
        await page.locator('.card-body').nth(i).locator('button').filter({hasText:' Add To Cart'}).click();
        break;
}


    }
          await page.locator('[routerlink*="cart"]').click();

    await page.locator('div li').first().waitFor();
    expect(await page.locator('.heading h1').textContent()).toBe('My Cart');

    const data= await page.locator('.cartSection h3').textContent();
    expect(data).toBe(product);

    await page.getByText('Checkout').click();

   await page.locator('.payment__title').first().waitFor();

   const pay=await page.locator('.payment__title').first().textContent();
   expect(pay).toBe(' Payment Method ');

   await page.getByPlaceholder('Select Country').pressSequentially('Ind');
// await page.locator('ta-results').waitFor()
   await page.locator('.ta-results')
              .filter({hasText:" India"})
              .click();

              await page.locator('[name="coupon"]').fill('rahulshettyacademy');
            
              await page.getByRole('button', { name: 'Apply Coupon' }).click();
               await page.getByText('* Coupon Applied').waitFor();


              await  page.locator('.actions .ng-star-inserted').click();
              //await page.pause();
               // await page.locator('div .ng-star-inserted').waitFor();

            const head=await page.locator('h1.hero-primary').textContent();
           await expect(head).toBe(' Thankyou for the order. ')
        const arr=await page.locator('label.ng-star-inserted').textContent();
        const arr1 = arr.split(' ');
        const ordeid =arr1[2].toString();

        await page.locator('button[routerlink*="myorders"]').click();

        await page.locator('tbody').waitFor();

        const rowcount = await page.locator('tbody tr').count();

        console.log(rowcount);

        for(let i=0; i<rowcount; i++)
        {
         const rowidd= await page.locator('tbody tr').nth(i).locator('th').textContent();
        console.log(rowidd,ordeid)
         if(rowidd.includes(ordeid))
        
         {
            await page.locator('tbody tr').nth(i).locator('button').first().click();
            break;
         }
            
        }

})

    