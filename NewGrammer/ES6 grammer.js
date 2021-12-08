let name = "yeonjae";
let age = 27;

let person = {
  name: name,
  age: age,
};

// let person {name, age}
// 변수의 이름을 가지고 객체 키값을 자동으로 만듬
// 키값, 변수이름이 같은 경우만 해당

let person2 = {
  nameValue: name,
  ageValue: age,
};

// 다른경우 직접 작성을 해주어야함

let bts = {
  name: "방탄",
  num: 7,
};

let name = bts.name;
let num = bts.num;

//let {name, num} = bts

let nameValue = bts.name;
let numValue = bts.num// 이름을 다르게 설정할 경우에는 직접 다 설정
// 같은경우만 간단히 표시

`${haha}`;

let person = {
  name: "yeon",
  age: 27,
};

let { name, age } = person;
//let {name,...restInfo} = person
//restInfo자리는 주고싶은 이름으로 설정
//배열과 마찬가지로 가능

//Array//
let arr = [1, 2, 3];

let a = arr[0];
let b = arr[1];
let c = arr[2];

//let [a,b,c] = arr
//위와 동일

//let [a,...rest] = arr
//a를 뺀 나머지가 rest

let a = [1, 2];
let b = [3, 4];
let c = [5, 6];

//이 모든요소를 하나로 붙이고싶을때

let result = a.concat(b, c); //[1,2,3,4,5,6]

//let result = [...a,...b,...c]
//...을 이용하면 배열을 복사해옴

//함수선언방식//
function foo() {
  return "haha";
}

//let foo = () => "haha"

//위의 함수선언방식과 같음 , return생략가능
//화살표함수

//화살표함수에 this 없음
