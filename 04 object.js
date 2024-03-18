const cathy = {
    name: "cathy",
    age: "19",
    skills: ["자바스크립트", "파이선", "코볼"]
}


console.log(cathy)
console.log(cathy.name)
console.log(cathy["name"])

//속성 추가
cathy["hobby"] = "독서"


//속성 삭제
delete cathy.hobby
console.log(cathy)