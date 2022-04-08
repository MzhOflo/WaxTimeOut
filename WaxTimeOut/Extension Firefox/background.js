var url = "https://all-access.wax.io/cloud-wallet/login/"
var url2 = "https://all-access.wax.io/cloud-wallet/signing/"
var urlScript = "https://fwscript.qtradingtheory.com/";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

browser.runtime.onStartup.addListener(() => {
  setInterval(function(){
  browser.tabs.query({},function(tabs){     
    tabs.forEach(async function(tab){
		var tabId = tab.id;
		var tabUrl = tab.url;
		var tabIdScript;
		if (tabUrl == urlScript)
			tadIdScript = tabId;
		else if (tabUrl == url || tabUrl == url2 ) {
			console.log(tabUrl);
			console.log("Timer 10sec");
			await sleep(10000);
			browser.tabs.remove(tabId);
			browser.tabs.reload(tabIdScript);
			console.log("Done");
		}
    });
  });
  console.log("Cycle done");
 }, 10000)
});