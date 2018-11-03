//const SQL=require('sql.js');
const SQL=require('sqlite3').verbose();
const fetch = require('node-fetch')
const fs = require('fs')

//let res=fs.readFileSync('./sample2');
//fetch('https://github.com/ckoshien/puppeteer-sample/blob/master/sample2?raw=true')

    // .then((response)=>{
    //   if(response.status===200){
    //     return response.arrayBuffer();
    //   }
    // })
    // .then((res)=>{
      //var uInt8Array = new Uint8Array(res);
      //var db = new SQL.Database(uInt8Array);
      var db = new SQL.Database('https://github.com/ckoshien/puppeteer-sample/blob/master/sample2','OPEN_READONLY')
      //var db = new SQL.Database('./sample2','OPEN_READONLY')
      db.serialize(() => {
      var array = [];
      //db.run("");
      //var test = db.prepare("SELECT * FROM song where id = :id")
      
      // for(var result = [];test.step();){
      //   result.push(test.getAsObject({':id':2}));
      // }
      // console.log(result)

      //var stmt= db.prepare('SELECT * FROM mytable WHERE id=:aval');
      //stmt.bind({':aval':'2'})
      // while(stmt.step()) {
      //   var row = stmt.get();
      //   console.log(row);
      // }
      db.each("select * from"+
                " (select j.song_no as j_song_no, "+
                "  j.song_title as j_song_title," +
                " j.artist as j_artist "+
                " from joysound_song j "+
                  " where "+
                  " j.song_title like '%宮内%' " +
                  " or "+
                  "j.artist like '%宮内%')j_tmp "+
                  " left outer join "+
                  " (select * from song s "+
                  " where "+
                  " s.song_title like '%宮内%'"+
                  " or "+
                  " s.artist like '%宮内%')s_tmp "+
                  " on "+
                  " j_tmp.j_song_title=s_tmp.song_title"+
                  " limit 500 ",
          (row,err)=>{
            if(err){
              console.log(err)
            }else{
              array.push(row);
             
            }
        //console.log(row)
      })
      console.log(array)
      console.log(db)
      db.close();
      })
      
    //})