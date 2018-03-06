function loopSleep(_loopLimit,_interval, _mainFunc){
  var loopLimit = _loopLimit;
  var interval = _interval;
  var mainFunc = _mainFunc;
  var i = 0;
  var loopFunc = function () {
    var result = mainFunc(i);
    if (result === false) {
      // break機能
      return;
    }
    i = i + 1;
    if (i < loopLimit) {
      setTimeout(loopFunc, interval);
    }
  };
  loopFunc();
}

if(!document.evaluate('//*[@id="next_recommendations"]',document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength)
{
}else{
    loopSleep(10, 150, function(i){
  document.getElementById("next_recommendations").click();
});}
