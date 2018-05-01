const text = '数を調査、文字数をカウントする';
let count1 = (text.match(new RegExp('数', 'g')) || []).length;
console.log(count1); //2

let count2 = (text.match(new RegExp('か', 'g')) || []).length;
console.log(count2); //0

let count3 = text.split('数').length - 1
console.log(count3); //2
