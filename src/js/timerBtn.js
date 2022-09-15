const getBtn = function(selector) {
   return document.querySelector(selector);                           
};

let timerRunning = false;
let timerBtnText = "Start";

const toggleTimer = function() {
   timerRunning ? timerBtnText = "Start" : timerBtnText = "Stop"
   this.innerText = `${timerBtnText} Timer`;                     
   timerRunning = !timerRunning;            
}; 

export { getBtn, toggleTimer, timerBtnText };
