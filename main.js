/* 
    Задание 1:

    Вам необходимо поделиться информацией о вашем родном городе. Все данные необходимо записать в отдельную переменную.
    Информация о городе: 
    - Название города (строка)
    - В какой стране находится этот город (строка)
    - Численность населения (число)
    - Есть ли футбольный стадион (boolean [ true(да) / false(нет) ])
*/

// Task #1

const nameCity = 'Lviv';
console.log(nameCity); // Lviv

const nameCountry = 'Ukraine';
console.log(nameCountry); // Ukraine

let numberPopulation = 720000;
console.log(numberPopulation); // 720000

const nameStadium = 'Lviv';
if (nameStadium == 'Lviv') {
    console.log('true'); // true
} else if (nameStadium != 'Lviv') {
    console.log('false');
}

/* 
    Задание 2:
    
    Напишите скрипт, который находит площадь прямоугольника

    - высота 40см
    - ширина 70см

    ps: каждая сущность должна находиться в отдельной переменной
*/

// Task #2

let numberHeight = 40;
console.log(numberHeight); // 40

let numberWidth = 70;
console.log(numberWidth); // 70

let resultArea = numberHeight * numberWidth;
console.log('Площадь прямоугольника -' + ' ' + resultArea + ' ' + 'см2'); // Площадь прямоугольника - 2800 см2

/* 
    Задание 3:
    
    Два автомобиля одновременно выехали навстречу друг другу из двух городов и встретились через 2 часа.
    Первый ехал со скоростью 95км/ч, а второй 114км/ч.

    Цель: Выяснить на каком расстоянии находятся города друг от друга и после всех вычеслений записать результат в переменную.

    Исходные данные: 
    time = 2;
    speedOfFirst = 95;
    speedOfSecond = 114;

*/

// Task #3

let time = 2;
console.log(time); // 2

let speedOfFirst = 95;
console.log(speedOfFirst); // 95

let speedOfSecond = 114;
console.log(speedOfSecond); // 114

let distance1 = speedOfFirst * time;
console.log(distance1); // 190

let distance2 = speedOfSecond * time;
console.log(distance2); // 228

let distanceAll = distance1 + distance2;
console.log('Расстояние между городами -' + ' ' + distanceAll + ' ' + 'м'); // Расстояние между городами - 418 м


/* 
    Задание 4:
    
    Перед вами код:
    const randomNumber = Math.floor(Math.random() * 100);

    Этот код при каждом обновлении страницы генерирует случайное число и записывает его в переменную randomNumber.

    Напишите условную конструкцию, со следующими данными:
    - если randomNumber меньше 20, то выведите в консоль сообщение : "randomNumber меньше 20"
    - если randomNumber больше 50, то выведите в консоль сообщение : "randomNumber больше 50"
    - если ни один из вариантов не совпал, то выведите в консоль сообщение : "randomNumber больше 20, и меньше 50"
*/

// Task #4

const randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

if (randomNumber < 20) {
    console.log('randomNumber меньше 20');
} else if (randomNumber > 50) {
    console.log('randomNumber больше 50');
} else {
    console.log('randomNumber больше 20, и меньше 50');
}

/* 
    Задание 5:
    
    Условную конструкцию из задания 4, перепишите с помощью Switch Case
*/

// Task #5

const randomNumber1 = Math.floor(Math.random() * 100);
console.log(randomNumber1);

switch (true) {
    case (randomNumber1 < 20):
        console.log('randomNumber меньше 20');
        break;
    case (randomNumber1 > 50):
        console.log('randomNumber больше 50');
        break;
    default:
        console.log('randomNumber больше 20, и меньше 50');
}