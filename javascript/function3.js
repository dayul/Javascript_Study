// 재귀함수

var sum = 0;
var num = 1;

function sumRecursion() {
    sum += num;
    console.log(`sum = ${sum}`);

    if(num == 10) {
        return;
    }

    num++;
    sumRecursion();  // 재귀 호출
}

sumRecursion();