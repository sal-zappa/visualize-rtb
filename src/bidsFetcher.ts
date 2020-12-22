import { flattenBids } from "./bidsFlattener";

export function fetchAllBids() {
    const winningBids = pbjs.getAllWinningBids(); // TODO pbjs should be injected
    for (const winningBid of winningBids) {
        winningBid.winner = true;
    }
    const respondedBids = flattenBids(pbjs.getBidResponses());
    const unrespondedBids = flattenBids(pbjs.getNoBids());

    return [...winningBids, ...respondedBids, ...unrespondedBids];
}
