const mammoth = require("mammoth");
// const officegen = require('officegen')
const fs = require("fs");
const path = require("path");
const child_process = require('child_process');
const fileList = process.argv[2];
let baseUrl = `./src/docs/kh/`;
let options = { includeDefaultStyleMap: false };
const getStrLength = ( str ) => {
    let processStr = "";
    processStr = str.replace(/[\u0391-\uFFE5]/g,"aa");
    return processStr.length;
}

function str2ab(s,f) {
        var b = new Blob([s],{type:'text/plain'});
        var r = new FileReader();
        r.readAsArrayBuffer(b);
        r.onload = function (){if(f)f.call(null,r.result)}
}

const action = ( name ) => {

    return new Promise(( res,rej )=>{

        let html = null;

        if( /.html/.test(name) ){
            return; 
        }
    
        if( /.docx/.test(name) ){

            mammoth.convertToHtml( { path: `${baseUrl}${name}` },options )
            .then(function(result){
        
                html = result.value + "";
                let messages = result.messages;
        
                html = html.replace(/<p>/,"<h3>");
                html = html.replace(/<\/p>/,"</h3>");
                
                html = html.split('</p>').join('</p>\n');
        
                res( html );
        
            })
            .catch(( err )=>{  })
            .done();
        
        }else{
    
            console.log("不支持的格式");return;
    
        }

    })

}

let files = fs.readdirSync(baseUrl);

if( fileList ){ files = fileList.split(',') };

let data = fs.readFileSync("./docsTemplate.html", 'utf-8');

files.forEach(async ( e )=>{

    let html = await action( e );

    let splitStr = '<div class="box">';
    let splitArr = data.split(splitStr);
    let prepareData = splitArr[0] + splitStr + '\n\n\n' + html + splitArr[1];

    let htmlUrl = `${baseUrl}${ e.split('.').slice(0,-1).join('.') }.html`;
    fs.writeFileSync( htmlUrl,prepareData );

    console.log(`转换成功${ htmlUrl }`);
    
});