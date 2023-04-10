const link1 = document.querySelector(".link1")
const box1 = document.querySelector(".downloadBox1")
// link1.addEventListener('mouseover', ()=>{
//     box1.style.display = 'block';
// })
// link1.addEventListener('mouseout', ()=>{
//     box1.style.display = 'none';
// })

// 1번 과제
// 호버링이 변경시 애니메이션을 이용하여 이동을 매끄럽게 표현, 메뉴 전체의 호버링이 종료시 바를 비활성화
// 2번 과제
// 호버링시 display:none이었던 회색박스를 absolute로 부모의 자리에서 나오게 할려함
// 안됨 -> 이유: 부모의 text상자 안에서 절대좌표를 조종하는 것이기에 했는데...? 뭔가 안맞았음.왜?
// display의 스타일을 absolute해버렸음... block으로 바꾸니 잘 작동함