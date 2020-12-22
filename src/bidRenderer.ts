function renderBid(bid: Bid): string {
    return `
        <tr>
            <td>${bid.adUnitCode}</td>
            <td>${bid.adId}</td>
            <td>${bid.bidder}</td>
            <td>${bid.timeToRespond || ""}</td>
            <td>${bid.cpm || ""}</td>
            <td>${bid.statusMessage || ""}</td>
            <td>${bid.winner ? "Yes" : "No"}</td>
        </tr>
    `;
}

function renderBids(bids: Bid[]): string[] {
    return bids.map(bid => renderBid(bid));
}


export function renderTable(bids: Bid[]): string {
    return `
        <table>
            <tr>
                <th>Ad unit</th>
                <th>Ad id</th>
                <th>Bidder</th>
                <th>Time to respond</th>
                <th>Cpm</th>
                <th>Status message</th>
                <th>Rendered</th>
            </tr>
            ${renderBids(bids).join("")}
        </table>
    `;
}
