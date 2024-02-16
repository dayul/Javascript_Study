// 생성자 함수를 이용한 객체 생성 

function Car(company, model) {
    this.company = company;     // 속성
    this.model = model;
    this.myCarInfo = function() {
        console.log(`내 차는 ${this.company}의 ${this.model} 입니다.`);        // 메소드(기능)
    }
}

var car1 = new Car('A회사', '트럭');
console.log(car1);
car1.myCarInfo();

