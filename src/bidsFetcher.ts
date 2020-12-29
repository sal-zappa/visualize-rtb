import { flattenBids } from "./bidsFlattener";

export function fetchAllBids(p: typeof pbjs) {
    const winningBids = p.getAllWinningBids(); // TODO pbjs should be injected
    for (const winningBid of winningBids) {
        winningBid.winner = true;
    }
    const respondedBids = flattenBids(p.getBidResponses());
    const unrespondedBids = flattenBids(p.getNoBids());

    return [...winningBids, ...respondedBids, ...unrespondedBids];
}
