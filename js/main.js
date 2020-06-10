'use stuict';

let lang = 'en';
let arr;

if (lang == 'ru'){
	let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
	console.log(arr);
} else if (lang == 'en'){
	let arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
	console.log(arr);
}

switch (lang){
	case 'ru':
		arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
		break;
	case 'en':
		arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
		break;
}
console.log(arr);

arr = {
	'ru':['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
	'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
}
console.log(arr[lang]);


let namePerson = 'Артем';

let result = (namePerson === 'Артем') ? 'директор' : (namePerson === 'Максим') ? 'преподаватель' : 'студент';
console.log(result);






