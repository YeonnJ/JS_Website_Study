//ES6 문법문제

//1. 다음의 코드를 es6 문법을 이용하여 재작성 하시오

let name = "noona's fruit store";
let fruits = ["banana", "apple", "mango"];
let location = "Seoul";

// let store = {
// name: name,
// fruits: fruits,
// location: location };

let store = { name, fruits, location };
console.log(store);

//2. es6 문법을 이용하여 다음과 같이 출력하시오
//제 가게 이름은 noona's fruit store 입니다. 위치는 Seoul 에 있습니다.
console.log(
  `제 가게 이름은 ${store.name} 입니다. 위치는 ${store.location}에 있습니다.`
);

//3. 다음 코드를 Destructoring을 이용하여 해결하시오

// function calculate(obj){    // 함수 안을 바꾸시오
//   return a+b+c
//}

function calculate(obj) {
  let { a, b, c } = obj;
  return a + b + c;
}
calculate({ a: 1, b: 2, c: 3 });

//4. 다음 문제에 정답이 true가 나오게 하시오

let name = "noona store";
let fruits = ["banana", "apple", "mango"];
let address = {
  country: "Korea",
  city: "Seoul",
};

function findStore(obj) {
  let {
    name,
    address: { city },
  } = obj;
  return (name = "noona store" && city == "Seoul");
}
console.log(findStore({ name, fruits, address }));

//5. 다음과같이 프린트되게 코드를 바꾸시오
function getNumber() {
  let array = [1, 2, 3, 4, 5, 6];
  let [first, , third, forth] = array; // 여기서부터 바꾸시오
  return { first, third, forth };
}
console.log(getNumber()); //  결과값 { first: 1, third: 3, forth: 4 }
//어레이에 건너뛰고 싶은 부분이 있다면 ,를 이용해 그자리를 비울 수 있다.

//6. 다음의 결과가 true가 되게 하시오
function getCalendar(first, ...rest) {
  return (
    first === "January" &&
    rest[0] === "Febuary" &&
    rest[1] === "March" &&
    rest[2] === undefined
  );
}
console.log(getCalendar("January", "Febuary", "March")); // 여기를 바꾸시오

//7. 두 어레이들중 최소값을 찾는 함수를 완성하시오
function getMinimum() {
  let a = [45, 23, 78];
  let b = [54, 11, 9];
  return Math.min(...a, ...b); // 여기를 바꾸시오
}
console.log(getMinimum());

//8. 다음의 함수를 화살표 함수로 바꾸시오

function sumNumber() {
  // 여기서부터 바꾸시오
  const sum = (a, b) => a + b;
  return sumNumber(40, 10);
}
// const sum = function (a, b) {
//   return a + b;
// };
//   return sumNumber(40, 10);
// }

//9. 다음함수를 화살표 함수로 바꾸시오
function smNumber() {
  let addNumber = (a) => (b) => (c) => a + b + c;
  return addNumber(1)(2)(3);
}
console.log(sumNumber());
