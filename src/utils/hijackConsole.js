export default (function() {
    var oldLog = console.log;
    console.log = function (message) {
        output.innerHTML += `<p class="sidebar--output--messages--message">${typeof message !== 'string' ? JSON.stringify(message) : message}</p>`;
        oldLog.apply(console, arguments);
    };
})();;
