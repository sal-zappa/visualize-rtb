import { flattenBids } from "./bidsFlattener";

const winningBids = pbjs.getAllWinningBids();

const bidResponsesByAdUnit = pbjs.getBidResponses();
const respondedBids = flattenBids(bidResponsesByAdUnit);

const noBidsByAdUnit = pbjs.getNoBids();
const unrespondedBids = flattenBids(noBidsByAdUnit);

const allBids = [...winningBids, ...respondedBids, ...unrespondedBids];
