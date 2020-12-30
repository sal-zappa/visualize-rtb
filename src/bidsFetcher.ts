import { flattenBids } from "./bidsFlattener";

export function fetchAllBids(p: typeof pbjs) {
    const winningBids = p.getAllWinningBids();
    for (const winningBid of winningBids) {
        winningBid.winner = true;
    }
    const respondedBids = flattenBids(p.getBidResponses());
    const unrespondedBids = flattenBids(p.getNoBids());

    return [...winningBids, ...respondedBids, ...unrespondedBids];
}
