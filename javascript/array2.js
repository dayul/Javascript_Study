console.log('1. fruit.length');
var fruit = ['사과', '키위', '망고'];
console.log('fruit: ' + fruit);
console.log('fruit.length: ' + fruit.length);   // 저장된 데이터의 개수(길이)를 반환

console.log('2. fruit.sort');
fruit = ['사과', '키위', '망고'];
console.log('fruit (before): ' + fruit);
console.log('fruit.sort: ' + fruit.sort());     // 한글은 가나다순(오름차순)으로 정렬
console.log('fruit (after): ' + fruit);

console.log('3. fruit.join');
console.log('fruit (before): ' + fruit);
console.log('fruit.join: ' + fruit.join('-'));     // 모든 원소를 '-'문자로 연결
console.log('fruit (after): ' + fruit);

console.log('4. fruit.pop');
console.log('fruit (before): ' + fruit);
console.log('fruit.pop: ' + fruit.pop());     // 배열의 마지막 원소를 제거
console.log('fruit (after): ' + fruit);
