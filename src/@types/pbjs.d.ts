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
    [adUnitCode: string]: Bid
}

interface RespondedBidsByAdUnit {
    [adUnitCode: string]: RespondedBid
}

declare namespace pbjs {
    function getAllWinningBids(): RespondedBid[]; // TODO verify return type by testing
    function getBidResponses(): BidsByAdUnit;
    function getNoBids(): RespondedBidsByAdUnit;
}