// Получаем от пользователя 3 строки
let input1 = prompt("Введите первую строку:");
let input2 = prompt("Введите вторую строку:");
let input3 = prompt("Введите третью строку:");

// Выводим строки в рандомном порядке с использованием конкатенации
let concatenatedString = input2 + input3 + input1;
console.log("Строки в рандомном порядке:", concatenatedString);

// Получаем от пользователя пятизначное число
let fiveDigitNumber = prompt("Введите пятизначное число:");

// Разбиваем число на цифры и выводим их в исходном порядке через пробел
let digitsArray = fiveDigitNumber.split("").join(" ");
console.log("Цифры в исходном порядке:", digitsArray);
