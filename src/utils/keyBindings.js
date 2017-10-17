import runCode from './runCode';
import { nextExample, previousExample } from './navigation';

var map = [];
export default onkeydown = onkeyup = function(e) {
    e = e || window.event;
    map[e.keyCode] = e.type == 'keydown';
    if (map[17] && map[13]) { // Ctrl + Enter
        runCode();
    } else if (map[17] && map[190] && map[16]) { // Ctrl + Shift + >
        nextExample();
    } else if (map[17] && map[188] && map[16]) { // Ctrl + Shift + <
        previousExample();
    }

}
