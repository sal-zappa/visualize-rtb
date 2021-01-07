chrome.tabs.executeScript({
    file: "execute.js"
});

chrome.runtime.onMessage.addListener(
    function (request, sender) {
        // TODO render table with data
        console.log(request);
        console.log(sender);
    }
);
