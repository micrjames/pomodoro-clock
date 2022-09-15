import { timeLeft, modeText, modeTextValuesTimes } from "./modeControls.js";

const getBtn = function(selector) {
   return document.querySelector(selector);                           
};

let timerRunning = false;
let timerBtnText = "Start";

const backControl = document.querySelector("#timer-mode-text-left");
const fwdControl = document.querySelector("#timer-mode-text-right");

const timerBtn = document.querySelector("#timer-btn");

let timeRemaining;
let minsRemaining;
let secsRemaining;
let minsRemainingNum;
let secsRemainingNum;
let mins_placeholderNum = "";
let secs_placeholderNum = "";
let intervalID;
const toggleTimer = function() {
   timeRemaining = timeLeft.innerText;
   minsRemaining = timeRemaining.substring(0, 2);
   secsRemaining = timeRemaining.substring(3, 5);
   minsRemainingNum = +minsRemaining;
   secsRemainingNum = +secsRemaining;

   if(timerRunning) {
	  timerBtnText = "Start";
	  backControl.classList.remove("hidden");
	  fwdControl.classList.remove("hidden");

	  clearInterval(intervalID);
   } else {
	  timerBtnText = "Stop";
	  backControl.classList.add("hidden");
	  fwdControl.classList.add("hidden");

	  intervalID = setInterval(() => {
		 secsRemainingNum--;
		 if(secsRemainingNum < 0) {
			minsRemainingNum--;
			secsRemainingNum = 59;
		 }
		 if(minsRemainingNum < 10) {
			mins_placeholderNum = "0";

			if(minsRemainingNum < 0) {
			   minsRemainingNum = 0;
			   secsRemainingNum = 0;

			   // Reset the timer
			   timerBtnText = "Start";
			   timerRunning = false;
			   timerBtn.innerText = `${timerBtnText} Timer`;                     
			   backControl.classList.remove("hidden");
			   fwdControl.classList.remove("hidden");

			   timeLeft.innerText = modeTextValuesTimes[modeText.innerText];
			   clearInterval(intervalID);
			   return;
			}
		 } else {
			mins_placeholderNum = "";
		 }
		 if(secsRemainingNum < 10) {
			secs_placeholderNum = "0";
		 } else {
			secs_placeholderNum = "";
		 }
		 timeLeft.innerText = `${mins_placeholderNum}${minsRemainingNum}:${secs_placeholderNum}${secsRemainingNum}`;
	  }, 1000);
   }
   this.innerText = `${timerBtnText} Timer`;                     
   timerRunning = !timerRunning;            
}; 

export { getBtn, toggleTimer, timerBtnText };
