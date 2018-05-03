//isaax app for GHome speak

var googlehome = require('./google-home-notifier');
var deviceName = 'Google Home';
var language = 'ja'
var ip = '192.168.10.111'; // default IP
var sleep = require('sleep');
require('date-utils');

//var dt = new Date();
//var time = dt.toFormat("HH24MI");



text1="おはようございます。私はGoogle Homeです。何か困ったことがあったらOK Googleと言って私に話しかけてください。それではどうぞ良い一日を"

text2="こんにちは。私はGoogle Homeです。お昼の薬はのみましたか？何か困ったことがあったらOK Googleと言って私に話しかけてください"

text3="こんばんわ。私はGoogle Homeです。ななみによって、私はカスタムされました。夕食の薬は飲みましたか？何か困ったことがあったらOK Googleと言って私に話しかけてください"

googlehome.ip(ip, language);
googlehome.device(deviceName,language);


const morning = process.env.MORNING || null

//console.log(time);

function timer (eventtime,text) {
console.log(eventtime);
var dt = new Date();
var time = dt.toFormat("HH24MI");
if ( time == eventtime ) {
    googlehome.ip(ip, language);
        googlehome.device(deviceName,language);
            googlehome.notify(text, function(notifyRes) {
                    console.log(notifyRes);
                    console.log(time+'Hit!')
                    sleep.sleep(20)
                        })
                        } else { 
                            console.log(time+'No Hit!');}
                                }

setInterval(function(){timer(1448,text1)},5000);
setInterval(function(){timer(1450,text2)},5000);
setInterval(function(){timer(1452,text3)},5000);


//次回はイベントの発動時刻とイベント文面を引数で渡せるようにする。
