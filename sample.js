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
if ( time == 2109 ) {
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


/***********************************************************/
// npm install moment --save
const moment = require('moment')

// 目的の時刻と、その時刻に喋らせる内容を用意
const events = [
  {'time': '08:30', 'text': 'morning'},
  {'time': '12:30', 'text': 'noon'},
  {'time': '18:00', 'text': 'evening'}
]

// 1日ごとに実行する
setInterval(function() {
  // 日付の変更を考慮して毎日現在時刻を取得
  let now = moment()

  events.forEach(function(event) {
    // 今日の日付を使って目的の時刻のオブジェクトを作成
    let dst = moment(`${now.format('YYYY-MM-DD')} ${event.time}`)
    // 目的の時刻までにかかる時間をミリセカンドで算出
    let elapsed = dst - now
    // すでに時刻を過ぎている場合はセットしない
    if (elapsed <= 0) {
      return;
    }
		// 目的の時刻に特定のテキストをしゃべらせる
    console.log(`時刻 ${dst} に次の内容をセットしました: `, event.text)
    setTimeout(function() {
      googlehome.notify(event.text, function(res) {
        console.log(res);
      })
    }, elapsed)
  })

}, 3600 * 24);
