/*02.문자열타입
문자열타입은 텍스트데이터를 나타내는데 사용된다
문자열은 작은 따옴표, 큰따옴표, 또는 벡틱으로 텍스트를 감싼다
자바에서는 string >객체, 자바스크립트에서는 string >원시타입*/

var string;
string='JavaScript';
string='JacaScript';
string='JavaScript'; //백틱(ES6)

string ='작은따옴표로 감싼 문자열 내의 "큰따옴표"는 문자열로인식';
string="큰따옴표로감싼 문자열내의 '작은 따옴표'는 문자열로 인식"

/** 탬플릿 리터럴
 * 멀티라인문자열, 표현식삽입등의 편리한 문자열처리기능을 제공하는 문자열 표기법
*/

//큰따옴표 작은따옴표에서는 이스케이프시퀀스를 사용해야 줄바꿈할수있다
var str='안녕하세요 \n 반갑습니다';
console.log(str);

//백틱을 이용하면 줇바꿈이 허용되고, 모든 공백이 그대로 적용됨
var multiline='안녕하세요 반갑습니다';
console.log(multiline);

var lastName ='박';
var firstName='태근';
console.log('제이름은'+lastName+firstName+'입니다');

//표현식 삽입 -> 무조건 백택내에서 사용해야한다
console.log(`제이름은${lastName}${firstname}입니다`);
