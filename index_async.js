const puppeteer = require('puppeteer');

(async()=>{
    const browser=await puppeteer.launch({
        headless: false,
        //slowMo: 300
    })
    const page = await browser.newPage()
    await page.goto('https://www.freeml.com/kimetaro/f5cQYq')
    //await console.log(page.url)
    await page.type('input[name="view_password"]','xxxx')
    await setTimeout(()=>{ page.click('.ok_btn') },1000)
})();

