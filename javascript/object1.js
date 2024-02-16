// 객체 변수를 이용한 객체 생성 

var car = {
    company: 'A회사',
    model: '승용차',
    myCarInfo: function() {
        console.log(`내 차는 ${this.company}의 ${this.model} 입니다.`);
    }
}

console.log('회사 이름: ' + car.company);
console.log('모델명: ' + car.model);
car.myCarInfo();