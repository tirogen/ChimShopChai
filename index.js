const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://regist.xn--b3caa1e2a7e2b0h2be.com/Register/');
    let data = await page.evaluate(() => {return document.documentElement.innerHTML})
    while(data.includes(`You are currently waiting for the registration queue`)){
        await page.goto('https://regist.xn--b3caa1e2a7e2b0h2be.com/Register/');
        data = await page.evaluate(() => {return document.documentElement.innerHTML})
    }
})();