// --1 створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let num = [2, 5, 8, 10, 5.6];
// console.log(num);
//
// let str = ['Hello', 'Okten', 'name', 'js', 'num'];
// console.log(str);
//
// let b = ['age', 'name', 25, 7.8, true];
// console.log(b);


// -- 2 Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// let arr = [];
// arr[0] = 567;
// arr[1] = 'Anna';
// arr[2] = true;
// arr[3] = 98;
// arr[4] = false;
// console.log(arr);


// - 3 За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// let products = [
//     {
//         title: 'tea',
//         price: '30',
//         description: 'Tea is an aromatic beverage commonly prepared by pouring hot or boiling water over cured or fresh leaves of Camellia sinensis, an evergreen shrub native to China and East Asia.'
//     },
//     {
//         title: 'milk',
//         price: '25',
//         description: 'Milk is a nutrient-rich liquid food produced by the mammary glands of mammals.',
//     },
//     {
//         title: 'chokolate',
//         price: '15',
//         description: 'Chocolate is a food made from cacao beans',
//     },
//     {
//         title: 'tomato cherry',
//         price: '40',
//         description: 'The cherry tomato is a type of small round tomato believed to be an intermediate genetic admixture between wild currant-type tomatoes and domesticated garden tomatoes',
//     },
//     {
//         title: 'juice',
//         price: '18',
//         description: 'Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. ',
//     },
//     {
//         title: 'water',
//         price: '20',
//         description: 'Water, a substance composed of the chemical elements hydrogen and oxygen and existing in gaseous, liquid, and solid states. ',
//     },
//     {
//         title: 'apple',
//         price: '30',
//         description: 'Apple is the world\'s largest technology company by revenue and one of the world\'s most valuable companies.',
//     },
//     {
//         title: 'book',
//         price: '58',
//         description: 'Describe your book in simple, straightforward, and consumer-friendly terms. Your description should be at least 150-200 words long. ',
//     },
//     {
//         title: 'lemon',
//         price: '47',
//         description: 'Lemon, Citrus limon, is a small evergreen tree in the family Rutaceae grown for its edible fruit which, among other things, are used in a variety of foods and drinks',
//     },
//     {
//         title: 'cup',
//         price: '36',
//         description: 'A cup is an open-top container used to hold liquids for pouring or drinking',
//     },
// ];
//  for (const product of products) {
//      document.write(`<div>${product.title} ${product.price} ${product.description}</div>`);
//      document.write('<br>')
//  }

// ще один варіант до задачі #3:

// let words = ['lemon', 'apple', 'sugar', 'water', 'chocolate', 'milk', 'tomato', 'juice', 'pear', 'meat'];
// for (let word of words) {
//     document.write(`<div>${word}</div>`);
// }


//
// - 4 За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//
// let words = ['lemon', 'apple', 'sugar', 'water', 'chocolate', 'milk', 'tomato', 'juice', 'pear', 'meat'];
// for (let i = 0; i < words.length; i++) {
//     document.write(i);
//     document.write(words[i]);
//     document.write('<br>');
// }


// - 5 За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let name = ['Emma', 'Mila', 'Nikita', 'Karina', 'Olya', 'Kolya', 'Misha', 'Alex', 'Nick', 'Tanya', 'Galya', 'Katya', 'Arthur', 'Dima', 'Masha', 'Vasya', 'Denis', 'Dasha', 'Anya', 'Ihor'];
// let i = 0;
// while (i < name.length) {
//     document.write(`<h1>${name[i]}</h1>`);
//     document.write('<br>');
//     i++;
// }


// - 6 За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


// let name = ['Emma', 'Mila', 'Nikita', 'Karina', 'Olya', 'Kolya', 'Misha', 'Alex', 'Nick', 'Tanya', 'Galya', 'Katya', 'Arthur', 'Dima', 'Masha', 'Vasya', 'Denis', 'Dasha', 'Anya', 'Ihor'];
// let i = 0;
// while (i < name.length) {
//     document.write(i);
//     document.write(`<h1>${name[i]}</h1>`);
//     document.write('<br>');
//     i++;
// }


//
// // - 7 Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let number = [23, 56, 4, 85, 21, 45, 38, 5, 44, 6.7];
// for (let i = 0; i < number.length; i++) {
//     console.log(number[i]);
//
// }


// - 8 Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.


// let name = ['Emma', 'Mila', 'Nikita', 'Karina', 'Olya', 'Kolya', 'Misha', 'Alex', 'Nick', 'Tanya', 'Galya', 'Katya', 'Arthur', 'Dima', 'Masha', 'Vasya', 'Denis', 'Dasha', 'Anya', 'Ihor'];
// for (let i = 0; i < name.length; i++) {
//     console.log(name[i]);
//
// }


