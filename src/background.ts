import { fetchAllBids } from "./bidsFetcher";


chrome.browserAction.onClicked.addListener(function (tab) {
    // if (typeof pbjs !== "undefined") {
    //     console.log(fetchAllBids(pbjs));
    // }

    chrome.tabs.executeScript({
        file: "inject.js"
    });
});
