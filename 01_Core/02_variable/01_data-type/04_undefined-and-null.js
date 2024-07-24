/*undefind타입
undefind타입의 값은 >undifind가 유일하다
var키워드로 선언한 변수는 암묵적으로 undefined로 초기화된다
*/
var undef;
console.log(undef);

/*
null타입
null타입의 값은 null이 유일하다
변수에 값이 없다는것을 의도적으로 명시할떄 사용
이전에 할당되어잇던 값에 대한 참조를 명시적으로 제거하지 않는다는것을 의미 */

var nullVal='something';
nullVal=null;
console.log(nullVal);