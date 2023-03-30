
var student = {
    class: 1,
    name: '종화'
};

console.log(student)
console.log(`이 물건은 ${student.name}이 주인입니다`)

var string = "이 세상이 너무나 둥글어 우리가 만난다."

console.log(string.indexOf("세상"));
console.log(string.indexOf("이"));

console.log(string.slice(0, 5));

console.log(string.includes('이'))

var mbti = ['intp', 'enfj', 'intj']
console.log(mbti[0])
console.log(mbti.length)
mbti[3] = 'ESFP'

console.log(mbti)


var new_mbti = [...mbti, 'sipp', 'intg']
console.log(new_mbti)

if (new_mbti.length > mbti.length) {
    console.log(new_mbti)
} else {
    console.log(mbti)
}


switch(new_mbti) {
    case 'INTP':
        var mbti_new = 'INTP'
        break;
    case 'INTJ':
        var mbti_new = 'INTJ'
        break;
    default:
        var mbti_new = 'NOPE'
}


for (var i = 10; i > 0; i--) {
    for (var j = 10; j > 0; j--) {
        console.log(i*j);
    }
}
