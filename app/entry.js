'use strict';

const words = [
  'table','calendar','bat','handkerchief','skate','tomato','chocolate','penguin','tunnel','taxi','radio','cabbage',
  'dome','skirt','iron','button','bucket','pizza','SOS','ATM','UFO','rice','yogurt','spoon','spaghetti','egg','pepper','salt',
  'coffe','water','cucumber','hot dog','pencil','eraser','bread','honey','towel','soap','stapler','newspaper','tea','juice','blanket','sugar',
  'Sunday','Monday','Tuesday','Wendnesday','Thursday','Friday','Saturday','corn','blouse','soccer','Japanese','English','shirt','pants','snake','eggplant','onion',
  'car','bag','shoes','bicycle','socks','science','baseball','dog','tiger','tie','cat','potato','father','mother','grandma','grandpa','sister',
  'brother','aunt','cousin','backpack','lunch box','toy','sneakers','ruler','crayon','cellphone','cards','piano','watch','glove','book','tired','sleepy',
  'teacher','student','hungry','thirsty','sad','tall','sick','angry','happy','kind','doctor','nurse','hairdresser','dentist','baker','singer','designer',
  'florist','soccer player','baseball player','sumo wrestler','astronaut','January','February','March','April','May','June','July','August','September','October','November','December',
  'zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen',
  'seventeen','eighteen','nineteen','twenty','get up','get dressed','eat breakfast','swim','go shopping','walk','run','sit down','laugh','cry','watch TV','clean the room','lunch',
  'study math','linsten to music','play catch','play tag','snack','wait','dinner','take a bath','go to bed','good morning','good afternoon','good evening','good night','goodbye','nice to meet you','hello','thank you',
  'how are you','fine','excuse me','good luck','congratulations','see you later','happy birthday','where?','why?','who?','when?','which?','pardon?','be quiet!','try','go ahead','I can do it',
  'exit'
];
let word;
let loc;
let score;
let miss;
const timeLimit = 30 * 1000; // 3秒
let startTime; // ゲームスタート時刻を保持するための変数
let isPlaying = false;

const target = document.getElementById('target'); // 表示エリアを取得
const hajime = document.getElementById('hajime'); // 表示エリアを取得
const scoreLebel = document.getElementById('score'); // スコア要素取得
const missLabel = document.getElementById('miss'); // ミス数要素取得
const timerLabel = document.getElementById('timer'); // タイマー要素取得

function updateTarget() { // 正解した文字を＿に変換させる
  let placeholder = ''; // '_'を格納するための空の変数
  for (let i = 0; i < loc; i++) {
    placeholder += '_'; // 呼び出された数だけ'_'を連結する
  }
  target.textContent = placeholder + word.substring(loc); // loc番目までは'_'、loc番目以降はそのまま表示
};

function updateTimer() {
  const timeLeft = startTime + timeLimit - Date.now(); // 残り時間を計算
  timerLabel.textContent = (timeLeft / 1000).toFixed(2); // タイマーラベルに秒で表示 小数点以下第二位まで

  const timeoutId = setTimeout(() => { // updateTimerを読んだ10m秒後に
    updateTimer(); // updateTimerを呼び出す = updateTimerを繰り返す
  }, 10);

  if (timeLeft < 0) { // 残り時間が0以下になったら
    isPlaying = false; // ゲームが終了したので isPlaying を false へ

    clearTimeout(timeoutId); // timeoutIdを解除する
    timerLabel.textContent = '0.00'; // 0.00を表示
    setTimeout(() => { // 100m秒後にアラートを表示させる
      showResult();
    }, 100);

    target.textContent = 'click to replay'; // リプレイを促すメッセージを表示
  }
}

function showResult() {
  const accuracy = score + miss === 0 ? 0 : score / (score +miss) * 100; // 正解率計算
  alert(` 入力文字数  ${score}, ミス入力数  ${miss} , 正解率  ${accuracy.toFixed(2)}% !`) // 正解率表示
}

window.addEventListener('click',() => {
  if (isPlaying === true) { // isPlaying が true なら
    return; // 以下の処理をせずに return
  }
  isPlaying = true; // isPlaying を true へ

  // 以下、各項目の初期化
  loc = 0;
  score = 0;
  miss = 0;
  scoreLebel.textContent = score;
  missLabel.textContent = miss;
  word = words[Math.floor(Math.random() * words.length)];

    target.textContent = word; // 打った文字をセット
    startTime = Date.now(); // 現在時刻を代入
    updateTimer(); // 残り時間表示関数
});

window.addEventListener('keydown', e => {
  if (isPlaying !== true) { // タイプ時に isplaying が true じゃなかったら return する
    return;
  }

  if (e.key === word[loc]) { // 打ったキー(e)がwordのloc番目の文字と同じなら
    loc++; // 次の文字へ
    if (loc === word.length) { // locが問題の文字列数と一致したら
      word = words[Math.floor(Math.random() * words.length)]; // 別の問題を選択する
      loc = 0; // locを0に初期化
    }
    updateTarget();
    score++; // 正解数プラス１
    scoreLebel.textContent = score; // 正解数表示
  } else { 
    miss++; // ミス数プラス１
    missLabel.textContent = miss; // ミス数表示
  }
});

