//배열함수 리스트
// forEach : 반환값이 없다, 단순 for문과 같이 작동한다.
// map : 반환값을 배열에 담아 반환한다.
// filter: 조건에 충족하는(true) 아이템만 배열에 담아 반환한다.
// some: 조건에 충족하는 아이템이 하나라도 있으면 true 반환, 아니면 flase.
// every: 모든 배열에 아이템이 조건을 충족하면 true 반환, 아니면 false.
// find : 조건에 충족하는 아이템 하나만 반환(여러개라면 첫번째것만 반환)
// findIndex : 조건에 충족하는 아이템의 인덱스값 반환 (여러개라면 첫번째아이템의 인덱스번호만 반환)

//forEach
let names = ["a", "b", "c", "d", "e"];

//for(let i=0; i<names.length; i++){
//console.log(names[i])
//} ;원래쓰던 for반복문

function printName(item) {
  console.log(item);
}

names.forEach(printName);
//item은 forEach가 알아서 반환
//모든 배열함수가 함수를 매개변수로 받음
//함수에 item을 넣어줌

names.forEach(function (item) {
  console.log(item);
});

names.forEach((item, index) => {
  console.log(item, index);
});
//제일간단
//forEach는 반환값이 없음

//map
let data = names.map((item) => {
  return item;
});
//map은 반드시 배열을 반환한다

let ceoList = [
  { name: "Lee", age: 23, ceo: true },
  { name: "Lee", age: 23, ceo: true },
  { name: "Lee", age: 23, ceo: true },
];

let ceo = ceoList.map((item) => {
  return item.name;
});
console.log(ceo);

//데이터를 전달받고, 원하는 정보만 가져오고싶을때 map을 많이씀

//filter: 조건을 넣고 조건에 대해 참인것만 반환
let ceo2 = ceoList.filter((item) => {
  return item.age == 23; //(조건)에 맞는 정보만 가져옴(결과값도 배열로 반환)
});
console.log(ceo2);

//some (filter와 매우비슷) => 하나라도 있어?
let ceo3 = ceoList.some((item) => {
  return item.startsWith("L"); //(조건)하나라도 있으면 true/false
});
console.log(ceo3);

//every => 모두가 그 값이야?
let ceo4 = ceoList.some((item) => {
  return item.startsWith("L"); //(조건)이 모두 만족해? T/F
});
console.log(ceo4);

//find =>조건에 맞는 애를 찾아줘
let ceo5 = ceoList.find((item) => {
  return item == "Lee"; //(조건)이 모두 만족해? T/F
});
console.log(ceo5);

//findIndex
let ceo6 = ceoList.findIndex((item) => {
  return item == "Lee"; //(조건)이 모두 만족해? T/F
});
console.log(ceo6);
