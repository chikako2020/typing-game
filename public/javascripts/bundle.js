/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var words = ['table', 'calendar', 'bat', 'handkerchief', 'skate', 'tomato', 'chocolate', 'penguin', 'tunnel', 'taxi', 'radio', 'cabbage', 'dome', 'skirt', 'iron', 'button', 'bucket', 'pizza', 'SOS', 'ATM', 'UFO', 'rice', 'yogurt', 'spoon', 'spaghetti', 'egg', 'pepper', 'salt', 'coffe', 'water', 'cucumber', 'hot dog', 'pencil', 'eraser', 'bread', 'honey', 'towel', 'soap', 'stapler', 'newspaper', 'tea', 'juice', 'blanket', 'sugar', 'Sunday', 'Monday', 'Tuesday', 'Wendnesday', 'Thursday', 'Friday', 'Saturday', 'corn', 'blouse', 'soccer', 'Japanese', 'English', 'shirt', 'pants', 'snake', 'eggplant', 'onion', 'car', 'bag', 'shoes', 'bicycle', 'socks', 'science', 'baseball', 'dog', 'tiger', 'tie', 'cat', 'potato', 'father', 'mother', 'grandma', 'grandpa', 'sister', 'brother', 'aunt', 'cousin', 'backpack', 'lunch box', 'toy', 'sneakers', 'ruler', 'crayon', 'cellphone', 'cards', 'piano', 'watch', 'glove', 'book', 'tired', 'sleepy', 'teacher', 'student', 'hungry', 'thirsty', 'sad', 'tall', 'sick', 'angry', 'happy', 'kind', 'doctor', 'nurse', 'hairdresser', 'dentist', 'baker', 'singer', 'designer', 'florist', 'soccer player', 'baseball player', 'sumo wrestler', 'astronaut', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'get up', 'get dressed', 'eat breakfast', 'swim', 'go shopping', 'walk', 'run', 'sit down', 'laugh', 'cry', 'watch TV', 'clean the room', 'lunch', 'study math', 'linsten to music', 'play catch', 'play tag', 'snack', 'wait', 'dinner', 'take a bath', 'go to bed', 'good morning', 'good afternoon', 'good evening', 'good night', 'goodbye', 'nice to meet you', 'hello', 'thank you', 'how are you', 'fine', 'excuse me', 'good luck', 'congratulations', 'see you later', 'happy birthday', 'where?', 'why?', 'who?', 'when?', 'which?', 'pardon?', 'be quiet!', 'try', 'go ahead', 'I can do it', 'exit'];
var word;
var loc;
var score;
var miss;
var timeLimit = 30 * 1000; // 3秒

var startTime; // ゲームスタート時刻を保持するための変数

var isPlaying = false;
var target = document.getElementById('target'); // 表示エリアを取得

var hajime = document.getElementById('hajime'); // 表示エリアを取得

var scoreLebel = document.getElementById('score'); // スコア要素取得

var missLabel = document.getElementById('miss'); // ミス数要素取得

var timerLabel = document.getElementById('timer'); // タイマー要素取得

function updateTarget() {
  // 正解した文字を＿に変換させる
  var placeholder = ''; // '_'を格納するための空の変数

  for (var i = 0; i < loc; i++) {
    placeholder += '_'; // 呼び出された数だけ'_'を連結する
  }

  target.textContent = placeholder + word.substring(loc); // loc番目までは'_'、loc番目以降はそのまま表示
}

;

function updateTimer() {
  var timeLeft = startTime + timeLimit - Date.now(); // 残り時間を計算

  timerLabel.textContent = (timeLeft / 1000).toFixed(2); // タイマーラベルに秒で表示 小数点以下第二位まで

  var timeoutId = setTimeout(function () {
    // updateTimerを読んだ10m秒後に
    updateTimer(); // updateTimerを呼び出す = updateTimerを繰り返す
  }, 10);

  if (timeLeft < 0) {
    // 残り時間が0以下になったら
    isPlaying = false; // ゲームが終了したので isPlaying を false へ

    clearTimeout(timeoutId); // timeoutIdを解除する

    timerLabel.textContent = '0.00'; // 0.00を表示

    setTimeout(function () {
      // 100m秒後にアラートを表示させる
      showResult();
    }, 100);
    target.textContent = 'click to replay'; // リプレイを促すメッセージを表示
  }
}

function showResult() {
  var accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100; // 正解率計算

  alert(" \u5165\u529B\u6587\u5B57\u6570  ".concat(score, ", \u30DF\u30B9\u5165\u529B\u6570  ").concat(miss, " , \u6B63\u89E3\u7387  ").concat(accuracy.toFixed(2), "% !")); // 正解率表示
}

window.addEventListener('click', function () {
  if (isPlaying === true) {
    // isPlaying が true なら
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
window.addEventListener('keydown', function (e) {
  if (isPlaying !== true) {
    // タイプ時に isplaying が true じゃなかったら return する
    return;
  }

  if (e.key === word[loc]) {
    // 打ったキー(e)がwordのloc番目の文字と同じなら
    loc++; // 次の文字へ

    if (loc === word.length) {
      // locが問題の文字列数と一致したら
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

/***/ })
/******/ ]);