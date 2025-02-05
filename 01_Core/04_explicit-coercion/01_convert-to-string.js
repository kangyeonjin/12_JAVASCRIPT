/*명시적 타입 형변환
>개발자의 의도에 따라 타입 변환을 하는것
 */

//1. string생성자 함수를 new연산자 없이 호출
console.log(String(10)); //"10"
console.log(String(NaN)); //"NaN"
console.log(String(Infinity)); //Infinity
console.log(String(true)); //true
console.log(String(false)); //false

//2. object.prototype.tostring메소드 사용
console.log((10).toString());
console.log(String(NaN).toString); //"NaN"
console.log(String(Infinity).toString); //Infinity
console.log(String(true).toString);
console.log(String(false).toString);



