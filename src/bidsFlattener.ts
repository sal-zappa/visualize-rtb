export function flattenBids(bidsByAdUnit: BidsByAdUnit): Bid[] {
    return Object.values(bidsByAdUnit).map(x => x.bids).flat();
}
