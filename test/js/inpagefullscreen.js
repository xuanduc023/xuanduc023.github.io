/* === COMPARE SPECIFICATION === */
var $adsinpagefullscreen;
function AdsInpageFullScreen() {

    var windowPrototype = {
        wdHeight: function () {
            return window.screen.height;
        },
        wdWidth: function () {
            return (window.screen.width - 50);
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

    this.createStyleSheet = function (content) {
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

    this.initClass = function (target) {
        var div_maincontains = target ? target : 'qcbody';
        this.createStyleSheet('#adm_inpage{left:25px !important;-webkit-transform: translate3d(0,0,0) !important;}#admbg-adm{height: 0px}#' + div_maincontains + ' > div, #' + div_maincontains + ' > p, #abde,.simplebanner.banner.desktophidden{position: relative;z-index: 88;background-color:#fff}#' + div_maincontains + ' > table{position: relative;z-index: 89;background-color:#fff}#admbg_1{clip: rect(0 ' + (windowPrototype.wdWidth()) + 'px ' + windowPrototype.wdHeight() + 'px 0px) !important;}#' + div_maincontains + ' .details__morenews, #' + div_maincontains + ' .details__morenews{z-index:99}');
        var pempty = document.querySelectorAll('p:empty');
        for (var i = pempty.length - 1; i > -1; i--) {
            pempty[i].parentNode.removeChild(pempty[i]);
        }
        var articleLocator = document.getElementById(div_maincontains);
        var _ckdiv = Math.floor(articleLocator.childElementCount * 2 / 3);
        var _element = articleLocator.childNodes[_ckdiv];
        var position = $(window).width() > 991 ? 'absolute' : 'fixed';
        this.findTopLength(div_maincontains, _element);
        if (!document.getElementById('admClose')) {
            var _closebottom = '<span id="admClose" style="position: ' + position + ' !important; color: #ffffff !important; width: 30px; height: 30px; top: 40px; right: 10px; z-index: 1; display: flex; align-items: center;justify-content: center;  padding: 3px 12px; border: 1px solid #b0b8b654; background: rgba(0, 0, 0, 0.5); font-size: 12px !important; border-radius: 50%;cursor:pointer;">X</span>';
            $("#admbg_1").append(_closebottom);
            // Event close ads
            $("#admClose").on('click touch', function () {
                $('#admbg, #admbg-adm').css('display', 'none');
            })
        }
    };

    this.findTopLength = function (target, curNode) {
        var admbg = document.createElement("div");
        var wdWidth = window.innerWidth;
        var wdHeight = wdWidth > 991 ? 'unset' : windowPrototype.wdHeight();
        var positionabsulute = wdWidth > 991 ? 'relative' : 'absolute';
        var positionfixed = wdWidth > 991 ? 'relative' : 'fixed';
        admbg.id = "admbg-adm";
        admbg.style.zIndex = '9';
        admbg.style.display = 'block';
        admbg.style.clear = 'both';
        admbg.style.position = 'relative';
        admbg.style.overflow = 'hidden';
        admbg.style.margin = '0px 0px 15px 0px';
        admbg.innerHTML = `
        <div id="admbg" style="height: ${wdHeight}px;">
        <div id="admbg_1" style="position: ${positionabsulute};width: 100%;height: ${wdHeight}px;clip: rect(0 ${wdWidth}px ${wdHeight}px -20px);">
        <div id="adm_inpage" style="display: inline-block;width: 100%;height: ${wdHeight}px;position: ${positionfixed};top: 0;left: 0;-webkit-backface-visibility: hidden;-webkit-transform: translate3d(0,0,0);">
            <div id="adm-inpage-h" style="display: block;height:${wdHeight}px;position: relative;">
            </div>
        </div>`;
        document.getElementById(target).insertBefore(admbg, curNode);
    }

    this.renderImage = function (url, link, title) {
        if (!document.getElementById('admbg')) this.initClass();
        var html_inpage = '<a href="' + link + '" title="' + title + '"><img src="' + url + '" alt="' + title + '"/></a>';
        document.getElementById("admbg").innerHTML = html_inpage;
    }

    this.renderHtml = function (content) {
        if (!document.getElementById('admbg')) this.initClass();
        document.getElementById("adm-inpage-h").innerHTML = content;
    }
}

$(document).ready(function () {
    $adsinpagefullscreen = new AdsInpageFullScreen();
})