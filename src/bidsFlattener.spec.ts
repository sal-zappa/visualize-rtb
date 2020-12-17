import { flattenBids } from "./bidsFlattener";

describe("flattenBids()", () => {
    it("should return one bid", () => {
        const bids: BidsByAdUnit = {
            'x': {
                adId: 'adId',
                adUnitCode: 'adUnitCode',
                bidder: 'bidder'
            }
        };
        const flattenedBids = flattenBids(bids);
        expect(flattenedBids.length).toBe(1);
    });
});
