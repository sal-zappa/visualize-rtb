(function () {
  function forEach(responses, cb) {
    Object.keys(responses).forEach(function (adUnitCode) {
      const response = responses[adUnitCode];
      response.bids.forEach(function (bid) {
        cb(adUnitCode, bid);
      });
    });
  }
  const winners = pbjs.getAllWinningBids();
  const output = [];
  forEach(pbjs.getBidResponses(), function (code, bid) {
    output.push({
      bid: bid,
      adunit: code,
      adId: bid.adId,
      bidder: bid.bidder,
      time: bid.timeToRespond,
      cpm: bid.cpm,
      msg: bid.statusMessage,
      rendered: !!winners.find(function (winner) {
        return winner.adId == bid.adId;
      })
    });
  });
  forEach(pbjs.getNoBids && pbjs.getNoBids() || {}, function (code, bid) {
    output.push({
      msg: "no bid",
      adunit: code,
      adId: bid.bidId,
      bidder: bid.bidder
    });
  });
  if (output.length) {
    if (console.table) {
      console.table(output);
    } else {
      for (var j = 0; j < output.length; j++) {
        console.log(output[j]);
      }
    }
  } else {
    console.warn('NO prebid responses');
  }
})();