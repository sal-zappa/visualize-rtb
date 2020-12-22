export function flattenBids(bidsByAdUnit: BidsByAdUnit | RespondedBidsByAdUnit): Bid[] {
    return Object.values(bidsByAdUnit).map(x => x.bids).flat();
}
