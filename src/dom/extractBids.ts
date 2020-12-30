function fetchAllBids(p: typeof pbjs) {
    const winningBids = p.getAllWinningBids();
    for (const winningBid of winningBids) {
        winningBid.winner = true;
    }
    const respondedBids = flattenBids(p.getBidResponses());
    const unrespondedBids = flattenBids(p.getNoBids());

    return [...winningBids, ...respondedBids, ...unrespondedBids];
}

function flattenBids(bidsByAdUnit: BidsByAdUnit): Bid[] {
    return Object.values(bidsByAdUnit).map(x => x.bids).flat();
}
