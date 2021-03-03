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
if (typeof pbjs !== "undefined") {
    var allBids = fetchAllBids(pbjs);
    var dataElement = document.createElement("div");
    dataElement.id = "visualise-rtb-data";
    dataElement.setAttribute("data-bids", JSON.stringify(allBids));
    document.body.appendChild(dataElement);
}
`;

function clearScript() : void {
    const currentScript = document.getElementById("visualise-rtb-script");
    if (currentScript) {
        currentScript.remove();
    }
    const currentData = document.getElementById("visualise-rtb-data");
    if (currentData) {
        currentData.remove();
    }
}

function createScriptElement() : HTMLScriptElement {
    clearScript();
    const scriptElement = document.createElement("script");
    scriptElement.id = "visualise-rtb-script";
    scriptElement.innerHTML = domScript;
    return scriptElement;
}

const script = createScriptElement();
document.head.appendChild(script);

const allBids = JSON.parse(document.getElementById("visualise-rtb-data").dataset.bids);
chrome.runtime.sendMessage({allBids: allBids});
