// chrome.webNavigation.onCompleted.addListener((details) => {
//     console.log('details from background listener', details)
//   }
// )

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // console.log('this is the tab', tab)

  if (changeInfo.url) {
    if (changeInfo.url === 'https://www.youtube.com/feed/library') {
      console.log('this is the library page')
    } else (
      console.log('url is', changeInfo.url)
    )
  }
});


// chrome.tabs.onActivated.addListener(function () {
//   chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
//     var currentURL = tabs[0].url;
//     console.log(currentURL);
//   })
// });