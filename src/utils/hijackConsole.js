export default (function() {
    var oldLog = console.log;
    console.log = function (message) {
        if (!message.includes('[HMR]')) {
            output.innerHTML += `<p class="sidebar--output--messages--message">${typeof message !== 'string' ? JSON.stringify(message) : message}</p>`;
            oldLog.apply(console, arguments);
        }
    };
})();;
