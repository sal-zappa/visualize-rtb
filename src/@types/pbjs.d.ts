interface Bid {
    adUnitCode: string;
    adId: string;
    bidder: string;
}

interface RespondedBid extends Bid {
    timeToRespond: number;
    cpm: number;
    statusMessage: string;
}

interface BidsByAdUnit {
    [adUnitCode: string]: {bids: Bid[] | RespondedBid[]}
}

interface RespondedBidsByAdUnit {
    [adUnitCode: string]: {bids: RespondedBid[]}
}

declare namespace pbjs {
    function getAllWinningBids(): RespondedBid[]; // TODO verify return type by testing
    function getBidResponses(): RespondedBidsByAdUnit;
    function getNoBids(): BidsByAdUnit;
}
