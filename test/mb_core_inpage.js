function createStyleSheet(content) {
    var style = document.createElement('style');
    var styleSheet = style.styleSheet;
    if (styleSheet) {
        styleSheet.cssText = content;
    }
    else {
        style.appendChild(document.createTextNode(content));
    }
    style.type = 'text/css';
    return style;
}

createStyleSheet('.site-wrap.detail-wrap{margin-top:0px;padding-top:80px}div[position="TNO_Inread_Banner_v2_Mobile"]{display: none} #adm_inpage{left:25px !important;-webkit-transform: translate3d(0,0,0) !important;} ');


var windowPrototype = {
    wdHeight: function () {
        return window.screen.height;
    },
    wdWidth: function () {
        return (window.screen.width - 50);
    },
    getElementTop: function (a) {
        var b =
            document;
        if (b.getElementById) var c = b.getElementById(a);
        else b.all && (c = b.all[a]);
        if (null != c) {
            yPos = c.offsetTop;
            for (tempEl = c.offsetParent; null != tempEl;) yPos += tempEl.offsetTop, tempEl = tempEl.offsetParent;
            return yPos
        }
        return 150
    },
    getElementWidth: function (a) {
        return document.getElementById(a).clientWidth
    },
    getElementLeft: function (a) {
        var b, c = document;
        c.getElementById ? b = c.getElementById(a) : c.all && (b = c.all[a]);
        a = b.offsetLeft;
        for (b = b.offsetParent; null != b;) a += b.offsetLeft, b = b.offsetParent;
        return a
    },
    scrollTop: function () {
        var a =
            document,
            b = a.body.scrollTop;
        0 == b && (b = window.pageYOffset ? window.pageYOffset : a.body.parentElement ? a.body.parentElement.scrollTop : 0);
        return b
    },
    scrollLeft: function () {
        var a = document,
            b = window.pageXOffset ? window.pageXOffset : 0,
            c = a.documentElement ? a.documentElement.scrollLeft : 0,
            a = a.body ? a.body.scrollLeft : 0,
            b = b ? b : 0;
        if (c && (!b || b > c)) b = c;
        return a && (!b || b > a) ? a : b
    },
    bdWidth: function () {
        var a = document;
        return bodyWidth = Math.max(Math.max(a.body.scrollWidth, a.documentElement.scrollWidth), Math.max(a.body.offsetWidth, a.documentElement.offsetWidth),
            Math.max(a.body.clientWidth, a.documentElement.clientWidth))
    },
    bdHeight: function () {
        var a = document;
        return Math.max(Math.max(a.body.scrollHeight, a.documentElement.scrollHeight), Math.max(a.body.offsetHeight, a.documentElement.offsetHeight), Math.max(a.body.clientHeight, a.documentElement.clientHeight))
    }
}



var css_inpage_new = '#admbackground-adm{height: 0px}#abody > div, #abody > p, #abde,.simplebanner.banner.desktophidden{position: relative;z-index: 88;background-color:#fff}#abody > table{position: relative;z-index: 89;background-color:#fff}#admbackground_1{clip: rect(0 ' + (windowPrototype.wdWidth()) + 'px ' + windowPrototype.wdHeight() + 'px 0px) !important;}#abody .details__morenews, #abody .details__morenews{z-index:99}';
createStyleSheet(css_inpage_new);

var div_maincontains = 'abody';


