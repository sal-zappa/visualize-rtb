chrome.tabs.executeScript({
    file: "execute.js"
});

chrome.runtime.onMessage.addListener(
    function (request, sender) {
        // TODO render table with data
        var allBids = request.allBids;
        console.log(allBids);
    }
);
