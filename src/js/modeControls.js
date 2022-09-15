const modeTextValues = ["Pomodoro", "Long Break", "Short Break"];
const modeTextValuesTimes = {
   [modeTextValues[0]]: "25:00",
   [modeTextValues[1]]: "15:00",
   [modeTextValues[2]]: "5:00"
};
let modeTextValueIndex = 0;

const timeLeft = document.querySelector("#time-left");
timeLeft.innerText = modeTextValuesTimes.Pomodoro; 
 
const modeText = document.querySelector("#time-mode-text-value");
modeText.innerText = modeTextValues[modeTextValueIndex];

const getControl = function(selector) {
   return document.querySelector(selector);
};

const setBack = function() {
   if(modeTextValueIndex === 0)
   modeTextValueIndex = modeTextValues.length - 1;
   else modeTextValueIndex--;
   const modeTextValue = modeTextValues[modeTextValueIndex];
   modeText.innerText = modeTextValue;
   timeLeft.innerText = modeTextValuesTimes[modeTextValue];
};

const setFwd = function() {
	if(modeTextValueIndex < modeTextValues.length - 1) modeTextValueIndex++;
   else modeTextValueIndex = 0;
   const modeTextValue = modeTextValues[modeTextValueIndex];
   modeText.innerText = modeTextValue;
   timeLeft.innerText = modeTextValuesTimes[modeTextValue];
};
export { setBack, setFwd, getControl };
