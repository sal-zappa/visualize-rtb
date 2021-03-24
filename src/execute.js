domScript = `
function fetchAllBids(pbjs) {
    const winningBids = pbjs.getAllWinningBids();
    for (const winningBid of winningBids) {
        winningBid.winner = true;
    }
    const respondedBids = flattenBids(pbjs.getBidResponses());
    const unrespondedBids = flattenBids(pbjs.getNoBids());

    return [...winningBids, ...respondedBids, ...unrespondedBids];
}

function flattenBids(bidsByAdUnit) {
    return Object.values(bidsByAdUnit).map(x => x.bids).flat();
}

if (typeof pbjs !== "undefined") {
    const allBids = fetchAllBids(pbjs);
    const dataElement = document.createElement("div");
    dataElement.id = "visualise-rtb-data";
    dataElement.setAttribute("data-bids", JSON.stringify(allBids));
    document.body.appendChild(dataElement);
}
`;

function clearScript() {
    const currentScript = document.getElementById("visualise-rtb-script");
    if (currentScript) {
        currentScript.remove();
    }
    const currentData = document.getElementById("visualise-rtb-data");
    if (currentData) {
        currentData.remove();
    }
}

function createScriptElement() {
    clearScript();
    const scriptElement = document.createElement("script");
    scriptElement.id = "visualise-rtb-script";
    scriptElement.innerHTML = domScript;
    return scriptElement;
}

script = createScriptElement();
document.head.appendChild(script);

allBids = JSON.parse(document.getElementById("visualise-rtb-data").dataset.bids);
chrome.runtime.sendMessage({allBids: allBids});
