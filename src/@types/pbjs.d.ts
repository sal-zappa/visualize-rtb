interface Bid {
    adUnitCode: string;
    adId: string;
    bidder: string;
    timeToRespond?: number;
    cpm?: number;
    statusMessage?: string;
}

interface BidsByAdUnit {
    [adUnitCode: string]: {bids: Bid[]}
}

declare namespace pbjs {
    function getAllWinningBids(): Bid[]; // TODO verify return type by testing
    function getBidResponses(): BidsByAdUnit;
    function getNoBids(): BidsByAdUnit;
}
