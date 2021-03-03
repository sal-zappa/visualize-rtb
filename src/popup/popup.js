chrome.tabs.executeScript({
    file: "execute.js"
});

chrome.runtime.onMessage.addListener(
    function (request, sender) {
        const bids = request.allBids;
        const table = renderTable(bids);
        document.body.appendChild(table);
    }
);

function formatData(data) {
    return (typeof data !== "undefined") ? data : "";
}

function formatPrice(price, currency) {
    if (typeof price !== "undefined") {
        return price.toLocaleString(undefined, {
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
            <th>timeToRespond</th>
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
                <td>${formatData(bid.timeToRespond)}</td>
                <td>${formatPrice(bid.cpm, bid.currency)}</td>
                <td>${formatData(bid.statusMessage)}</td>
                <td>${((typeof bid.timeToRespond !== "undefined") ? "yes" : "no")}</td>
            </tr>`;
    }
    table.innerHTML = html;
    return table;
}
