chrome.tabs.executeScript({
    file: "execute.js"
});

chrome.runtime.onMessage.addListener(
    function (request, sender) {
        const allBids = request.allBids;
        const bidsWithPrice = allBids.filter((bid) => typeof bid.cpm !== "undefined");
        const table = renderTable(bidsWithPrice);
        document.getElementById("message").innerText = "";
        document.body.appendChild(table);
    }
);

function formatData(data) {
    return (typeof data !== "undefined") ? data : "";
}

function formatPrice(cpm, currency) {
    if (typeof cpm !== "undefined") {
        return cpm.toLocaleString(undefined, {
            style: 'currency', currency: currency
        });
    }
    return "";
}

function renderTable(bids) {
    const table = document.createElement("table"); 
    let html = `
        <tr>
            <th>adUnitCode</th>
            <th>adId</th>
            <th>bidder</th>
            <th>CPM</th>
            <th>statusMessage</th>
            <th>winner</th>
        </tr>`;
    for (const bid of bids) {
        html += `
            <tr>
                <td>${formatData(bid.adUnitCode)}</td>
                <td>${formatData(bid.adId)}</td>
                <td>${formatData(bid.bidder)}</td>
                <td>${formatPrice(bid.cpm, bid.currency)}</td>
                <td>${formatData(bid.statusMessage)}</td>
                <td>${((typeof bid.timeToRespond !== "undefined") ? "yes" : "no")}</td>
            </tr>`;
    }
    table.innerHTML = html;
    return table;
}
