/* Coded by @Sl-Yasia
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Queen-Jesi - Sl-Yasia
*/

const Jesi = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const GM = "it sends good morning message"
const GN = "it sends good night message"
const Config = require('../config');



if (Config.WORKTYPE == 'private') {
Jesi.adCmd({pattern: 'gm', fromMe: true, deleteCommand: true, desc: GM,}, (async (message, match) => {

    var r_text = new Array ();

    r_text[1] = "โ๐Goodโ โmorningโ๐ฅฐโ";
    r_text[2] ="โ๏ธ๐บ๐๐๐ ๐๐๐๐๐๐๐๐ ๐";
    r_text[3] ="๐๐ถ๐๐๐ ๐ป๐๐๐๐๐๐๐ ๐ฅฐ";
    r_text[4] ="๐๐๐ผ๐ผ๐ฑ ๐๐บ๐ผ๐ฟ๐ป๐ถ๐ป๐ด ๐ธ";
    r_text[5] ="๐ป๐๐ธ๐ธ๐ญ ๐ถ๐ธ๐ป๐ท๐ฒ๐ท๐ฐ ๐";
    r_text[6] ="๐ผ๐๐๐๐ ๐๐๐ก๐๐๐๐ ๐ถ";
    r_text[7] ="๐โผโโโ ๐โโโกโโโโ ๐ฅฐ";
    r_text[8] ="๐ฎ๐ถ๐๐๐ ๐ผ๐๐๐๐๐๐๐";
    r_text[9] ="๐บ๐ฎ๐๐๐ ๐ด๐๐๐๐๐๐๐บ";
    r_text[10] ="๐พ๐ ๐ ๐ ๐๐ ๐ฃ๐๐๐๐๐ซ๐ซ";
    r_text[11] ="๐๐ฒ๐๐๐ ๐ธ๐๐๐๐๐๐๐";


    var i = Math.floor(12*Math.random())

    await message.client.sendMessage(
        message.jid,(r_text[i]), MessageType.text);

    }));


Jesi.adCmd({pattern: 'gn', fromMe: true, deleteCommand: true, desc: GN,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "๐๐๐ค๐ค๐ ๐๐ฃ๐๐๐๐ฉ ๐ซโจ";
        r_text[2] ="๐ค๐๐ธ๐ธ๐ญ ๐งโโ๐ท๐ฒ๐ฐ๐ฑ๐ฝ โ๏ธโจ";
        r_text[3] ="๐โกแ แ แฑ ๐โฉษจโกฯฆฦฌ ๐";
        r_text[4] ="๐ึึึีช โญ๏ธีฒรญึีฐิต ๐";
        r_text[5] ="๐แแชแชแ ๐แแแแผแข ๐ซโจ";
        r_text[6] ="๐ฎ๐๐จ๐จ๐ ๐๐ข๐ ๐ก๐ญ๐ฎ";
        r_text[7] ="๐บ๐ฎ๐๐๐ ๐ต๐๐๐๐๐บ";
        r_text[8] ="๐ซ๐๐ฐ๐ฐ๐ฅ ๐๐ช๐จ๐ฉ๐ต๐ซ";
        r_text[9] ="๐โผ๏ธโ๏ธโ๏ธโน๏ธ โ๏ธโพ๏ธโผ๏ธโฝ๏ธโ๏ธ๐";
        r_text[10] ="๐๐ถ๐พ๐พ๐ณ ๐ฝ๐ธ๐ถ๐ท๐๐";
        r_text[11] ="โ๐๐ฐ๐ฐ๐ฅ ๐๐ช๐จ๐ฉ๐ตโ";
        r_text[12] ="๐๐ถ๐พ๐พ๐ณ ๐ฝ๐ธ๐ถ๐ท๐๐";
        r_text[13] ="โฃษขแดแดแด ษดษชษขสแดโฃ";        

      
    
        var i = Math.floor(14*Math.random())
    
        await message.client.sendMessage(
            message.jid,(r_text[i]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        Jesi.adCmd({pattern: 'gm', fromMe: false, deleteCommand: true, desc: GM,}, (async (message, match) => {
        
            var r_text = new Array ();
        
            r_text[1] = "โ๐Goodโ โmorningโ๐ฅฐโ";
            r_text[2] ="โ๏ธ๐บ๐๐๐ ๐๐๐๐๐๐๐๐ ๐";
            r_text[3] ="๐๐ถ๐๐๐ ๐ป๐๐๐๐๐๐๐ ๐ฅฐ";
            r_text[4] ="๐๐๐ผ๐ผ๐ฑ ๐๐บ๐ผ๐ฟ๐ป๐ถ๐ป๐ด ๐ธ";
            r_text[5] ="๐ป๐๐ธ๐ธ๐ญ ๐ถ๐ธ๐ป๐ท๐ฒ๐ท๐ฐ ๐";
            r_text[6] ="๐ผ๐๐๐๐ ๐๐๐ก๐๐๐๐ ๐ถ";
            r_text[7] ="๐โผโโโ ๐โโโกโโโโ ๐ฅฐ";
            r_text[8] ="๐ฎ๐ถ๐๐๐ ๐ผ๐๐๐๐๐๐๐";
            r_text[9] ="๐บ๐ฎ๐๐๐ ๐ด๐๐๐๐๐๐๐บ";
            r_text[10] ="๐พ๐ ๐ ๐ ๐๐ ๐ฃ๐๐๐๐๐ซ๐ซ";
            r_text[11] ="๐๐ฒ๐๐๐ ๐ธ๐๐๐๐๐๐๐"; 
         
        
            var i = Math.floor(12*Math.random())
        
            await message.client.sendMessage(
                message.jid,(r_text[i]), MessageType.text);
        
            }));
        
        
        Jesi.adCmd({pattern: 'gn', fromMe: false, deleteCommand: true, desc: GN,}, (async (message, match) => {
        
                var r_text = new Array ();
            
                r_text[1] = "๐๐๐ค๐ค๐ ๐๐ฃ๐๐๐๐ฉ ๐ซโจ";
                r_text[2] ="๐ค๐๐ธ๐ธ๐ญ ๐งโโ๐ท๐ฒ๐ฐ๐ฑ๐ฝ โ๏ธโจ";
                r_text[3] ="๐โกแ แ แฑ ๐โฉษจโกฯฆฦฌ ๐";
                r_text[4] ="๐ึึึีช โญ๏ธีฒรญึีฐิต ๐";
                r_text[5] ="๐แแชแชแ ๐แแแแผแข ๐ซโจ";
                r_text[6] ="๐ฎ๐๐จ๐จ๐ ๐๐ข๐ ๐ก๐ญ๐ฎ";
                r_text[7] ="๐บ๐ฎ๐๐๐ ๐ต๐๐๐๐๐บ";
                r_text[8] ="๐ซ๐๐ฐ๐ฐ๐ฅ ๐๐ช๐จ๐ฉ๐ต๐ซ";
                r_text[9] ="๐โผ๏ธโ๏ธโ๏ธโน๏ธ โ๏ธโพ๏ธโผ๏ธโฝ๏ธโ๏ธ๐";
                r_text[10] ="๐๐ถ๐พ๐พ๐ณ ๐ฝ๐ธ๐ถ๐ท๐๐";
                r_text[11] ="โ๐๐ฐ๐ฐ๐ฅ ๐๐ช๐จ๐ฉ๐ตโ";
                r_text[12] ="๐๐ถ๐พ๐พ๐ณ ๐ฝ๐ธ๐ถ๐ท๐๐";
                r_text[13] ="โฃษขแดแดแด ษดษชษขสแดโฃ";                

              
            
                var i = Math.floor(14*Math.random())
            
                await message.client.sendMessage(
                    message.jid,(r_text[i]), MessageType.text);
            
                }));
}   