//var _crdivadm = 1;
function initClass() {
    var pempty = document.querySelectorAll('p:empty');
    for (var i = pempty.length - 1; i > -1; i--) {
        pempty[i].parentNode.removeChild(pempty[i]);
    }
    var articleLocator = document.getElementById(div_maincontains);

    var _ckdiv = Math.floor(articleLocator.childElementCount * 2 / 3);

    var _element = articleLocator.childNodes[_ckdiv];
    var _element1 = articleLocator.childNodes[_ckdiv - 1];
    var _element2 = articleLocator.childNodes[_ckdiv - 2];

    if (_element1.nodeName.toLowerCase() != '#text' && (_element1.getElementsByClassName("story--left")[0] || _element1.classList.contains('story--left') || _element1.getElementsByClassName("details__morenews")[0] || _element1.classList.contains('details__morenews'))) {
        _ckdiv = _ckdiv - 1;
        _element = articleLocator.childNodes[_ckdiv];
    }
    // ||_element2.classList.contains('story--left')
    if (_element2.nodeName.toLowerCase() != '#text' && (_element2.getElementsByClassName("story--left")[0] || _element2.classList.contains('story--left') || _element2.getElementsByClassName("details__morenews")[0] || _element2.classList.contains('details__morenews'))) {
        _ckdiv = _ckdiv - 2;
        _element = articleLocator.childNodes[_ckdiv];
    }

    findTopLength(articleLocator.childNodes[articleLocator.childElementCount - 1], _element);


    // var _table = document.getElementById(div_maincontains).getElementsByTagName("table");
    // for (var _i = 0; _i < _table.length; _i++) {
    //     _table[_i].parentNode.style.zIndex = (89 + _i);
    // }

    // var _table = document.getElementById(div_maincontains).getElementsByClassName("story--left");
    // for (var _i = 0; _i < _table.length; _i++) {
    //     _table[_i].style.zIndex = (89 + _i);
    //     _table[_i].style.position = 'relative';
    //     _table[_i].parentNode.style.zIndex = (89 + _i);
    //     _table[_i].parentNode.parentNode.style.zIndex = (89 + _i);
    // }

    var onScroll1 = function () {
        scrollAdVisibilityHandler();
        if (!document.getElementById('admCloseButton')) {
            var _closebottom = '<style>span#admCloseButton:before {content: " x"; margin-right: 5px; vertical-align: 3%; }</style><span id="admCloseButton" onclick="admHideInpage()" style="position: fixed !important; color: #ffffff !important; top: 40px; right: 0px; z-index: 1; display: block; padding: 3px 12px; border: 1px solid #b0b8b654; background: rgba(159, 169, 166, 0.32941176470588235); font-size: 12px !important; border-radius: 10px; ">Đóng</span>';
            $("#admbackground_1").append(_closebottom);
        }
        if (document.getElementById('advMidContent') || document.getElementById('admbackground_1')) {
            document.getElementById('admbackground-adm').style.height = '100%';
        }

        document.getElementById('admbackground-adm').style.height = '100%';
    }
    document.addEventListener("touchmove", onScroll1, false);
    document.addEventListener("scroll", onScroll1, false);
};

