import { fetchAllBids } from "./bidsFetcher";


chrome.browserAction.onClicked.addListener(function (tab) {
    // if (typeof pbjs !== "undefined") {
    //     console.log(fetchAllBids(pbjs));
    // }

    chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor="red"'
    });
});
