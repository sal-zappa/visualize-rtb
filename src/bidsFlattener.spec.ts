import { flattenBids } from "./bidsFlattener";

describe("flattenBids()", () => {
    it("should return one bid", () => {
        const bids: BidsByAdUnit = {
            "x": {
                bids: [{
                    adId: 'adId',
                    adUnitCode: 'adUnitCode',
                    bidder: 'bidder'
                }]
            }
        };
        const flattenedBids = flattenBids(bids);
        expect(flattenedBids.length).toBe(1);
    });

    it("should return the flattened bid", () => {
        const bids: BidsByAdUnit = {
            "x": {
                bids: [{
                    adId: 'adId',
                    adUnitCode: 'adUnitCode',
                    bidder: 'bidder'
                }]
            }
        };
        const flattenedBids = flattenBids(bids);
        expect(flattenedBids[0]).toEqual({
            adId: 'adId',
            adUnitCode: 'adUnitCode',
            bidder: 'bidder'
        });
    });

    it("should return multiple bids from multiple keys", () => {
        const bids: BidsByAdUnit = {
            "x": {
                bids: [{
                    adId: 'adId',
                    adUnitCode: 'adUnitCode',
                    bidder: 'bidder'
                }]
            }
        };
        const flattenedBids = flattenBids(bids);
        expect(flattenedBids[0]).toEqual({
            adId: 'adId',
            adUnitCode: 'adUnitCode',
            bidder: 'bidder'
        });
    });

    // it should return more than one bid
});