function findTopLength(endNode, curNode) {
    var admbackground = document.createElement("div");
    var wdHeight = windowPrototype.wdHeight();
    var wdWidth = window.innerWidth;
    admbackground.id = "admbackground-adm";
    admbackground.style.zIndex = '9';
    admbackground.style.display = 'block';
    admbackground.style.clear = 'both';
    admbackground.style.position = 'relative';
    admbackground.style.overflow = 'hidden';
    admbackground.style.margin = '0px 0px 15px 0px';
    admbackground.innerHTML = `
    <div id="admwrapper" style="height:0px;display:none;">
    </div>
    <div id="advTop" style="position: relative;height: 0px;overflow: hidden;display: none;">
    <div id="divfirst" style="height:${wdHeight}px;"></div>
    </div>
    <div id="topProBar" style="width: 100% !important; height: 4px !important; position: absolute !important; left: 0px !important; top: 0px !important; transition: top 0.5s 0.5s !important; z-index: 9 !important; margin: 0px !important; padding: 0px !important; background: rgb(204, 204, 204) !important;">
    <div id="topProgressBar" style="width: 50% !important; height: 4px !important; position: absolute !important; left: 0px !important; top: 0px !important; transition: width 0.5s, opacity 0.5s !important; margin: 0px !important; padding: 0px !important; background: rgb(144, 144, 144) !important;"></div>
        <div style="width: 100% !important; position: absolute !important; left: 0px !important; top: 4px !important; z-index: 1 !important; pointer-events: none !important; opacity: 1 !important; transition: opacity 0.5s, top 0.5s !important; text-align: center !important; color: white !important; font-size: 1.3em !important; margin: 0px !important; padding: 0px !important;">
            <div style="width: 280px !important; height: 45px !important; position: absolute !important; left: 50% !important; margin: 0px 0px 0px -140px !important; padding: 0px !important;">
                <img src="https://adi.admicro.vn/adt/cpc/tvcads/files/images/thanhnien_media_170118/bg_progress_text.png" width="100%">
                <div style="width: 217px !important; height: 12px !important; position: absolute !important; left: 16px !important; top: 16px !important; margin: 0px !important; padding: 0px !important;">
                    <img src="https://adi.admicro.vn/adt/cpc/tvcads/files/images/thanhnien_media_170118/txt_progress_up.png" width="100%" style="display: table-cell !important;">
                </div>
                <div id="topMessageArrow" style="width: 15px !important; height: 19px !important; position: absolute !important; left: 250px !important; top: 13px !important; transform-origin: center center 0px !important; transition: -webkit-transform 0.5s ease 0.8s !important; transform: rotate(-180deg) !important; margin: 0px !important; padding: 0px !important;">
                    <img src="https://adi.admicro.vn/adt/cpc/tvcads/files/images/thanhnien_media_170118/progress_arrow.png" width="100%" style="display: table-cell !important;">
                </div>
            </div>
        </div>
    </div>
    <div id="admbackground" style="height: ${wdHeight}px;">
    <div id="admbackground_1" style="position: absolute;width: 100%;height: ${wdHeight}px;clip: rect(0 ${wdWidth}px ${wdHeight}px -20px);">
        <div id="adm_inpage" style="display: inline-block;width: 100%;height: ${wdHeight}px;position: fixed;top: 0;left: 0;-webkit-backface-visibility: hidden;-webkit-transform: translate3d(0,0,0);">
            <div id="adm-inpage-h" style="display: block;height:736px;position: relative;">
            </div>
        </div>
    <div id="bottomProBar" style="width: 100% !important; height: 4px !important; position: absolute !important; left: 0px !important; bottom: 0px !important; z-index: 9 !important; transition: bottom 0.5s 0.5s !important; margin: 0px !important; padding: 0px !important; background: rgb(204, 204, 204) !important;">
        <div id="bottomProgressBar" style="width: 70% !important; height: 4px !important; position: absolute !important; left: 0px !important; bottom: 0px !important; transition: width 0.5s, opacity 0.5s !important; margin: 0px !important; padding: 0px !important; background: rgb(144, 144, 144) !important;"></div>
            <div style="width: 100% !important; position: absolute !important; left: 0px !important; bottom: 50px !important; z-index: 1 !important; pointer-events: none !important; opacity: 1 !important; transition: opacity 0.5s, bottom 0.5s !important; text-align: center !important; color: white !important; font-size: 1.3em !important; margin: 0px !important; padding: 0px !important;">
                <div style="width: 280px !important; height: 45px !important; position: absolute !important; left: 50% !important; margin: 0px 0px 0px -140px !important; padding: 0px !important;">
                    <img src="https://adi.admicro.vn/adt/cpc/tvcads/files/images/thanhnien_media_170118/bg_progress_text.png" width="100%"><div style="width: 217px !important; height: 12px !important; position: absolute !important; left: 16px !important; top: 16px !important; margin: 0px !important; padding: 0px !important;">
                    <img src="https://adi.admicro.vn/adt/cpc/tvcads/files/images/thanhnien_media_170118/txt_progress_down.png" width="100%" style="display: table-cell !important;">
                </div>
                <div id="bottomMessageArrow" style="width: 15px !important; height: 19px !important; position: absolute !important; left: 250px !important; top: 13px !important; transform-origin: center center 0px !important; transition: -webkit-transform 0.5s ease 0.8s !important; transform: rotate(0deg) !important; margin: 0px !important; padding: 0px !important;">
                    <img src="https://adi.admicro.vn/adt/cpc/tvcads/files/images/thanhnien_media_170118/progress_arrow.png" width="100%" style="display: table-cell !important;">
                </div>
            </div>
        </div>
    </div>
    <div id="advBotton" style="clear: both;position: relative;opacity: 0;height: 0px;display: none;overflow: hidden;"><div id="divend" style="height: 736px;display: block; visibility: visible; opacity: 1; background-color: rgb(255, 255, 255); position: relative; z-index: 5;"></div>
        <input type="hidden" value="0" name="hid_height" id="hid_height">
        <input type="hidden" value="0" name="hid_width" id="hid_width">
        <input type="hidden" value="0" name="hid_scrollview" id="hid_scrollview">
    </div>`;
    document.getElementById(div_maincontains).insertBefore(admbackground, curNode);

    
}


if (!document.getElementById('admbackground')) initClass();


var portions = 10;
var adShow10 = Math.round(windowPrototype.wdHeight() / portions) * (portions - 1),
    adShow20 = Math.round(windowPrototype.wdHeight() / portions) * (portions - 2),
    adShow30 = Math.round(windowPrototype.wdHeight() / portions) * (portions - 3),
    adShow40 = Math.round(windowPrototype.wdHeight() / portions) * (portions - 4),
    adShow50 = Math.round(windowPrototype.wdHeight() / portions) * (portions - 5),
    adShow60 = Math.round(windowPrototype.wdHeight() / portions) * (portions - 6),
    adShow70 = Math.round(windowPrototype.wdHeight() / portions) * (portions - 7),
    adShow80 = Math.round(windowPrototype.wdHeight() / portions) * (portions - 8),
    adShow90 = Math.round(windowPrototype.wdHeight() / portions) * (portions - 9);

