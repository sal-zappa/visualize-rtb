function fetchAllBids(library: typeof pbjs) {
    const winningBids = library.getAllWinningBids();
    for (const winningBid of winningBids) {
        winningBid.winner = true;
    }
    const respondedBids = flattenBids(library.getBidResponses());
    const unrespondedBids = flattenBids(library.getNoBids());

    return [...winningBids, ...respondedBids, ...unrespondedBids];
}

function flattenBids(bidsByAdUnit: BidsByAdUnit): Bid[] {
    return Object.values(bidsByAdUnit).map(x => x.bids).flat();
}

function filterAttributes(bids: Bid[]): Bid[] {
    return bids.map((bid) => {
        return {
            adUnitCode: bid.adUnitCode,
            adId: bid.adId,
            bidder: bid.bidder,
            timeToRespond: bid.timeToRespond,
            cpm: bid.cpm,
            statusMessage: bid.statusMessage,
            winner: bid.winner
        }
    })
}
if (typeof pbjs !== "undefined") {
    const allBids = fetchAllBids(pbjs);
    const dataElement = document.createElement("div");
    dataElement.id = "visualise-rtb-data";
    dataElement.setAttribute("data-bids", JSON.stringify(allBids));
    document.body.appendChild(dataElement);
    console.log("data appended");
}
