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
