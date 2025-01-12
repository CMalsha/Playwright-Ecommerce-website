import { chromium, test } from "@playwright/test";
import { text } from "stream/consumers";

test("Register test demo", async () => {
    const browser = await chromium.launch({ headless: false });  
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    /*await page.hover('//*[@id="widget-navbar-217834"]/ul/li[6]/a/div/span')
    await page.click("text =Register")
    await page.fill('input[name="firstname"]',"Priya");
    await page.fill('input[name="lastname"]',"Bole");
    await page.fill('input[name="email"]',"priyankaweragoda72@gmail.com");
    await page.fill('input[name="telephone"]',"0778994718");
    await page.fill('input[name="password"]',"priya@123");
    await page.fill('input[name="confirm"]',"priya@123");
    // Wait for the agree checkbox to be visible before interacting with it
    await page.waitForSelector('input[name="agree"]', { state: 'visible' });

    // Click the Terms & Conditions checkbox
    await page.click("text=agree");
    await page.click('//*[@id="content"]/form/div/div/input');
    */

 
    //navigate to the login page
    await page.hover('//*[@id="widget-navbar-217834"]/ul/li[6]/a/div/span');
    await page.click("text=Login");
    await page.fill('input[name="email"]',"priyankaweragoda72@gmail.com");
    await page.fill('input[name="password"]',"priya@123");
    await page.click('//*[@id="content"]/div/div[2]/div/div/form/input');

    await page.waitForTimeout(5000);

    await page.hover('//*[@id="entry_217832"]/a');
    await page.click('//*[@id="entry_217832"]/a');

    
      // Hover over "Phone, Tablets & Ipod"
      await page.hover("text= Phone, Tablets & Ipod");
      
      
      // Click on "Mobile Phones"
      await page.click("text= Phone, Tablets & Ipod");
  
      await page.click("text=HTC Touch HD");
      console.log("Product 'HTC Touch HD' selected");
      await page.waitForTimeout(5000);

      await page.click('//*[@id="entry_216842"]/button');
  
     

  });



   



     

   
    
    

