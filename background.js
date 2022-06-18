/**
 * Detect when a user loads page from URL bar using Enter
 * or when user clicks reload button
 */
chrome.webNavigation.onCommitted.addListener((details) => {
  const navChangePayload = new NavgiationChange(details)
  // User loaded page by hitting return in the address bar: 
  if (details.transitionQualifiers.includes("from_address_bar")) {
    console.log('loaded from address bar')
    // do stuff with navChangePayload
    return
  }

  // User reloaded the page with reload button or hotkey
  if (details.transitionType === 'reload') {
    console.log('page was reloaded')
    // do stuff with navChangePayload
    return
  }
})

/** If the history API is used to modify the state of a frame 
 * (e.g. using history.pushState(), a onHistoryStateUpdated event is fired. 
 * This includes back and forward buttons
 * */

chrome.webNavigation.onHistoryStateUpdated.addListener(async function (details) {
  const navChangePayload = new NavgiationChange(details)

  // Send Message to ContentScript stating navigation change
  // {... send message code ... }


  // Inject a content script if you want: 
  // https://developer.chrome.com/docs/extensions/reference/scripting/#method-executeScript
  // chrome.tabs.executeScript(null, { file: "contentscript.js" });

  // Back or forward button used
  if (details.transitionQualifiers.includes('forward_back')) {
    console.log('forward or back btn used')
  }
});


/**
 * Class to wrap the navigation changes before sending to other parts of the app
 * This makes it easier to maintain this aspect of the extension
 */
class NavgiationChange {
  constructor(details) {
    const { url, transitionType, transitionQualifiers } = details
    this.url = url
    this.transitionType = transitionType
    this.transitionQualifiers = transitionQualifiers
  }

  getURL() {
    return this.url
  }
}