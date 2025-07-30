// v1

// var $ = jQuery.noConflict();

$(document).ready(function ($) {

    var myBody = $('body'),
        mainHeader = $('#main-header'),
        searchHeader = $('.et_search_outer');

    function isEmpty(str) {
        return (!str || 0 === str.length);
    }

    function isBlank(str) {
        return (!str || /^\s*$/.test(str));
    }
    if (myBody.hasClass('auctions-catalog') || myBody.hasClass('search')) {

        var currentURL = window.location.href;
        var currentURLMatch = currentURL.match(/\d+/);
        var auctionID = currentURLMatch[0];
        console.log(auctionID);
        //bredcrumbs & iframe
        if ($('.auctitle > div.tle h3').length > 0 && !isEmpty($('.auctitle > div.tle h3').html()) && !isBlank($('.auctitle > div.tle h3').html())) {
            /* var myLink = $('.auctitle > div.tle h3').html();
            
            myLink = myLink.replace('Starts Ending', ''); */

            let myTxt = '<div class="auc-top-menu"><a href="/" class="auc_lnk">Auctions</a> <a href="' + $('.aucinfo').attr('href') + '" class="lotinfotab">Info</a> <a href="' + location.protocol + '//' + location.host + location.pathname + '">Catalog</a></div><iframe class="header_iframe" frameborder="0" scrolling="no" onload="resizeIframe(this)" src=' + location.protocol + '//' + location.host + '/feed/info&id=' + auctionID + ' >';

            if ($('.bid_listing_wrapper').length > 0) {

                $(myTxt).prependTo($('.auctitle.catitle'));
            } else {
                $('.auc_srch').prepend(myTxt);
            }
        }
    }

    if (myBody.hasClass('lot-details-index')) {

        var currentURL = window.location.href;
        var currentURLMatch = currentURL.match(/\d+/);
        var auctionID = currentURLMatch[0];
        console.log(auctionID);

        //bredcrumbs
        if ($('.auctitle > div.tle h3').length > 0 && !isEmpty($('.auctitle > div.tle h3').html()) && !isBlank($('.auctitle > div.tle h3').html())) {

            //limit title to 50 chars
            var myLink = $('.auctitle > div.tle h3').html();
            myLink = myLink.replace('Starts Ending', '');

            var myLot = $('.lot-name').html();

            if (myLot.length > 30) {

                myLot = myLot.slice(0, 30);
                myLot = myLot + '...';
            }


            //adding auction name and lot name to the top link-menu
            let myTxt = '<div class="auc-top-menu"><a href="/" class="auc_lnk">Auctions</a>  <a href="' + $('.aucinfo').attr('href') + '" class="lotinfotab">Info</a> <a href="' + $('.catlg').attr('href') + '" class="auc-name">Catalog</a>' + myLot + '</div>';

            $('.lot-details-container').prepend(myTxt);
        }
    }

    if (myBody.hasClass('auctions-info')) {

        let myHtml = '<div class="auc-top-menu"><a href="/" class="auc_lnk">Auctions</a> <a href="' + $('a.catlg').attr('href') + '" class="myCatalog">Catalog</a>  Info</div>';

        $(myHtml).prependTo($('#wrapper .bodybox'));
    }

    $('#et_search_icon').on('click', function () {

        let mySearch = $('.et_search_form_my-container'),
            myMenu = $('.et_menu_my-container');
        mySearch.addClass('et_pb_search_visible');
        mySearch.removeClass('et_pb_search_form_hidden');
        myMenu.removeClass('et_pb_menu_visible');
        myMenu.addClass('et_pb_menu_hidden');

        mySearch.removeClass('et_pb_no_animation');
        myMenu.removeClass('et_pb_no_animation');

        setTimeout(function () {
            mySearch.addClass('et_pb_no_animation');
            myMenu.addClass('et_pb_no_animation');
        }, 1000);

    });

    $('.et_close_search_field').on('click', function () {

        let mySearch = $('.et_search_form_my-container'),
            myMenu = $('.et_menu_my-container');
        mySearch.removeClass('et_pb_search_visible');
        mySearch.addClass('et_pb_search_form_hidden');
        myMenu.addClass('et_pb_menu_visible');
        myMenu.removeClass('et_pb_menu_hidden');

        mySearch.removeClass('et_pb_no_animation');
        myMenu.removeClass('et_pb_no_animation');

        setTimeout(function () {
            mySearch.addClass('et_pb_no_animation');
            myMenu.addClass('et_pb_no_animation');
        }, 1000);
    });

    //listener to checks if position of scroll is less then 100
    $(window).scroll(function () {
        scrollSetting();
    });

    function scrollSetting() {
        winScroll = $(window).scrollTop();
        if (winScroll >= 32) {
            mainHeader.addClass('et-fixed-header');
            searchHeader.addClass('et-fixed-header');
        }
        else {
            mainHeader.removeClass('et-fixed-header');
            searchHeader.removeClass('et-fixed-header');
        }
    }

    $('.mobile_menu_bar_toggle').on('click', function () {

        $('#mobile_menu').toggle();
        $('.mobile_nav').toggleClass('closed');
        $('.mobile_nav').toggleClass('opened');
    });
    if ($("li.logout").length > 0) {
        $("li.my-items").attr("style", "display:inline-block !important;");
    }
    /*if($("body.lot-details.lot-details-index").length>0)
    {
        $("#watchlist_button").before($(".bidding-fieldset li div.unibtn").parent());
    } */
    if ($("body.auctions.auctions-ask-question").length > 0) {
        $("#AskQuestionForm > div > article > ul > li > div.accordionContent > section > ul > li:nth-child(6)").before($("#AskQuestionForm > div > article > ul > li > div.accordionContent > section > ul > li:nth-child(7)"));
    }


    var winWidth = $(window).width();

    if (winWidth >= 568 && myBody.hasClass('lot-details')) {
        var tabHeight = $('.is-open .ins_cnt').outerHeight();

        $('ul#nav').css({ 'height': tabHeight + 40 });

        $('#nav li a').on('click', function () {

            $(this).parent().find('.tabhide').css({ 'display': 'block' });
            tabHeight = $(this).parent().find('.ins_cnt').outerHeight();

            $('ul#nav').css({ 'height': tabHeight + 40 });

        });
    }


    console.log("checking class");
    /*
    if (myBody.hasClass('auctions-live-sale')) {



        var totalTimeWarningChecked = 0;
        var checkWarningMessage = setInterval(function () {

            console.log("checkWarningMessage");

            totalTimeWarningChecked++;
            if ($("li.current-btn div.warning").length) {

                clearInterval(checkWarningMessage);
                $("div#z47").css("display", "none");

            }else{

                if(totalTimeWarningChecked > 10){
                    clearInterval(checkWarningMessage);
                }
    

            }







        }, 1000);



    }
    */




    if (myBody.hasClass("auctions-list")) {

        $("div#aucDtr > ul").each(function (index) {

            if ($(this).find("a.cat").length) {

                $(this).find("a.cat").parent().addClass("catdiv");
            }

            if ($(this).find("a.reg").length) {

                $(this).find("a.reg").parent().addClass("catdiv");
            }

        });

    }


    /*Advanced search starts*/

    if (myBody.hasClass("auctions-catalog") || myBody.hasClass("my-items") || myBody.hasClass("search-index")) {
        /*Starts : Advanced search*/

        //Advance search customization
        $("div.advSearchAccordionContent").prepend($("span#advsKey_ctl.qtextbox-ctl"));
        $("input#advsLotNum.textbox").attr("placeholder", "Lot Number");
        $(".search_toggle_btn").prepend("Advanced Search");
        
        /*$(".auclist.auc_srch").prepend($("section.compact_advance_search"));

        

        $("div.srch_btn.unibtn").after("<div class='toppag' id='customTopTag'></div>");
        $("#customTopTag").append($("div div.grid_list"));

        $("div#lac5_ctl.qdatarepeater-ctl").before($("div.filters.toppag div.itmspage"));

        $("div#customTopTag.toppag div.grid_list").append("<div id='listViewAnchor'></div>");
        $("div#customTopTag.toppag div.grid_list").append("<div id='gridViewAnchor'></div>");

        $("#listViewAnchor").append($("div.grid_list a.lst"));
        $("#gridViewAnchor").append($("div.grid_list a.sqr"));*/

        

        /*Ends : Advanced search*/
    }

    /*Advanced search ends*/

    if(myBody.hasClass("auctions-live-sale")){

        $(".auctions.auctions-live-sale ul.bidding-main").prepend("<div id='bid_now_section'></div>");
        $("#bid_now_section").append("<div id='bid_button_image'><img src='/assets/custom/images/bid-button.png'/></div>");
        $("#bid_now_section").append("<div id='bid_options'></div>");
        $("#bid_options").append($(".auctions.auctions-live-sale ul.bidding-main li.current"));
        $("#bid_options").append($(".auctions.auctions-live-sale ul.bidding-main li.current-btn"));



        if ($("li.current-btn div.unibtn").length) {
            var configBidButton = { attributes: true, childList: true, characterData: true, subtree: true };
            var targetNodeBidButton = document.querySelector('li.current-btn div.unibtn');
            const callback = function (mutationsList, observer) {
                observer.disconnect();
                console.log("Bid updated");
                if ($("span.highest").length) {
                    console.log("hight bid...");
                    $("a.live-bid").removeClass("livebid_highbid");
                    $("a.live-bid").removeClass("livebid_outbid");
                    $("a.live-bid.grey").addClass("livebid_highbid");
                } else if ($("span.outbid").length) {
                    console.log("outbid...");
                    $("a.live-bid").removeClass("livebid_highbid");
                    $("a.live-bid").removeClass("livebid_outbid");
                    $("a.live-bid").addClass("livebid_outbid");
                }
                observer.observe(targetNodeBidButton, configBidButton);
            };
            const observerBidButton = new MutationObserver(callback);
            observerBidButton.observe(targetNodeBidButton, configBidButton);
        }







    }


});
