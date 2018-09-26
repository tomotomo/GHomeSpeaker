var googlehome = require('./google-home-notifier');
var sleep = require('sleep');
require('date-utils');

var language = 'ja'; // ここに日本語を表す ja を設定
var ip = process.env.GHOME_IP || '192.168.8.152'

// ネットワーク内からGoogle Homeを見つけてくれる
// googlehome.device('mini on room', language); 
// もし Google Home のIPアドレスを指定するなら、以下のスクリプトに置き換える
googlehome.ip(ip, language);

// googlehome.notify('こんにちは、ぼくはアイザックス', function(res) {
//   console.log(res);
// });

text1 = "おはようございます。おばあちゃま。私はGoogle Homeです。何か困ったことがあったらOK Googleと言って私に話しかけてください。それではどうぞ良い一日を"

text2 = "こんにちは。私はGoogle Homeです。お昼の薬はのみましたか？美味しいお昼ご飯をお食事ください。何か困ったことがあったらOK Googleと言って私に話しかけてください。"

text3 = "こんばんわ。私はGoogle Homeです。ななみによって、私はカスタムされました。夕食の薬は飲みましたか？たまには外にお出かけしてはいかがでしょうか？何か困ったことがあったらOK Googleと言って私に話しかけてください。"

googlehome.notify(text1, function (res) {
    console.log(res)
    sleep.sleep(20);
    googlehome.notify(text2, function (res) {
        console.log(res)
        sleep.sleep(20);
        googlehome.notify(text3, function (res) {
            console.log(res)
        });
    });
});



function timer(eventtime, text) {
    console.log(eventtime + 'trigger time');
    var dt = new Date();
    var time = dt.toFormat("HH24MI");
    if (time == eventtime) {
        // googlehome.device(deviceName, language);
        // googlehome.ip(ip, language);
        googlehome.notify(text, function (notifyRes) {
            console.log(notifyRes);
            console.log(time + 'Hit!')
        })
        sleep.sleep(60)
    } else {
        console.log(time + 'No Hit!');
    }
}
// 時限式にするにはこちらを使う
// setInterval(function () { timer(1000, text1) }, 15000);
// setInterval(function () { timer(1300, text2) }, 15000);
// setInterval(function () { timer(1800, text3) }, 15000);
