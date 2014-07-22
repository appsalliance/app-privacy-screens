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

var isMobile = {
    Android : function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry : function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS : function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera : function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows : function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any : function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() ||
                isMobile.Windows());
    }

};

function loadConfiguration () {

    var configPromise = $.Deferred();

    // Load the configuration json to be used to setup the page.
    $.getJSON("assets/config.json").then(
        // Success
        function (response) {
            var $mainContent = $(".main"), $wrapper;

            // Populate the general page content.
            if (response.pageOptions) {
                $mainContent.find(".headerImage").css("background-image", "url(" +
                                                                          response.pageOptions.headerImage +
                                                                          ")");
                $mainContent.find(".header").css("background-color", response.pageOptions.headerColor);
                $mainContent.find(".headline").html(response.pageOptions.headline);
                $mainContent.find(".privacyMessage").html(response.pageOptions.subHeading);
                $mainContent.find("#footerLink").text(response.pageOptions.footerLink).attr("href", response.pageOptions.footerLinkURL);
                $mainContent.find("#dataCollectedLink").text(response.pageOptions.collectionSectionHeader);
                $mainContent.find("#dataSharedLink").text(response.pageOptions.sharedSectionHeader);
                $mainContent.find("#notCollectedHeader").text(response.pageOptions.doNotCollectSectionHeader);
                $mainContent.find("#notSharedHeader").text(response.pageOptions.dataNotSharedSectionHeader);
            }

            // Populate the collected section.
            if (response.collected) {
                $wrapper = $mainContent.find("#collectedItemsWrapper").empty();

                $.each(response.collected, function (key, collectedObject) {
                    createItemSection(collectedObject, $wrapper);
                });
            }

            if (response.notCollected) {
                $wrapper = $mainContent.find("#notCollectedItemsWrapper").empty();

                $.each(response.notCollected, function (key, collectedObject) {
                    createItemSection(collectedObject, $wrapper);
                });
            }

            if (response.shared) {
                $wrapper = $mainContent.find("#sharedItemsWrapper").empty();

                $.each(response.shared, function (key, collectedObject) {
                    createItemSection(collectedObject, $wrapper);
                });
            }

            if (response.notShared) {
                $wrapper = $mainContent.find("#notSharedItemsWrapper").empty();

                $.each(response.notShared, function (key, collectedObject) {
                    createItemSection(collectedObject, $wrapper);
                });
            }

            configPromise.resolve();
        },

        // Failure
        function (response) {
            console.log("Unable to the configuration file.  Error: " + response.statusText);
            configPromise.reject();
        }
    );

    return configPromise;
}

function createItemSection (dataObject, $parent) {

    var $collectedItem = $("<div class='contentItem'></div>"),
        itemContent = "";

    // Item Header
    itemContent += "<p class='itemHeader'>" + dataObject.element + "</p>";

    // Item Description
    itemContent += "<p class='itemDescription'>" + dataObject.why + "</p>";

    // Item Link
    itemContent += "<a class='itemDetailToggleLink' href='javascript:;'></a>";

    // Item Details
    itemContent += "<p class='itemDetails'>" + dataObject.moreInfo + "</p>";

    $parent.append($collectedItem.append(itemContent));
}