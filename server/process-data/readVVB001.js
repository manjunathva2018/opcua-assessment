const fs = require('fs');
const readline = require('readline');
const processVVB001=require("./processDataForVVB001");
const path = require('path');
const filePath = path.join(__dirname, './../raw-data', 'VVB001.txt');

const readLinesFromFile = () => {
    return new Promise((resolve,reject)=>{
        const arr=[];
        const fileStream = fs.createReadStream(filePath);
        const rl = readline.createInterface({
          input: fileStream,
          terminal:false,
          crlfDelay: Infinity, 
          historySize: 0
        });
        rl.on('line', (line) => {
          arr.push( JSON.stringify(processVVB001(line)) );
         // Process each line here
        });
      
        rl.on('close', () => {
          console.log('End of file reached.');
          resolve(arr);
        });
    })
};

module.exports=readLinesFromFile;

