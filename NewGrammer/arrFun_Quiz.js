let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];

//map 문제
// 모든 이름을 대문자로 바꾸어서 출력하시오.
// 성을제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])
// 이름의 이니셜만 출력하시오. (예-[“SPU”,“BG”,“MEZ”,“EM”…])

let capital = names.map((item) => {
  return item.toUpperCase();
});

// console.log(capital);
// let upperCaseName = names.map((item)=>item.toUpperCase())

let test = names.map((name) => {
  return name
    .split(" ")
    .map((el) => {
      return el[0];
    })
    .join("");
});

// console.log(test);
// let firstNames = names.map((item)=>item.split(' ')[0])

let test2 = names.map((name) => {
  return name.split(" ")[0];
});
// console.log(test2);
// let initialOnly = names.map((item) => {
//   let splitName = item.split(" ");
//   let initial = "";
//   splitName.forEach((nameItem) => (initial += nameItem[0]));
//   return initial;
// })

//-----------------------------------------------------
// filter 문제
// 이름에 a를 포함한 사람들을 출력하시오.
// 이름에 같은 글자가 연속해서 들어간 사람을 출력하시오.
//(예-tt,ff,ll 이런 글자들)

let person = names.filter((item) => {
  return item.includes("a"); //(조건)에 맞는 정보만 가져옴(결과값도 배열로 반환)
});
// console.log(person);
// let includeA = names.filter((item)=>item.includes('a'))

let people = names.filter((item, i) => {
  for (let i = 0; i < item.length; i++) {
    if (item[i] === item[i + 1]) {
      return item;
    }
  }
});
// console.log(people);
// let doubleLetter =  names.filter((item) => {
//   let splitName = item.split("");
//   return splitName.some((letter, index) => letter == splitName[index + 1]);
// })

//---------------------------------------------------
//some 문제
// 전체 이름의 길이가 20자 이상인 사람이 있는가?
// 성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)

let length = names.some((item) => {
  return item.length >= 20; //(조건)하나라도 있으면 true/false
});
// console.log(length);
// console.log(names.some((item)=>item.length>=20))

let nameP = names.map((name) => {
  return name.split(" ")[0].includes("p");
});
// console.log(nameP);
// console.log(names.some((item)=>{
//   let splitName = item.split(' ')
//   splitName.pop()
//   return splitName.some(eachName=>eachName.toLocaleLowerCase().includes("p"))
// }))

//------------------------------------------------------
// every 문제
// 모두의 전체 이름의 길이가 20자 이상인가?
// 모두의 이름에 a 가 포함되어 있는가?
let every = names.every((item) => {
  return item.length >= 20;
});
// console.log(every);
// console.log(names.every(item=>item.length>=20))

let every2 = names.every((item) => {
  return item.includes("a");
});
// console.log(every2);
// console.log(names.every(item=>item.includes('a')))
//------------------------------------------------------
// find 문제
// 전체 이름의 길이가 20자 이상인 사람을 찾으시오.
// 미들네임이 포함되어있는 사람을 찾으시오.(예-Steven Paul Jobs)
let findName = names.find((item) => {
  return item.length >= 20;
});
// console.log(findName);
// console.log(names.find(item=>item.length>=20))

let middleName = names.filter((item) => {
  return item.split(" ").length === 3;
});

// console.log(middleName);
// console.log(names.find(item=>item.split(' ').length>=3))
//----------------------------------------------------------
// findIndex 문제
// 전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
// 미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.
let nameLength = names.findIndex((item, index) => {
  return item.length >= 20;
});
// console.log(nameLength);
// console.log(names.findIndex(item=>item.length>=20))

let middleIndex = names.reduce((acc, cur, index) => {
  if (cur.split(" ").length === 3) {
    acc.push(index);
  }
  return acc;
}, []);
// console.log(middleIndex);
// console.log(names.findIndex(item=>item.split(' ').length>=3))
