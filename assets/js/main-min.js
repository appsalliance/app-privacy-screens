/*
 Copyright (c) 2014 Intuit, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */
var isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}};
function loadConfiguration(){var d=$.Deferred();$.getJSON("assets/config.json").then(function(a){var b=$(".main"),c;a.pageOptions&&(b.find(".headerImage").css("background-image","url("+a.pageOptions.headerImage+")"),b.find(".header").css("background-color",a.pageOptions.headerColor),b.find(".headline").html(a.pageOptions.headline),b.find(".privacyMessage").html(a.pageOptions.subHeading),b.find("#footerLink").text(a.pageOptions.footerLink).attr("href",a.pageOptions.footerLinkURL),b.find("#dataCollectedLink").text(a.pageOptions.collectionSectionHeader),
    b.find("#dataSharedLink").text(a.pageOptions.sharedSectionHeader),b.find("#notCollectedHeader").text(a.pageOptions.doNotCollectSectionHeader),b.find("#notSharedHeader").text(a.pageOptions.dataNotSharedSectionHeader));a.collected&&(c=b.find("#collectedItemsWrapper").empty(),$.each(a.collected,function(a,b){createItemSection(b,c)}));a.notCollected&&(c=b.find("#notCollectedItemsWrapper").empty(),$.each(a.notCollected,function(a,b){createItemSection(b,c)}));a.shared&&(c=b.find("#sharedItemsWrapper").empty(),
    $.each(a.shared,function(a,b){createItemSection(b,c)}));a.notShared&&(c=b.find("#notSharedItemsWrapper").empty(),$.each(a.notShared,function(a,b){createItemSection(b,c)}));d.resolve()},function(a){console.log("Unable to the configuration file.  Error: "+a.statusText);d.reject()});return d}
function createItemSection(d,a){var b=$("<div class='contentItem'></div>"),c;c=""+("<p class='itemHeader'>"+d.element+"</p>");c+="<p class='itemDescription'>"+d.why+"</p>";c=c+"<a class='itemDetailToggleLink' href='javascript:;'></a>"+("<p class='itemDetails'>"+d.moreInfo+"</p>");a.append(b.append(c))};