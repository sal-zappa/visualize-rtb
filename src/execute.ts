/*
    This script is executed when the extension icon is clicked
*/
const domScript = `
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function fetchAllBids(library) {
    var winningBids = library.getAllWinningBids();
    for (var _i = 0, winningBids_1 = winningBids; _i < winningBids_1.length; _i++) {
        var winningBid = winningBids_1[_i];
        winningBid.winner = true;
    }
    var respondedBids = flattenBids(library.getBidResponses());
    var unrespondedBids = flattenBids(library.getNoBids());
    return __spreadArrays(winningBids, respondedBids, unrespondedBids);
}
function flattenBids(bidsByAdUnit) {
    return Object.values(bidsByAdUnit).map(function (x) { return x.bids; }).flat();
}
function filterAttributes(bids) {
    return bids.map(function (bid) {
        return {
            adUnitCode: bid.adUnitCode,
            adId: bid.adId,
            bidder: bid.bidder,
            timeToRespond: bid.timeToRespond,
            cpm: bid.cpm,
            statusMessage: bid.statusMessage,
            winner: bid.winner
        };
    });
}
if (typeof pbjs !== "undefined") {
    var allBids = fetchAllBids(pbjs);
    var dataElement = document.createElement("div");
    dataElement.id = "visualise-rtb-data";
    dataElement.setAttribute("data-bids", JSON.stringify(allBids));
    document.body.appendChild(dataElement);
}
`;

function createScriptElement() : HTMLScriptElement {
    const scriptElement = document.createElement("script");
    scriptElement.innerHTML = domScript;
    return scriptElement;
}
const script = createScriptElement();
document.head.appendChild(script);

console.log(document.getElementById("header-wrap"));
// TODO fetch data from DOM and send it to extension popup
chrome.runtime.sendMessage({greeting: "hello"});
