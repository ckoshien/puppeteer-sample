const puppeteer = require('puppeteer');

puppeteer.launch({
    headless: false,
    //slowMo: 300
})
.then((browser)=>{
    browser.newPage()
    .then((page)=>{
        page.goto('https://www.freeml.com/kimetaro/f5cQYq')
        .then(resp=>{
            console.log(page.url)
            page.type(
                'input[name="view_password"]',
                'xxxx')
            .then(
                setTimeout(()=>{
                    page.click('.ok_btn')
                },1000)
                
            )
        })
        .catch(err=>console.log(err))
    })
})