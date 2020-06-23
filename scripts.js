"use strict";

var $ = function (id) {
    return document.getElementById(id);
};

var toggle = function () {
    var link = this;
    var h2 = link.parentNode;
    var div = h2.nextElementSibling;

    // toggle images
    if (h2.hasAttribute("class")) {
        h2.removeAttribute("class");
    } else {
        h2.setAttribute("class", "minus");
    }

    //toggle display
    if (div.hasAttribute("class")) {
        div.removeAttribute("class");
    } else {
        div.setAttribute("class", "open");
    }
};


window.onload = function () {
    var faqs = $("faqs");
    var linkElements = faqs.getElementsByTagName("a");

    // attach the event handler to link elements
    for (var i = 0; i < linkElements.length; i++) {
        linkElements[i].onclick = toggle;
    }

    // set focus on first a tag 
    linkElements[0].focus();
};