var url = "https://all-access.wax.io/cloud-wallet/login/"
var url2 = "https://all-access.wax.io/cloud-wallet/signing/"
var urlScript = "https://fwscript.qtradingtheory.com/";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

chrome.runtime.onConnect.addListener(() => {
  setInterval(function(){
  chrome.tabs.query({},function(tabs){     
    tabs.forEach(async function(tab){
		var tabId = tab.id;
		var tabUrl = tab.url;
		if (tabUrl == urlScript)
			var tabIdScript = tabId;
		else if (tabUrl == url || tabUrl == url2 ) {
			console.log(tabUrl);
			console.log("Timer 10sec");
			await sleep(10000);
			chrome.tabs.remove(tabId); 
			chrome.tabs.reload(tabIdScript);
			console.log("Done");
		}
    });
  });
  console.log("Cycle done");
 }, 10000)
});