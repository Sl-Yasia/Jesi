/* Codded By @Sl-Yasia.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen-Jesi - Sl-Yasia
*/

const _0x3520c2=_0x4a67;(function(_0x352766,_0x2b2b54){const _0x5b2a4=_0x4a67,_0x2fad2b=_0x352766();while(!![]){try{const _0x4f5ce3=-parseInt(_0x5b2a4(0x18f))/0x1+-parseInt(_0x5b2a4(0x173))/0x2+-parseInt(_0x5b2a4(0x192))/0x3+parseInt(_0x5b2a4(0x194))/0x4*(parseInt(_0x5b2a4(0x170))/0x5)+-parseInt(_0x5b2a4(0x17f))/0x6+-parseInt(_0x5b2a4(0x19b))/0x7+parseInt(_0x5b2a4(0x177))/0x8;if(_0x4f5ce3===_0x2b2b54)break;else _0x2fad2b['push'](_0x2fad2b['shift']());}catch(_0x580482){_0x2fad2b['push'](_0x2fad2b['shift']());}}}(_0x34b1,0x5ca31));function _0x34b1(){const _0x18d833=['../events','heroku-client','true','/apps/','HEROKU','jid','1766478maZrvp','data','split','message','isAdmin','https://chat.whatsapp.com','get','APP_NAME','participants','map','sendMessage','../config','participant','test','*Link\x20Detected!\x20\x20link\x20Not\x20allowed\x20here\x20😈*','groupMetadata','376927RViZQC','API_KEY','conventer','1980048ybLpRJ','../language','4DwADYN','94741745737-1616356915@g.us','child_process','bitly.com','adCmd','exec','then','4954957ezNpul','scrapers','includes','3031720nszvgI','groupRemove','/config-vars','505276UhlidT','user','client','getString','16519536kUteMF','text'];_0x34b1=function(){return _0x18d833;};return _0x34b1();}const Jesi=require(_0x3520c2(0x179)),{MessageType}=require('@adiwajshing/baileys'),exec=require(_0x3520c2(0x196))[_0x3520c2(0x199)],os=require('os'),fs=require('fs'),Config=require(_0x3520c2(0x18a)),Language=require(_0x3520c2(0x193)),Lang=Language['getString']('evaluators'),SLang=Language[_0x3520c2(0x176)](_0x3520c2(0x191)),NLang=Language[_0x3520c2(0x176)](_0x3520c2(0x16e)),googleTTS=require('google-translate-tts'),Heroku=require(_0x3520c2(0x17a)),heroku=new Heroku({'token':Config[_0x3520c2(0x17d)][_0x3520c2(0x190)]});let baseURI=_0x3520c2(0x17c)+Config[_0x3520c2(0x17d)][_0x3520c2(0x186)];async function checkUsAdmin(_0x5a7b84,_0x36f4bb=_0x5a7b84[_0x3520c2(0x180)][_0x3520c2(0x18b)]){const _0x9968fd=_0x3520c2;var _0x1c23f7=await _0x5a7b84[_0x9968fd(0x175)][_0x9968fd(0x18e)](_0x5a7b84[_0x9968fd(0x17e)]),_0x2c593b=_0x1c23f7[_0x9968fd(0x187)][_0x9968fd(0x188)](_0x1a6eb6=>{const _0x588af0=_0x9968fd;if(_0x1a6eb6['jid'][_0x588af0(0x181)]('@')[0x0]==_0x36f4bb['split']('@')[0x0]&&_0x1a6eb6['isAdmin'])return!![];else;return![];});return _0x2c593b[_0x9968fd(0x16f)](!![]);}async function checkImAdmin(_0x336b1c,_0x73e5a0=_0x336b1c[_0x3520c2(0x175)][_0x3520c2(0x174)]['jid']){const _0x4fbc06=_0x3520c2;var _0x4e5103=await _0x336b1c[_0x4fbc06(0x175)]['groupMetadata'](_0x336b1c['jid']),_0x4df57b=_0x4e5103[_0x4fbc06(0x187)][_0x4fbc06(0x188)](_0x40c4ff=>{const _0x26e01c=_0x4fbc06;if(_0x40c4ff[_0x26e01c(0x17e)]['split']('@')[0x0]==_0x73e5a0[_0x26e01c(0x181)]('@')[0x0]&&_0x40c4ff[_0x26e01c(0x183)])return!![];else;return![];});return _0x4df57b['includes'](!![]);}var linkban_var='';function _0x4a67(_0x27331f,_0x18ed79){const _0x34b1f4=_0x34b1();return _0x4a67=function(_0x4a670c,_0x18e2b8){_0x4a670c=_0x4a670c-0x16e;let _0x3ec7a2=_0x34b1f4[_0x4a670c];return _0x3ec7a2;},_0x4a67(_0x27331f,_0x18ed79);}async function antlch(){const _0x6b4c66=_0x3520c2;await heroku[_0x6b4c66(0x185)](baseURI+_0x6b4c66(0x172))[_0x6b4c66(0x19a)](async _0x3083da=>{linkban_var=_0x3083da['LINK_BAN'];});}antlch();var ldc='';if(Config['LANG']=='EN')ldc=_0x3520c2(0x18d);Jesi[_0x3520c2(0x198)]({'on':_0x3520c2(0x178),'fromMe':![],'deleteCommand':![]},async(_0x2107bf,_0x46b5e0)=>{const _0x18fe51=_0x3520c2;if(linkban_var==_0x18fe51(0x17b)&&_0x2107bf[_0x18fe51(0x17e)]!==_0x18fe51(0x195)){let _0x5ef13c=new RegExp(_0x18fe51(0x184)),_0x5121db=new RegExp(_0x18fe51(0x197));if(_0x5ef13c['test'](_0x2107bf[_0x18fe51(0x182)])){var _0x53db70=await checkUsAdmin(_0x2107bf),_0x410f52=await checkImAdmin(_0x2107bf);if(!_0x410f52)return;if(_0x53db70)return;await _0x2107bf[_0x18fe51(0x175)][_0x18fe51(0x189)](_0x2107bf[_0x18fe51(0x17e)],ldc,MessageType[_0x18fe51(0x178)],{'quoted':_0x2107bf['data']}),await _0x2107bf[_0x18fe51(0x175)][_0x18fe51(0x171)](_0x2107bf[_0x18fe51(0x17e)],[_0x2107bf[_0x18fe51(0x180)][_0x18fe51(0x18b)]]),await _0x2107bf['client'][_0x18fe51(0x189)](_0x2107bf[_0x18fe51(0x17e)],fin,MessageType['text']);}else{if(_0x5121db[_0x18fe51(0x18c)](_0x2107bf[_0x18fe51(0x182)])){var _0x53db70=await checkUsAdmin(_0x2107bf),_0x410f52=await checkImAdmin(_0x2107bf);if(!_0x410f52)return;if(_0x53db70)return;await _0x2107bf[_0x18fe51(0x175)][_0x18fe51(0x189)](_0x2107bf[_0x18fe51(0x17e)],ldc,MessageType['text'],{'quoted':_0x2107bf['data']}),await _0x2107bf['client']['groupRemove'](_0x2107bf[_0x18fe51(0x17e)],[_0x2107bf[_0x18fe51(0x180)][_0x18fe51(0x18b)]]),await _0x2107bf[_0x18fe51(0x175)]['sendMessage'](_0x2107bf['jid'],fin,MessageType[_0x18fe51(0x178)]);}}}});
