const texts = document.querySelectorAll(".l_item");
const underline = document.querySelector(".underline");
const menu_list = document.querySelector(".menu_list");
texts.forEach((text) => {
  text.addEventListener("mouseenter", () => {
    const textWidth = text.clientWidth;
    const textLeft = text.offsetLeft;
    underline.style.width = `${textWidth}px`;
    underline.style.left = `${textLeft}px`;
  });
});

menu_list.addEventListener('mouseover', ()=>{
    underline.classList.remove("hide")
    underline.classList.add("show")
})
menu_list.addEventListener('mouseout', ()=>{
    underline.classList.remove("show")
    underline.classList.add("hide")
})



const link1 = document.querySelector(".link1")
const box1 = document.querySelector(".downloadBox1")
link1.addEventListener('mouseover', ()=>{
    box1.classList.remove("hide")
    box1.classList.add("show")
})
link1.addEventListener('mouseout', ()=>{
    box1.classList.remove("show")
    box1.classList.add("hide")
})

const link2 = document.querySelector(".link2")
const box2 = document.querySelector(".downloadBox2")
link2.addEventListener('mouseover', ()=>{
    box2.classList.remove("hide");
    box2.classList.add("show");
})
link2.addEventListener('mouseout', ()=>{
    box2.classList.remove("show");
    box2.classList.add("hide");
})

const link3 = document.querySelector(".link3")
const box3 = document.querySelector(".downloadBox3")
const language = document.querySelector(".language")
function changeText(element, isOn) {
    if (isOn){
        element.textContent = "KOR ▲";
    }
    else{
        element.textContent = "KOR ▼";
    }
  }

link3.addEventListener('mouseover', ()=>{
    box3.classList.remove("hide");
    box3.classList.add("show");
    // changeText(language, true);
})
link3.addEventListener('mouseout', ()=>{
    box3.classList.remove("show");
    box3.classList.add("hide");
    // changeText(language, false);
})


// 오른쪽 상단
// 박스를 absolute로 상속시켜서 중앙정렬이 안됨.
// 중간 글자들이 세로로 중앙 정렬이 안되서 불편함.
// 박스안에 글자들은 각각이 요소로 지정되있지 않음. 
// 이외 아쉬운 점들
// 기존의 타이틀은 글자를 2개로 나눠서 사용했음 난 하나(귀찬흠)
// 
// 