## Background Scripts
Ideas I've found helpful when writing background scripts in Chrome Extensions
### Detecting Browser Navigation
If you are using a background script, the preferred method for detecting web navigation is the `chrome.webNavigation`(https://developer.chrome.com/docs/extensions/reference/webNavigation) API. You could also use `chrome.tabs.onUpdated` to check wether the URL bar has changed in the tab, but you'll be missing out on all the great methods and events provided by `webNavigation`.
### Signalling page loads and navigation from background to other parts of the extension
Using `chrome.webNavigation`
Instead of trying to contain all the content script logic and background task logic in the background process (service worker), what if we simply detect the page navigation changes and then send a message to the content script so that it can act accordingly. 

So we create one universal object that is sent whenever a desired navigation event is fired and then we can handle that as needed in the content script.

We can extend the object as we go if need be (say we want more meta data off the event or something for a particular content script feature, just add that to the message, but this wont break any existing code)




