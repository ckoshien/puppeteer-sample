const puppeteer = require('puppeteer');

puppeteer.launch({
    headless: false,
    //slowMo: 300
})
.then((browser)=>{
    browser.newPage()
    .then((page)=>{
        // page.setViewport({
        //     height:1280,
        //     width:720
        // })
        page.goto('http://jcbl.mydns.jp/JCBLScore/result/season/39')
        .catch(err=>console.log(err))
        setTimeout(
            () => {
                page.evaluate(()=>{
                    const el = document.querySelector('#average')
                    const { width, height, top: y, left: x } = el.getBoundingClientRect()
                    return { width, height, x, y }
                })
                .then((clip)=>{
                    page.screenshot({clip,path:'sample.png'})
                    console.log('shot')
                })           
        }, 5000)
        
        //browser.close();        
        
    })
    .catch((err)=>{
        console.log(err)
    })
})