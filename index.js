const puppeteer = require('puppeteer');

async function goto(){
    const browser = await puppeteer.launch({headless: false});
    try{
        const page = await browser.newPage();
        let data = "";
        do{
            await page.goto('https://regist.xn--b3caa1e2a7e2b0h2be.com/Register/');
            data = await page.evaluate(() => {return document.documentElement.innerHTML});
        }while(data.includes(`You are currently waiting for the registration queue`));
        return true;
    }catch(e){
        await browser.close();
        return false;
    }
};

(async () => {
    let result = false;
    do{
        result = await goto();
    }while(!result);
})();