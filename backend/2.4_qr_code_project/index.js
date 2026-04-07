/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
// import QRCode from 'qrcode'
// import writeFile from 'fs'
// import readline from 'readline'
// var rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });

// var response = rl.question('enter your input: ', (name) =>{
//     console.log(`Hello, ${name}`);
//     rl.close();
// });

// QRCode.create(response)

// // qrcodeCreator(response);

// writeFile('user_input_file.txt',response,(err) =>{
//     if (err) throw err;
//     console.log('user input file created');
// });

import { input } from '@inquirer/prompts';
import fs from 'node:fs';
import qr from 'qr-image';

const answer = await input({message: 'Enter your input: '});

// var qr = require('qr-image');
// var qr_svg = qr.image(answer,{type:'svg'});
// var qr = require('qr-image');
 
var qr_svg = qr.image('I love QR!', { type: 'svg' });
qr_svg.pipe(fs.createWriteStream('custom_qr_code.svg'))

// var fileWriter = writeFile()

fs.writeFile('user_input_file.txt',answer,(err)=>{
    if (err) throw err;
    console.log('user input file created');
});


