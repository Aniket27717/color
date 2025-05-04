 const btn = document.querySelector(".service");

  let offsetX = 0, offsetY = 0;

  btn.addEventListener('touchstart', function(e) {
    const touch = e.touches[0];
    const rect = btn.getBoundingClientRect();
    offsetX = touch.clientX - rect.left;
    offsetY = touch.clientY - rect.top;
  });

  btn.addEventListener('touchmove', function(e) {
    e.preventDefault();
    const touch = e.touches[0];
    btn.style.left = (touch.clientX - offsetX) + 'px';
    btn.style.top = (touch.clientY - offsetY) + 'px';
  });


//timer 

let min_1 = document.querySelector(".min-1")
let min_2 = document.querySelector(".min-2")
let sec_1 = document.querySelector(".sec-1")
let sec_2 = document.querySelector(".sec-2")

let targetTime = 30;

let cong = document.querySelector(".cong");
  
  


function inputText(time){
  
  let min1 = Math.floor(time/60);
  let sec1 = time % 60;
  let minute = String(min1).padStart(2,"0")
  let second = String(sec1).padStart(2,"0")

  
   min_1.textContent=minute[0]
   min_2.textContent=minute[1]
   sec_1.textContent=second[0]
   sec_2.textContent=second[1]
}

  inputText(targetTime);




let timer = setInterval(()=>{
  inputText(targetTime);
  targetTime-- ;
  if(targetTime == 0){
    targetTime = 30;
    cong.style.display = "flex";
    
 let sbResult = document.querySelector(".sb-result");
  
    let res = ["Small","Big"]
    let result = res[Math.floor(Math.random()*res.length)]
    sbResult.textContent = result;

let g_v_r_color = document.querySelector(".g-v-r-color");
  
    let color = ["Green","Violet","Red"];
    let colorResult = color[Math.floor(Math.random()*color.length)]
   
    g_v_r_color.textContent = colorResult;

let number_result = document.querySelector(".number-result");

    let number_1_9 = ["0","1","2","3","4","5","6","7","8","9"];
    let resultNum = number_1_9[Math.floor(Math.random()*number_1_9.length)];

    number_result.textContent = resultNum;
    
  
  }
},1000)

//Result




//congratulations 
let congButton = document.querySelectorAll(".cong-3");

  
congButton.forEach((btn)=>{
  btn.addEventListener("click",()=>{
  cong.style.display = "none";
});
})
