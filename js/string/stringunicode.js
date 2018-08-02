var uni = 'あ'.charCodeAt(0).toString(16);
console.log(uni); //3042

console.log('\u3042');

var kanuni = '木'.charCodeAt(0).toString(16);
console.log(kanuni); //6728

console.log('\u6728');

var kanuni = '𩸽'.charCodeAt(0).toString(16);
console.log(kanuni); //d867

console.log('\ud867');

var codePoint = '𩸽'.codePointAt();
console.log(codePoint); // 171581

var fromCodePoint = String.fromCodePoint(codePoint)
console.log(fromCodePoint);
