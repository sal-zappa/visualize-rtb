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
                bids: [
                    {
                        adId: 'adId',
                        adUnitCode: 'x',
                        bidder: 'bidder'
                    }
                ]
            },
            "y": {
                bids: [
                    {
                        adId: 'adId2',
                        adUnitCode: 'y',
                        bidder: 'bidder2'
                    },
                    {
                        adId: 'adId3',
                        adUnitCode: 'y',
                        bidder: 'bidder3'
                    }
                ]
            }
        };
        const flattenedBids = flattenBids(bids);
        expect(flattenedBids.length).toBe(3);
    });
});
