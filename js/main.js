// Создайте функцию, которая принимает 1 аргумент (название произвольное)

// — Если в качестве аргумента передана не строка - функция оповещает об этом пользователя

// — В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце

// — Если строка более 30 знаков - то после 30го символа часть текста скрывается и вместо них появляются три точки (...)

// function test(str) {
// 	if (typeof str !== 'string') {
// 		alert('аргумент не строка');
// 		return;
// 	}

// 	str = str.trim();
// 	return str.length > 50 ? str.slice(0, 50) + '...' : str;
// }

// function testString(x){
// 	if(typeof str !== 'string') {
// 		console.log(str + ' - аргумент не строка!!!');
// 		return;
// 	}

// 	let str = x.trim();
// 	console.log(x);

// 	//str = str.lenght > 5 ? str.slice(0, 5) + '...' : str;

// 	let cut = str.lenght;
// 	console.log(cut);
// 	str = str.slice(0, 5);
// }
// testString('sdfsdfgsdf');
// //testString(123123123);

// строка должна передаваться как параметр, а не присваиваться, но я это задание не смогу принять пока не приняты основные до текущего дня. я об этом уже говорил, это правило академии направленное на то, чтобы не допускать множества долгов

"use strict";

// function funcMath() {
// 	const a = 10;
// 	return function() {
// 		console.log(a * a);
// 	};
// }

// const mathPow = funcMath();
// mathPow();

