// 通用插件
// Author:Hexiaobo

$(function () {

    //导航宽度判断
    var $nav_w = $(".nav").width();
    var $nav_li_len = $(".nav").find("li").length;
    if ($nav_li_len > 6) {
        $(".nav>li").width($nav_w / $nav_li_len);
    } else {
        $(".nav>li").width(120);
    }

    /***tabs****/
    $(".tabcontrol").find("li:eq(0)").addClass("active");
    $(".tabmain").find(".tab_content:eq(0)").show();

    function tab_switch(cname, delay, navfill) {
        //默认延迟为300ms
        var delay = delay ? delay : 300;
        //控制切换
        $('.' + cname).on('mouseover', '.tabcontrol>li>a', function () {
            var tabindex = $(this).parent().index();
            var that = $(this);
            var change_tabs = setTimeout(function () {
                that.parent().addClass("active").siblings().removeClass("active");
                that.parents(".tabwrap").find(".tabmain>div").eq(tabindex).show().siblings("div").hide();
            }, delay);
            $(this).mouseout(function () {
                clearTimeout(change_tabs)
            })
        })
        /*
         if ($('.'+cname+' .tabcontrol>li').length !== $('.'+cname+' .tabmain>.tab_content').length) {
         throw  cname+'中的tabs与tab_content数量不等'
         }
         */
        //控制tabsnav是否填满
        if (navfill) {
            var nav_len = $('.' + cname).find(".tab_item").length;
            var nav_w = $('.' + cname + ' .tabcontrol').width();
            //var tab_item_w = nav_w % nav_len ===0?  nav_w/nav_len: Math.floor(nav_w/nav_len);
            var tab_item_w = (function () {
                if (nav_w % nav_len === 0) {
                    return nav_w / nav_len;
                } else {
                    return Math.floor(nav_w / nav_len);
                }
            }());
            $('.' + cname + ' .tabcontrol > li').width(tab_item_w);
            $('.' + cname + ' .tabcontrol > li:last').width(nav_w - tab_item_w * (nav_len - 1));
        }
    }

    tab_switch("tab1", 300);
    tab_switch("tab2", 300);
    tab_switch("tab3", 300);
    tab_switch("tab4", 300);
    tab_switch("tab5", 300);

    //判断列表，为空则显示“暂无信息”
    var nolist_html = '<div class="nolist"><i class="fa fa-exclamation-circle"></i> 暂无信息</div>';
    $(".tabmain .news-list ul:not(:has(li))").html(nolist_html);


    //焦点图
    var pic_li_width = $(".picnews .picnews-li").width();
    var pic_li_len = $(".picnews .picnews-li").length;
    var $pic_ul = $(".picnews .picnews-ul");
    var pageHtml = '<div class="pic-page"><ul></ul></div>';
    var liHtml = '<li></li>';
    $pic_ul.width(pic_li_width * pic_li_len).css("left", 0);
    $(".picnews").append(pageHtml);
    for (var i = 0; i < pic_li_len; i++) {
        $(".pic-page > ul").append(liHtml);
    }
    $(".pic-page > ul > li:first").addClass("active");

    var pic_slid_left = function () {
        var show_pic_number = -(parseInt($(".picnews .picnews-ul").css('left')) / pic_li_width) + 1;
        if (show_pic_number == pic_li_len) {
            $pic_ul.animate({"left": 0}, 200);
            $(".pic-page li:first").addClass("active").siblings().removeClass("active");
        } else {
            $pic_ul.animate({left: "+=-" + pic_li_width}, 200);
            $(".pic-page li").eq(show_pic_number).addClass("active").siblings().removeClass("active");
        }
    };
    $(".pic-page").on('click', 'li', function () {
        var page_index = $(this).index();
        $pic_ul.animate({"left": -(pic_li_width * (page_index))}, 200);
        $(this).addClass("active").siblings().removeClass("active");
    });

    $(".next-prev").on('click', '.prev', function () {
        var current = $(".pic-page li.active").index();
        if (current == 0) {
            $pic_ul.animate({"left": 0}, 200);
        } else {
            $pic_ul.animate({"left": "+=" + pic_li_width}, 200);
            $(".pic-page li").eq(current - 1).addClass("active").siblings().removeClass("active");
        }
    });
    $(".next-prev").on('click', '.next', function () {
        var current = $(".pic-page li.active").index();
        if (current == pic_li_len - 1) {
            $pic_ul.animate({"left": 0}, 200);
            $(".pic-page li:first").addClass("active").siblings().removeClass("active");
        } else {
            $pic_ul.animate({"left": "-=" + pic_li_width}, 200);
            $(".pic-page li").eq(current + 1).addClass("active").siblings().removeClass("active");
        }
    });

    var timeout = setInterval(pic_slid_left, 7000);
    $(".picnews").hover(function () {
            clearInterval(timeout);
        },
        function () {
            timeout = setInterval(pic_slid_left, 7000);
            ;
        }
    )


    //banner背景切换
    var img_bg = $(".banner .bg img");
    img_bg.not(":first").hide();
    function banner_switch(delay) {
        var i = 0;
        if (i == 0) {
            setInterval(function () {
                i++;
                img_bg.eq(i - 1).fadeOut(800);
                img_bg.eq(i).fadeIn(1200);
                if (i >= img_bg.length) {
                    img_bg.eq(i).fadeOut(800);
                    img_bg.eq(0).fadeIn(1200);
                    i = -1;
                }
            }, delay);
        }
    }

    banner_switch(5000);

})
/*$(function){}*/



//弹窗
var window_html = '<div class="window-wrap"><div class="window-head"><span class="window-tit"></span><a href="javascript:void(0)" class="window-colse"><i class="icon-win-close"></i></a></div><div class="window-main"></div></div><div class="mask"></div>';
function hxb_window(tit, wrap) {
    $(window_html).appendTo("body");
    var $window = $(".window-wrap");

    $(".window-tit").text(tit);
    $(wrap).clone().show().appendTo(".window-main");

    $window.css({marginTop: -$window.height() / 2, marginLeft: -$window.width() / 2});


    $(".window-colse").on('click', function () {
        $(".window-wrap,.mask").remove();
    });


}

