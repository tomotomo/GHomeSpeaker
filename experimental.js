
var googlehome = require('./google-home-notifier');
var deviceName = 'Google Home';
var language = 'ja'
var ip = '192.168.10.111'; // default IP
var sleep = require('sleep');
require('date-utils');

//var dt = new Date();
//var time = dt.toFormat("HH24MI");



text1="おはようございます。私はGoogle Homeです。何か困ったことがあったらOK Googleと言って私に話しかけてください。"

text2="こんにちは私はGoogle Homeです。お昼の薬はのみましたか？何か困ったことがあったらOK Googleと言って私に話しかけてください"

text3="こんにちは私はGoogle Homeです。おばあちゃま。夕食後の薬は飲みましたか？何か困ったことがあったらOK Googleと言って私に話しかけてください"

googlehome.ip(ip, language);
googlehome.device(deviceName,language);


const morning = process.env.MORNING || null

//console.log(time);

function timer (eventtime) {
console.log(eventtime);
var dt = new Date();
var time = dt.toFormat("HH24MI");
if ( time == 2310 ) {
    googlehome.ip(ip, language);
        googlehome.device(deviceName,language);
            googlehome.notify(text3, function(notifyRes) {
                    console.log(notifyRes);
                    sleep.sleep(20)
                        })
                        } else { 
                            console.log(time);
                            console.log("no matching")
                                }
                                }


setInterval(timer,2000);

//次回はイベントの発動時刻とイベント文面を引数で渡せるようにする。
