chrome.webNavigation.onCommitted.addListener((details) => {
  // User loaded page by hitting return in the address bar: 
  if (details.transitionQualifiers.includes("from_address_bar")) {
    console.log('load from address bar')
    return
  }
  // User reloaded the page with reload button or hotkey
  if (details.transitionType === 'reload') {
    console.log('reload page')
  }
  console.log('webNav onCommitted', details)
}
)

/** If the history API is used to modify the state of a frame 
 * (e.g. using history.pushState(), a onHistoryStateUpdated event is fired. 
 * This includes back and forward buttons
 * */

chrome.webNavigation.onHistoryStateUpdated.addListener(function (details) {
  // Inject a content script: 
  // chrome.tabs.executeScript(null, { file: "contentscript.js" });

  // Back or forward button used
  if (details.transitionQualifiers.includes('forward_back')) {
    console.log('forward or back btn used')
  }

  console.log('onHistoryStateUpdated', details)
});

// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//   // console.log('this is the tab', tab)

//   if (changeInfo.url) {
//     if (changeInfo.url === 'https://www.youtube.com/feed/library') {
//       console.log('this is the library page')
//     } else (
//       console.log('url is', changeInfo.url)
//     )
//   }
// });


// chrome.tabs.onActivated.addListener(function () {
//   chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
//     var currentURL = tabs[0].url;
//     console.log(currentURL);
//   })
// });