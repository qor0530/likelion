console.log("         ,r'\"7");
console.log("r`-_   ,'  ,/");
console.log(" \. \". L_r'");
console.log("   `~\\/");
console.log("      |");
console.log("      |");


function ifyun(year) {
    if (year % 4 == 0 && year % 100 != 0) {
        return true
    } else {
        if (year % 400 == 0 && year % 100 == 0) {
            return true
        } else {
            return false
        }
    }
}

const year1 = 2000;
const year2 = 1999;

console.log(ifyun(year1))
console.log(ifyun(year2))

function make_star(num) {
    for (let i = 1; i <= num; i++) {
        let string = ""
        for (let k = i; k <= num; k++) {
        string += " "
        }
        for (let j = 1; j <= i; j++) {
            string += "*"
        }
        console.log(string);
    }
}

const n = 24;

make_star(n);

function overavrg(list) {
    const students = list[0];
    let score = 0
    for (let i = 1; i <=students; i++) {
        score += list[i]
    }
    const avrg = score/students
    let avrg_up = 0
    for (let i = 1; i <=students; i++) {
        if (avrg < list[i]) {
            avrg_up += 1
        }
    }
    return (avrg_up / students).toFixed(3);
}

const c1 = [5,50,50,70,80,100];
const c2 = [7,100,95,90,80,70,60,50];
const c3 = [3,70,90,80];
const c4 = [3,70,90,81];

console.log(overavrg(c1))
console.log(overavrg(c2))
console.log(overavrg(c3))
console.log(overavrg(c4))

const N = 2;

for (let i=1; i<=9; i++) {
    console.log(`${N} * ${i} = ${N*i}`)
}