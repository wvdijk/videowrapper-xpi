var self = require('sdk/self');
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var clipboard = require("sdk/clipboard");

var button = buttons.ActionButton({
  id: "create-embed",
  label: "Videowrapper",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png",
    "48": "./icon-48.png",
    "128": "./icon-128.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  var url = tabs.activeTab.url;
 if (/^(.*\.)?youtube\./.test(url)) {
    var re = /(^(.*\.)?youtube\.com\/watch\?v=)(\w+)/;
    var videoId = url.replace(re, '$3');
    var embed = '<div class="videowrapper"><iframe width="100%" src="https://www.youtube.com/embed/' + videoId + '?rel=0" frameborder="0" allowfullscreen></iframe></div>';
    clipboard.set(embed);
  } else if (/vimeo\.com/.test(url)) {
    var re = /(https?:\/\/vimeo\.com\/)(\d+)/;
    var videoId = url.replace(re, '$2');
    var embed = '<div class="videowrapper"><iframe src="https://player.vimeo.com/video/' +videoId + '" width="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>';
    clipboard.set(embed);
  } else {
    console.log('Sorry, this site is not supported (yet)');
  }
}
