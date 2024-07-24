console.log(Boolean); //불리언생성자함수호출
console.log(new Boolean('JavaScript')); //true

//1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
console.log(Boolean('JavaScript'));  //true
console.log(new Boolean('JavaScript'));  //[Boolean: true]
console.log(Boolean(''));                   // false
console.log(Boolean(1));                    // true
console.log(Boolean(0));                    // false
console.log(Boolean(NaN));                  // false
console.log(Boolean(Infinity));             // true
console.log(Boolean(null));                 // false
console.log(Boolean(undefined));            // false
console.log(Boolean({}));                   // true
console.log(Boolean([]));                   // true

console.log("=======부정논리 연산자 두번 사용 =======");

//2.!부정논리연산자를 두번사용하는 방법
console.log(!!'javascript'); //true

console.log(!!'JavaScript');                // true
console.log(!!'');                          // false
console.log(!!1);                           // true
console.log(!!0);                           // false
console.log(!!NaN);                         // false
console.log(!!Infinity);                    // true
console.log(!!null);                        // false
console.log(!!undefined);                   // false
console.log(!!{});                          // true
console.log(!![]);                          // true



