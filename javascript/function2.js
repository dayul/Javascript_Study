function printStar(number) {
    if(number < 1) {
        console.log("숫자를 잘못 입력하겼습니다.");
        return;
    }

    var i;
    for(i = 0; i < number; i++) {
        console.log('-*-');
    }
}

printStar(-2);
printStar(5);