// - 9 Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

//
// let workers = ['Ihor', 'Karina', 'Alex', 34, 42, 2.1, true, 'Olya', 'js', false];
// for (let worker of workers) {
//     console.log(worker);
// }


// - 10 Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

//
// let workers = ['Ihor', 'Karina', 'Alex', 34, 42, 2.1, true, 'Olya', 'js', false];
// for (let worker of workers) {
//     if (typeof worker == "boolean") {
//         console.log(worker);
//     }
//
// }


// - 11 Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

//
// let workers = ['Ihor', 'Karina', 'Alex', 34, 42, 2.1, true, 'Olya', 'js', false];
// for (let worker of workers) {
//     if (typeof worker == "number") {
//         console.log(worker);
//     }
//
// }


// - 12 Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи


//
// let workers = ['Ihor', 'Karina', 'Alex', 34, 42, 2.1, true, 'Olya', 'js', false];
// for (let worker of workers) {
//     if (typeof worker == "string") {
//         console.log(worker);
//     }
//
// }


// - 13 Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.


// let arr = [];
// arr[0] = 567;
// arr[1] = 'Anna';
// arr[2] = true;
// arr[3] = 98;
// arr[4] = false;
// arr[5] = 8.4;
// arr[6] = 'Roma';
// arr[7] = 'Ihor';
// arr[8] = 32;
// arr[9] = 'Karina';
//
// for (let num of arr) {
//     console.log(num);
// }


// - 14 Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write


// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     document.write(i);
//
// }


// - 15 Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write


// for (let i = 0; i <= 100; i++) {
//     console.log(i);
//     document.write(i);
// }


//
// - 16 Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i <= 100; i += 2) {
//    console.log(i);
//    document.write(i);
// }


//
// - 17 Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write


// for (let i = 2; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//         document.write(i);
//     }
// }


// - 18 - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//         document.write(i);
//     }
// }


// - 19 Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// let time = '0 : 0';
// let min = 0;
// let sec = 0;
//
// for (let min = 0; min < 60; min++) {
//     for (sec = 0; sec < 60; sec++) {
//         if (time === '2 : 0') {
//             break
//         }
//         time = `${min} : ${sec}`
//         console.log(time);
//     }
// }
//


// - 20 Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)


// let time = '0 : 0 : 0';
// let min = 20;
// let sec = 59;
// let hour = 2;
//
// for (let i = 0; i <= hour; i++) {
//     for (let j = 0; j <= min; j++) {
//         for (let k = 0; k <= sec; k++) {
//             console.log(i + ':' + j + ':' + k);
//             if (i == 2 && j == 20 && k == 0 ) {
//                 break
//             }
//         }
//     }
// }





                                                      //
                                                      // РОБОТА В АУДИТОРІЇ




// - 1  Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.



// let mas = ['a', 'b', 'c'];
// mas.push(1);
// mas.push(2);
// mas.push(3);
// console.log(mas);



// - 2  Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

//
// let num = [1, 2, 3];
// let begin = num.shift();
// let end = num.pop();
// console.log(end + num + begin);
//



// - 3  Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.


// let number = [1, 2, 3];
// number.push(4);
// number.push(5);
// number.push(6);
// console.log(number);




// - 4 Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.


// let num = [1, 2, 3];
// num.unshift(4);
// num.unshift(5);
// num.unshift(6);
// console.log(num);






//
// - 5   Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

// let string = ['js', 'css', 'jq'];
// let str = string.shift();
// string.shift();
// string.shift();
// console.log(str);







// -  6  Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()


//
// let str = ['js', 'css', 'jq'];
// let arr = str.pop();
// str.pop();
// str.pop();
// console.log(arr);





// -  7  Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].


// let num = [1, 2, 3, 4, 5];
// num.splice(0,3);
// console.log(num);




// -  8   Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].


// let numbers = [1, 2, 3, 4, 5];
// numbers.splice(2,3);
// console.log(numbers);




// -  9   Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].



// let num = [1, 2, 3, 4, 5];
// let now = num.splice(3,2);
// num.push('a', 'b', 'c');
// console.log(num + ',' + now);



// -  10  Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].



// let arr = [1, 2, 3, 4, 5];
// arr.splice(1,0,'a');
// arr.splice(2,0,'b');
// arr.splice(6,0,'c');
// arr.push('e');
//
// console.log(arr);


//
// -  11   Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.




// let number = [6, 45, 78, 23, 7, 10, 15, 64, 3, 1];
// for (let i = 0; i < number.length; i++) {
//     if (number[i]% 2 ===0) {
//         console.log(number[i]);
//     }
// }
//




//
// -  12  Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

//
// let numbers = [6, 45, 78, 23, 7, 10, 15, 64, 3, 1];
// let num = [];
// for (let number of numbers) {
//     num.push(number);
// }
// console.log(num);




