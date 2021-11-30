//랜덤번호 지정
//유저가 번호를 입력 , go라는 버튼을클릭
//만약 유저가 랜덤번호를 맞추면 "맞췄습니다!"
//랜덤번호 < 유저번호 Down!!!
//랜덤번호 > 유저번호 Up!!
//Reset을 누르면 게임리셋
//5번의 기회를 다쓰면 게임이 끝난다.(더이상 추측불가, 버튼이 disable)
//유저가 1~100 범위 밖의 숫자를 입력하면 알려주고, 기회를 깍지않는다
//유저가 이미 입력한 숫자를또 입력하면 알려주고, 기회를 깍지않는다.

let playButton = document.getElementById("playButton");
let resetButton = document.getElementById("resetButton");
let chanceArea = document.getElementById("chanceArea");
let resultArea = document.getElementById("resultArea");
let userInput = document.getElementById("userInput");
let randomNum = 0;
let chances = 5;
let history = [];

let defaultplaceholder = userInput.placeholder;

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", () => {
  userInput.value = "";
  userInput.placeholder = "";
});
userInput.addEventListener("blur", () => {
  userInput.placeholder = defaultplaceholder;
});

function reset() {
  userInput.value = "";
  resultArea.value = "";
  resultArea.innerText = `결과가나옵니당`;
  chances = 5;
  chanceArea.innerText = `남은 기회: ${chances}번`;
}

function play() {
  let userNum = userInput.value;

  if (history.includes(userNum)) {
    resultArea.innerText = "중복된 값입니다";
    return;
  } else if (userNum > 100 || userNum < 1) {
    resultArea.innerText = "다른값을 입력하세요";
    return;
  }

  if (userNum > randomNum) {
    resultArea.innerText = "Down!";
  } else if (userNum < randomNum) {
    resultArea.innerText = "Up!";
  } else {
    resultArea.innerText = "Right!";
  }

  history.push(userNum);

  chances--;
  chanceArea.innerText = `남은 기회: ${chances}번`;

  if (chances < 1) {
    playButton.disabled = true;
  }
}
function init() {
  createRandomNum();
}

function createRandomNum() {
  randomNum = Math.floor(Math.random() * 100);
}

init();
