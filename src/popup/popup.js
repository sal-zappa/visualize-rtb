chrome.tabs.executeScript({
    file: "execute.js"
});

chrome.runtime.onMessage.addListener(
    function (request, sender) {
        var bids = request.allBids;
        var table = renderTable(bids);
        document.body.appendChild(table);
    }
);

function formatData(data) {
    return (typeof data !== "undefined") ? data : "";
}

function renderTable(bids) {
    var table = document.createElement("table"); 
    var html = "" +
        "<tr>" +
            "<th>adUnitCode</th>" +
            "<th>adId</th>" +
            "<th>bidder</th>" +
            "<th>timeToRespond</th>" +
            "<th>cpm</th>" +
            "<th>statusMessage</th>" +
            "<th>winner</th>" +
        "</tr>";
    for (var i = 0; i < bids.length; i++) {
        html += "" +
            "<tr>" +
                "<td>" + formatData(bids[i].adUnitCode) + "</td>" +
                "<td>" + formatData(bids[i].adId) + "</td>" +
                "<td>" + formatData(bids[i].bidder) + "</td>" +
                "<td>" + formatData(bids[i].timeToRespond) + "</td>" +
                "<td>" + formatData(bids[i].cpm) + "</td>" +
                "<td>" + formatData(bids[i].statusMessage) + "</td>" +
                "<td>" + ((typeof bids[i].timeToRespond !== "undefined") ? "yes" : "no") + "</td>" +
            "</tr>";
    }
    table.innerHTML = html;
    return table;
}
