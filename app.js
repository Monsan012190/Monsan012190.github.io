document.addEventListener('touchmove', function(e) {e.preventDefault();}, {passive: false});

// 変数定義
let isPlaying = false
let tapCount, time = 0
const tapBtn    = document.getElementById('js-tapBtn')
const startBtn  = document.getElementById('js-startBtn')
const countText = document.getElementById('js-count')
const timeText  = document.getElementById('js-time')


var cHeight = $('html').height();
var bHeight = window.parent.screen.height;
if ((cHeight - bHeight) <= 0){
    iNoBounce.enable();
} else {
    iNoBounce.disable();
}


// ゲームの初期値設定
const setGame = () => {
  tapCount = 0
  time = 10000
  countText.innerText = tapCount
  timeText.innerHTML = time / 1000
}
setGame()

// タップした時にカウントを増やす
tapBtn.addEventListener('click', () => {
  if (!isPlaying) return false
  tapCount++
  countText.innerText = tapCount
})

// STARTボタンを押してゲームをスタートさせる
startBtn.addEventListener('click', () => {
  setGame()
  isPlaying = true
  tapBtn.disabled = false
  startBtn.style.display = 'none'

  const timer = setInterval( () => {
    time -= 10
    timeText.innerHTML = (time / 1000).toFixed(2)

    if (time === 0) {
      clearInterval(timer)
      isPlaying = false
      startBtn.style.display = 'inline-block'
      startBtn.innerText = 'もう一回'
    }
  }, 10)
})




function goClick() {
  // クリック時の動作を指定できます
  //location.href = "http://www.cman.jp/";
    
    const dgram = require('dgram');

const PORT_A = 10000;
const HOST_A ='192.168.4.1';

const PORT_B = 10001;
const HOST_B ='192.168.4.1';

const socket = dgram.createSocket('udp4');

var count = 0;

setInterval(() => {
    count++;
    const data = Buffer.from(String(count));
    socket.send(data, 0, data.length, PORT_A, HOST_A, (err, bytes) => {
        if (err) throw err;
    });
}, 500);


socket.on('message', (message, remote) => {
    console.log(remote.address + ':' + remote.port +' - ' + message);
});

socket.bind(PORT_B, HOST_B);
    
    
}
