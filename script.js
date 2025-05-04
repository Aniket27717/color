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
let min_1 = document.querySelector(".min-1");
let min_2 = document.querySelector(".min-2");
let sec_1 = document.querySelector(".sec-1");
let sec_2 = document.querySelector(".sec-2");
let cong = document.querySelector(".cong");

const cycleSeconds = 30;

// Fixed universal start time (adjust if needed)
const globalStart = new Date("2025-01-01T00:00:00Z").getTime();

function updateTimer() {
  const now = Date.now();
  const elapsed = Math.floor((now - globalStart) / 1000);
  const timeLeft = cycleSeconds - (elapsed % cycleSeconds);

  // Show result when timer resets
  if (timeLeft === cycleSeconds) {
    cong.style.display = "flex";

    let sbResult = document.querySelector(".sb-result");
    let res = ["Small", "Big"];
    sbResult.textContent = res[Math.floor(Math.random() * res.length)];

    let g_v_r_color = document.querySelector(".g-v-r-color");
    let colors = ["Green", "Violet", "Red"];
    g_v_r_color.textContent = colors[Math.floor(Math.random() * colors.length)];

    let number_result = document.querySelector(".number-result");
    let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    number_result.textContent = digits[Math.floor(Math.random() * digits.length)];
  }

  // Format the timer digits
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let minStr = String(minutes).padStart(2, "0");
  let secStr = String(seconds).padStart(2, "0");

  min_1.textContent = minStr[0];
  min_2.textContent = minStr[1];
  sec_1.textContent = secStr[0];
  sec_2.textContent = secStr[1];
}

// Update every half second
setInterval(updateTimer, 500);
updateTimer();

// Close popup
document.querySelectorAll(".cong-3").forEach((btn) => {
  btn.addEventListener("click", () => {
    cong.style.display = "none";
  });
});
