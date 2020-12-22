import { flattenBids } from "./bidsFlattener";

export function fetchAllBids() {
    const winningBids = pbjs.getAllWinningBids();
    const respondedBids = flattenBids(pbjs.getBidResponses());
    const unrespondedBids = flattenBids(pbjs.getNoBids());

    return [...winningBids, ...respondedBids, ...unrespondedBids];
}
