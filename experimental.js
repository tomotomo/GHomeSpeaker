//isaax app for GHome speak

var googlehome = require('./google-home-notifier');
var deviceName = 'Google Home';
var language = 'ja'
var ip = '192.168.10.111'; // default IP
var sleep = require('sleep');
require('date-utils');

//var dt = new Date();
//var time = dt.toFormat("HH24MI");

//function(){timer(1000,text4)},5000);

text1="おはようございます。おばあちゃま。私はGoogle Homeです。何か困ったことがあったらOK Googleと言って私に話しかけてください。それではどうぞ良い一日を"

text2="こんにちは。私はGoogle Homeです。お昼の薬はのみましたか？美味しいお昼ご飯をお食事ください。何か困ったことがあったらOK Googleと言って私に話しかけてください。"

text3="こんばんわ。私はGoogle Homeです。ななみによって、私はカスタムされました。夕食の薬は飲みましたか？たまには外にお出かけしてはいかがでしょうか？何か困ったことがあったらOK Googleと言って私に話しかけてください。"

text4="恐ることはありません。勇気をもって毎日に感謝して取り組みましょう。"

googlehome.ip(ip, language);
googlehome.device(deviceName,language);


const morning = process.env.MORNING || null


function timer (eventtime,text) {
console.log(eventtime +'trigger time');
var dt = new Date();
var time = dt.toFormat("HH24MI");
if ( time == eventtime ) {
    googlehome.ip(ip, language);
        googlehome.device(deviceName,language);
            googlehome.notify(text, function(notifyRes) {
                    console.log(notifyRes);
                    console.log(time+'Hit!')
                    sleep.sleep(30)
                        })
                        } else { 
                            console.log(time+'No Hit!');}
                                }

setInterval(function(){timer(1000,text1)},25000);
setInterval(function(){timer(1230,text2)},25000);
setInterval(function(){timer(1830,text3)},25000);
setInterval(function(){timer(1830,text4)},25000);


//次回はイベントの発動時刻とイベント文面を引数で渡せるようにする。
