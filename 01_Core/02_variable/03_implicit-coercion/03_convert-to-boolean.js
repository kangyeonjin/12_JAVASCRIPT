//암묵적 타입 형변환
/*자바 스크립트 엔진은 불리언 타입이 아닌 값들을
truthy값 (참으로 평가되는 값)
falsy값 (거짓으로 평가되는값)으로 구분한다 */

//'javascrirpt'>truthy값이기 때문에 true로 형변환된것
if('javascript'){
    console.log("if('javascirpt')");
    
}
if(true)console.log("if(true)");
if(false)console.log("if(false)");
if(undefined)console.log("if(undefined)");
if(null)console.log("if(null)");
if(0)console.log("if(0)");
if(NaN)console.log("if(NaN)");
if('')console.log("if('')");






