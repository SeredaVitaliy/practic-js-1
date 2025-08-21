// document.querySelector('.message');

//манипулирование DOM

console.log(document.querySelector('.message').textContent); // чтобы получить значение данного элемента

// DOM - объектная модель документа и представляет собой структурированое представление HTML документа. DOM позволяет использовать JS для получения доступа к HTML элементам и стилям, чтобы манипулировать ими. Например, можно изменять текс, атрибуты, стили. DOM автоматически создается браузером как только загружается HTML страница и сохраняется в виде древовидной структуры.

// document.querySelector('.message').textContent = 'Правильный номер !!!'; // чтобы заменить содержимое

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value); // для получения фактического значения поля ввода

// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1; //чтобы сгенерировать загаданное число от 0 до 20 Math.hrunc чтобы получить целое число. +1 чтобы число находиось между границами 0 - 20
let score = 20; // чтобы изменять количество очков. каждая неправильная попытка - 1 очко
let higscore = 0; // обявление лучшего счета

// управление нажатием кнопки

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // когда изначальных данных нет
  if (!guess) {
    //добавляем для первого сценария, если будет 0, то будет выводиться некорректное значение
    document.querySelector('.message').textContent =
      'Введите корректное значение !';

    // когда пользователь выигрывает
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Ты отгадал 🏆';
    document.querySelector('.number').textContent = secretNumber; // переносим эту строку, чтобы она показывала номер, если число отгадано
    document.querySelector('body').style.backgroundColor = '#60b347'; // фон бади будет менять при победе. '' ставятся в любом случае, когда нужна манипуляция со стилями
    document.querySelector('.number').style.width = '30rem'; // увеличение прямоугольника с цифрой

    if (score > higscore) {
      higscore = score;
      document.querySelector('.hightscore').textContent = higscore; //добавление лучшего счета
    }
    // когда число больше загаданного
  } else if (guess > secretNumber) {
    //// делаем так, чтобы счет не уходил в минус
    if (score > 1) {
      document.querySelector('.message').textContent = 'Мое число меньше ⬇️';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Ты проиграл ☠️';
      document.querySelector('.score').textContent = 0;
    }
    // когда число мельше загаданного
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Мое число больше ⬆️';
      score--; // чтобы уменьшить количество баллов
      document.querySelector('.score').textContent = score; // чтобы заменить текст
    } else {
      document.querySelector('.message').textContent = 'Ты проиграл ☠️';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//вызов метода, чтобы включить прослушиватель событий на щелчок, нам нужно указать реацию на щелчок и указать код, который будет выполняться по щелчку мыши, в качестве второго аргумента передается функиция

// реализуем игровую логику. То есть верное число, меньше или больше

// манипуляции css через DOM js
// поменять фон на другой цвет пробеде

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//программирование кнопки Еще раз!
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Начни угадывать...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
