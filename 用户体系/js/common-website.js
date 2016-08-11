// JavaScript Document
$(function () {

    //角色选择
    $(".info-wrap-role input").on('click', function () {
        var icheck = '<i class="checked"></i>';
        if ($(this).is(':checked')) {
            //加入勾选样式
            $(".info-wrap-role label").removeClass("active-label").find("i.checked").remove();
            $(this).prev('label').addClass("active-label").prepend(icheck);

            //点击非会员显示地区
            if (!$('#sccin_member').is(':checked')) {
                $('.area-hide').slideDown();
            } else {
                $('.area-hide').slideUp();
            }

        } else {
            return false;
        }
        ;


    });


    //leftsead

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $("#leftsead").fadeIn();
            /*$('#leftsead .guide-menu').hover(function () {
             $(this).find('i').hide();
             $(this).find('span').show();
             }, function () {
             $(this).find('span').hide();
             $(this).find('i').show();

             });*/
        } else {
            $("#leftsead").fadeOut();
        }
        ;


    });
    $("#top_btn").click(function () {
        if (scroll == "off") return;
        $("html,body").animate({scrollTop: 0}, 600);
    });


    //弹窗-交易主体信息
    $("#window-btn-1").click(function (e) {
        layer.open({
            type: 1,
            skin: 'layui-layer-rim', //加上边框
            title: ['交易主体信息-两栏', 'font-size:18px; height:55px; padding-top:5px'],
            area: ['auto'], //宽高
            shift: 0,  //动画0-6
            move: false,
            content: $('#window1')
        });
    });

    //弹窗-交易主体信息
    $("#window-btn-2").click(function (e) {
        layer.open({
            type: 1,
            skin: 'layui-layer-rim', //加上边框
            title: ['交易主体信息-两栏', 'font-size:18px; height:55px; padding-top:5px'],
            area: ['auto'], //宽高
            shift: 0,  //动画0-6
            move: false,
            content: $('#window2')
        });
    });

    //弹窗-交易主体信息
    $("#window-btn-3").click(function (e) {
        layer.open({
            type: 1,
            skin: 'layui-layer-rim', //加上边框
            title: ['交易主体信息-两栏', 'font-size:18px; height:55px; padding-top:5px'],
            area: ['auto'], //宽高
            shift: 0,  //动画0-6
            move: false,
            content: $('#window3')
        });
    });

    //保存提示
    $("#btn-save").click(function () {
        layer.msg('保存成功，您可以关闭页面，下次再继续填写信息。', {
            icon: 1,
            area: ['400px'],
            shade: [0.4, '#393D49'],
            time: 2000
        }, function () {
            // callback
        });
    });


    //delete confirm
    $("#window_del").click(function () {
        var $checked_tr = $("input[data-type='aid']:checked").parents("tr");
        var checked_length = $checked_tr.length;
        if (checked_length == 0) {
            alert("请选择要删除的项！")
        } else {
            layer.open({
                icon: 3,
                content: '是否确认删除操作？',
                btn: ['确定', '取消'],
                yes: function (index, layero) {
                    layer.msg('操作成功!', {
                        icon: 1,
                        time: 2000
                    });
                    $checked_tr.remove();
                },
                cancel: function (index) {

                }
            });
        }
    });


});//$(function()

