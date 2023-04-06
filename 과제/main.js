const bubbleBtn = document.querySelector('.bubbleBtn');
const dontTouchBtn = document.querySelector('.dontTouchBtn');
bubbleBtn.addEventListener('click', (event)=>{
    event.stopPropagation();
    window.alert("버블-버블");
})

dontTouchBtn.addEventListener('click', ()=>{
    let response = window.confirm("정말 누르시겠습니까?");
    if (response){
        alert("펑!");
    }
})

let currentLight = 1;
const trafficLight = document.querySelector('.traffic_light');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');

function changeLight() {
	switch (currentLight) {
		case 0:
            setTimeout(() => {
                green.style.opacity = 0.2;
                yellow.style.opacity = 0.2;
                currentLight = 1;
            }, 200);
            red.style.opacity = 0.2;
            yellow.style.opacity = 1;
            setTimeout(() => {
                green.style.opacity = 1;
            }, 200);
            break;
		case 1:
            setTimeout(() => {
                yellow.style.opacity = 0.2;
                red.style.opacity = 0.2;
                currentLight = 0;
            }, 200);
            yellow.style.opacity = 1;
            green.style.opacity = 0.2;
            setTimeout(() => {
                red.style.opacity = 1;
                }, 200);    
			break;
		default:
			break;
	}
}

const nextpageBtn = document.querySelector(".nextpageBtn");

nextpageBtn.addEventListener('click', ()=>{
    window.scrollTo({ left: 1850, behavior: "smooth" });
})

let count = 1; 

function changeImage() {
    if (isClicked()){
        const slime = document.querySelector(".slimeAnime");
        count = count % 4 + 1;
        slime.style.backgroundImage = `url("./img/slime/슬라임${count}.png")`;
    }
}

setInterval(changeImage, 100);

const checkbox = document.querySelector('my_checkbox');


const backpageBtn = document.querySelector(".backpageBtn")

backpageBtn.addEventListener('click', ()=>{
    window.scrollTo({left: -1850, behavior: "smooth" })
})