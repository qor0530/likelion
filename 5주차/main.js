const content = document.querySelector('.content')
const btn = document.querySelector('.btn');
btn.addEventListener('click', ()=>{
    content.textContent += "클릭 하셨어요";
});

window.addEventListener('keydown', (e)=>{
    console.log(e);
    content.textContent += `${e.key}을 누르셨습니다`
});

const alertBtn = document.querySelector('.alertBtn');
const confirmBtn = document.querySelector('.confirmBtn');

alertBtn.addEventListener('click', ()=>{
    window.alert("위험 위험")
});
confirmBtn.addEventListener('click', ()=>{
    let response = window.confirm("확인 or 취소");
    if(response){
        alert("확인을 누르셨습니다.");
    } else{
        alert("취소를 누르셨습니다.");
    }
})