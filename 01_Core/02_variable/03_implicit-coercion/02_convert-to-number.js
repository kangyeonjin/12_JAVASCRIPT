console.log('=====숫자타입으로 변환=======');
//산술연산자의 피연산자는 모두 숫자여야하기 떄문에
//숫자가 아닌 피연산자를 숫자타입으로 암묵적타입변환한다
console.log(10-'5');
console.log(10*'5');
console.log(10/'5');
console.log(10%'5');
console.log(10%'Javascript'); //nan - 피연산자 숫자 변환 불가로 연산수행불가

console.log(5);

//비교연산자로 크기를 비교하기 위해 숫자여야하기때문에
//숫자가 아닌 피연산자를 숫자 타입으로 암묵적 타입변환한다
console.log(10>'5');

//+단항연산자는 피연산자가 숫자타입의 값이 아니면 숫자타입의 값으로 암묵적 타입변환수행
console.log(+'');  //0
console.log(+'1'); //1
console.log(+'JavaScript'); //nan
console.log(+true); //1
console.log(+false); //0
console.log(+null); //0
console.log(+undefined); //nan
console.log(+{}); //nan
console.log(+[]); //0