function scrollAdVisibilityHandler() {
    var e = document.getElementById('admbackground');
    
    if (e.getBoundingClientRect().top < windowPrototype.wdHeight() && e.getBoundingClientRect().top > -windowPrototype.wdHeight()) {
        var actualTop = e.getBoundingClientRect().top;
        var absoluteTop = Math.abs(actualTop);
        var percentageShown = 10;
        // Less than 10 percentage of ad showing.
        if (absoluteTop > adShow10) {
            percentageShown = 10;
        }
        // Between 10 - 20 percentage of ad showing.
        else if (absoluteTop <= adShow10 && absoluteTop > adShow20) {
            percentageShown = 20;
        }
        // Between 20 - 30 percentage of ad showing.
        else if (absoluteTop <= adShow20 && absoluteTop > adShow30) {
            percentageShown = 30;
        }
        // Between 30 - 40 percentage of ad showing.
        else if (absoluteTop <= adShow30 && absoluteTop > adShow40) {
            percentageShown = 40;
        }
        // Between 40 - 50 percentage of ad showing.
        else if (absoluteTop <= adShow40 && absoluteTop > adShow50) {
            percentageShown = 50;
        }
        // Between 50 - 60 percentage of ad showing.
        else if (absoluteTop <= adShow50 && absoluteTop > adShow60) {
            percentageShown = 60;
        }
        // Between 60 - 70 percentage of ad showing.
        else if (absoluteTop <= adShow60 && absoluteTop > adShow70) {
            percentageShown = 70;
        }
        // Between 70 - 80 percentage of ad showing.
        else if (absoluteTop <= adShow70 && absoluteTop > adShow80) {
            percentageShown = 80;
        }
        // Between 80 - 90 percentage of ad showing.
        else if (absoluteTop <= adShow80 && absoluteTop > adShow90) {
            percentageShown = 90;
        }
        // More than 90 percentage of ad showing.
        else if (absoluteTop <= adShow90) {
            percentageShown = 100;
            //enableTouchEventOnFixedContainer();
        }

        scrollAt(percentageShown);

        // Pass message to proxy at last to prevent any error from proxy that will block operation of underlay.
        //callbackToProxy();
    }
};

function scrollAt(percentage) {
    updateTopBar(percentage);
    updateBottomBar(percentage);
};

function updateTopBar(percentage) {
    if (document.getElementById("topProgressBar")) {
        document.getElementById("topProgressBar").style.setProperty('width', percentage + '%', 'important');

        if (percentage > 90) {
            document.getElementById("topProBar").style.setProperty('top', '-97px', 'important');
            document.getElementById("topMessageArrow").style.setProperty('transform', 'rotate(0deg)', 'important');
            document.getElementById("topMessageArrow").style.setProperty('-webkit-transform', 'rotate(0deg)', 'important');
            document.getElementById("topMessageArrow").style.setProperty('-moz-transform', 'rotate(0deg)', 'important');
        } else {
            document.getElementById("topProBar").style.setProperty('top', '0px', 'important');
            document.getElementById("topMessageArrow").style.setProperty('transform', 'rotate(-180deg)', 'important');
            document.getElementById("topMessageArrow").style.setProperty('-webkit-transform', 'rotate(-180deg)', 'important');
            document.getElementById("topMessageArrow").style.setProperty('-moz-transform', 'rotate(-180deg)', 'important');
        }
    }

};

function updateBottomBar(percentage) {
    if (document.getElementById("bottomProgressBar")) {
        document.getElementById("bottomProgressBar").style.setProperty('width', percentage + '%', 'important');

        if (percentage > 90) {
            document.getElementById("bottomProBar").style.setProperty('bottom', '-81px', 'important');
            document.getElementById("bottomMessageArrow").style.setProperty('transform', 'rotate(180deg)', 'important');
            document.getElementById("bottomMessageArrow").style.setProperty('-webkit-transform', 'rotate(180deg)', 'important');
            document.getElementById("bottomMessageArrow").style.setProperty('-moz-transform', 'rotate(-180deg)', 'important');
        } else {
            document.getElementById("bottomProBar").style.setProperty('bottom', '0px', 'important');
            document.getElementById("bottomMessageArrow").style.setProperty('transform', 'rotate(0deg)', 'important');
            document.getElementById("bottomMessageArrow").style.setProperty('-webkit-transform', 'rotate(0deg)', 'important');
            document.getElementById("bottomMessageArrow").style.setProperty('-moz-transform', 'rotate(0deg)', 'important');
        }
    }
};

function admHideInpage() {
    if (document.getElementById('admbackground')) {
        document.getElementById('admbackground').style.display = 'none';
    }
    if (document.getElementById('admbackground-adm')) {
        document.getElementById('admbackground-adm').style.display = 'none';
    }
}


function renderImageInpage(url) {
    var html_inpage = '<img src="' + url + '" alt="Images"/>';
    document.getElementById("admbackground").innerHTML = html_inpage;

}

function renderHtmlInpage(content) {
    document.getElementById("adm-inpage-h").innerHTML = content;
}


//renderImageInpage("https://cdn.dailyxe.com.vn/image/chan-dai-qua-nong-ben-sieu-xe-canh-may-rau-dung-hinh-1-57721j.jpg");


renderHtmlInpage("<a href='https://dailyxe.com.vn/'><img src='https://cdn.dailyxe.com.vn/image/chan-dai-qua-nong-ben-sieu-xe-canh-may-rau-dung-hinh-1-57721j.jpg' alt='Images'/></a>");


