const fs = require('fs');
const readline = require('readline');
const processO5D100=require("./processDataForO5D100");
const path = require('path');
const filePath = path.join(__dirname, './../raw-data', 'O5D100.txt');

const readLinesDeviceFile = () => {
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
          arr.push(JSON.stringify(processO5D100(line)) );
         // Process each line here
        });
      
        rl.on('close', () => {
          console.log('End of file reached.');
          resolve(arr);
        });
    })
};

module.exports=readLinesDeviceFile;

