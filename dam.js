const puppeteer = require('puppeteer');

puppeteer.launch({
    headless: false,
    //slowMo: 300
})
.then((browser)=>{
    //for(var i=100000;i<100001;i++){
        browser.newPage()
        .then((page)=>{
            let i=471652
            let req4=i.toString().substring(0,4)
            let req2=i.toString().substring(4,6)
            console.log(req4+'-'+req2)
            page.goto('http://www.clubdam.com/app/damStation/clubdamRanking.do?requestNo='+req4+'-'+req2)
            .then(resp=>{
                              
                page.evaluate(()=>{
                    console.log(document)
                    var title=document.querySelector('div #Rankingbattle tbody tr td a').textContent
                    var artist= document.querySelectorAll('div #Rankingbattle table.list_rankingbattle_title tr td')
                    return {
                        title:title,
                        artist:artist[3].textContent
                    }
                    //console.log(element)
                })
                .then((result)=>{
                    console.log(result)
                })
                
            })
            .catch(err=>console.log(err))
        })
    //}
    
})