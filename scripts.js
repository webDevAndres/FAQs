"use strict";

var $ = function (id) {
    return document.getElementById(id);
};

var toggle = function () {
    var h2 = this;
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
    var h2Elements = faqs.getElementsByTagName("h2");

    // attach the event handler to elements
    for (var i = 0; i < h2Elements.length; i++) {
        h2Elements[i].onclick = toggle;
    }

    // set focus on first h2 tag 
    h2Elements[0].firstChild.focus();
};