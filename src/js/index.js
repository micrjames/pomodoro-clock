import { getBtn, toggleTimer, timerBtnText } from "./timerBtn.js";
import { setBack, setFwd, getControl } from "./modeControls.js";

const timerBtn = getBtn("#timer-btn");

timerBtn.innerText = `${timerBtnText} Timer`;
timerBtn.addEventListener('click', toggleTimer); 

const backControl = getControl("#timer-mode-text-left");
const fwdControl = getControl("#timer-mode-text-right");

backControl.addEventListener('click', setBack);
fwdControl.addEventListener('click', setFwd); 