// - 13  Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

//
// let number = [6, 45, 78, 23, 7, 10, 15, 64, 3, 1];
// let num = [];
// for (let i = 0; i <  number.length; i++) {
//     num[i] = number[i];
// }
// console.log(num);




// ====================




//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while


// let number = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < number.length) {
//     console.log(number[i]);
//     i++
// }




// 2. перебрати його циклом for
//
// let number = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < number.length; i++) {
//     console.log(number[i]);
// }
//



//
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом


// let number = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < number.length) {
//     if (i % 2 !== 0)
//        console.log(number[i]);
//     i++
// }




// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// let number = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < number.length; i++) {
//     if (i % 2 !== 0) {
//         console.log(number[i]);
//     }
// }






// 5. перебрати циклом while та вивести  числа тільки парні  значення


// let number = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < number.length) {
//     if (number[i] % 2 == 0) {
//         console.log(number[i]);
//     }
//     i++
// }




// 6. перебрати циклом for та вивести  числа тільки парні  значення


// let number = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < number.length; i++) {
//     if (number[i] % 2 === 0) {
//         console.log(number[i]);
//     }
// }





// 7. замінити кожне число кратне 3 на слово "okten"



// let number = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < number.length; i++) {
//     if (number[i] % 3 === 0) {
//         number[i] = 'okten';
//     }
//
// }
// console.log(number);

//
// 8. вивести масив в зворотньому порядку.


// let number = [2,17,13,6,22,31,45,66,100,-18];
// let arr = number.reverse();
// console.log(arr);
//
//


// створити пустий масив та :
//     - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.


// let number = [];
//
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         number.push(i);
//     }
// }
//
// console.log(number);




// let number = [];
//
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         number.push(i);
//     }
// }
//
// console.log(number);
//
//








// Заповнити масив 20ма рандомними числами.


// let number = [];
//
// for (let i = 0; i < 20; i++) {
//     number.push(Math.floor(Math.random() * 100));
// }
//
// console.log(number);




// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732

//
// let number = [];
//
// for (let i = 8; i < 732; i++) {
//     number.push(Math.floor(Math.random() * 100));
// }
//
// console.log(number);
//





// 2. Вивести за допомогою console.log кожен третій елемен


// let number = [45, 78, 3, 67, 32, 8, 10, 1, 90, 44, 3.4, 78, 6.7, 24, 91, 4.5];
// for (let i = 2; i < number.length; i+=3) {
//     console.log(number[i]);
// }
//







// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.


//
// let number = [45, 78, 3, 67, 32, 8, 10, 1, 90, 44, 3.4, 78, 6.7, 24, 91, 4.5];
// for (let i = 2; i < number.length; i+=3) {
//     if (number[i] % 2 === 0) {
//
//         console.log(number[i]);
//     }
// }





// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив




// let number = [45, 78, 3, 67, 32, 8, 10, 1, 90, 44, 3.4, 78, 6.7, 24, 91, 4.5];
// let num = [];
// for (let i = 2; i < number.length; i+=3) {
//     if (number[i] % 2 === 0) {
//         num.push(number[i]);
//
//     }
// }
// console.log(num);






// 5. Вивести кожен елемент масиву, сусід справа якого є парним

// let number = [45, 78, 3, 67, 32, 8, 10, 1, 90, 44, 3.4, 78, 6.7, 24, 91, 4.5];
// for (let i = 0; i < number.length; i++) {
//     if (number[i + 1] % 2 === 0) {
//         console.log(number[i]);
//     }
// }



// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.


// let check = [100,250,50,168,120,345,188];
// let total = 0;
// for (let i = 0; i < check.length; i++) {
//     total += check[i];
//
// }
// console.log(Math.floor(total / check.length));




// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.


//
// let number = [3, 6, 10, 5, 13, 7, 1];
// let total = [];
// for (let i = 0; i < number.length; i++) {
//     let newNum = number[i] * 5;
//     total.push(newNum);
// }
// console.log(total);
// console.log(number);



// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.



// let company = ['html', 'css', 'js', false, 'Vasya', 'Alex', 32, 5, 'Karina', 25,];
// let number = [];
// for (let i = 0; i < company.length; i++) {
//     if (typeof company[i] == 'number')
//         number.push(company[i]);
// }
//
// console.log(number);




                                                // Додатково


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.


// let word = [ 'a', 'b', 'c'];
// let str = [];
// for (i = 0; i < word.length; i++) {
//     str += word[i];
// }
// console.log(str);




// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.


// let word = ['a', 'b', 'c'];
// let str = [];
// let i = 0;
// while (i < word.length) {
//     str += word[i];
//     i++
// }
// console.log(str);








































































