const quiz = [
  {
    question: '色の三原色は何と何と何？',
    answers: [
    '赤・青・黄色',
    '赤・緑・青',
    '緑・黄色・青'
  ],
    correct: '赤・緑・青'
    
  }, {
    question: '色の3要素とは？',
    answers: [
    '色相・明度・彩度',
    '色彩・色相・明度',
    'トーン・マナー・コントラスト'
  ],
    correct: '色相・明度・彩度'
  }, {
    question: 'デザインの4つの原則に含まれていないのは？',
    answers: [
    '近接',
    '反復',
    '情報'
    ],
    correct: '情報'
  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題、選択肢を定義
const setQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    // 問題がまだあれば実行
    setQuiz();
  } else {
    // 問題がなければこちらを実行
    window.alert('お疲れさまでした！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}