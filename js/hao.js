/**
 * Created by HP on 2017/3/13.
 */
$(window).on('load', function () {
    //注册层代码  开始

    //实现注册盒子的淡进淡出效果
    $('.haoLogin').click(function () {
        //盒子淡入
        $('#layout').find('.phone-step1').find('input').val("中国(+86)");
        $('#layout').find('.err').addClass('err1');
        $('#layout').find('.phone').find('input').val("");
        $('#layout').find('ul').css('display', 'none');
        $('#layout').fadeIn(2000, function () {
            $(this).css('display', 'block')
        })
        $('#layout-bg').fadeTo(2000, 0.1, function () {
            $(this).css('display', 'block');
        })
        //盒子淡出
        $('#layout').find('.btn1').click(myFade)
        //封装的淡出函数
        function myFade() {
            $('#layout').fadeOut(1000, function () {
                $(this).css('display', 'none');
            })
            $('#layout-bg').fadeOut(1000, function () {
                $(this).css('display', 'none')
            })
        }
        //移入输入框，显示ul标签
        $('#layout').find('.phone-step1').first().mouseover(function () {
            $(this).css('placeholder', '')
            $('#layout').find('ul').css('display', 'block');
        })
        //选择所需li标签
        $('#layout').find('li').mouseover(function () {
            $(this).css('backgroundColor', '#E8E8E8')
            $(this).siblings('li').css('backgroundColor', '')
        })
        //点击li标签获取里面的值给input并关闭ul
        $('#layout').find('li').click(function () {
            //document.getElementsByClassName('phone-step1').children(0)
            $('#layout').find('.phone-step1').find('input').val($(this).text());
            $('#layout').find('ul').css('display','none');
        })
        //验证电话号码/^1\d{10}$/
        $('#layout').find('.phone').find('input').mouseover(function () {
            $(this).val("");
            $('.phone').find('.err').addClass('err1');
        })
        $('#layout').find('.phone').find('input').mouseout(function () {
            if (!/^1\d{10}$/.test($(this).val())) {//正则判断
                $('.phone').find('.err').removeClass('err1');
            }
        })
        //单击注册按钮
        $('#layout').find('.btn2').click(function () {
            if(!/^1\d{10}$/.test($('#layout').find('.phone').find('input').val())){//验证电话号码是否正确
                $('.phone').find('.err').removeClass('err1');
            }else if(!/^\d{6}$/.test($('#layout').find('.code').find('input').val())){//验证码是否正确
                //当电话号码和验证码都正确时才能触发注册按钮
                $('.code').find('.err').removeClass('err1');
            }else{
                $('#layout').fadeOut(1000, function () {
                    $(this).css('display', 'none');
                })
                $('#layout-bg').fadeOut(1000, function () {
                    $(this).css('display', 'none')
                })
            }
        })
    })
    //注册层代码  结束

    //导航栏 开始
    $('#site-header').find('.nav-item1').mouseenter(function () {
        $('#site-header-hide').find('#hide-xm').slideDown();

    }).mouseleave(function () {
        $('#site-header-hide').find('#hide-xm').slideUp();
    })

    $('#site-header').find('.nav-item2').mouseenter(function () {

        $('#site-header-hide').find('#hide-hm').slideDown();

    }).mouseleave(function () {
        $('#site-header-hide').find('#hide-hm').slideUp();
    });
    //导航栏 结束
    /**
     * 功能：返回顶部小火箭
     */
    (function(){
        $(function() {
            var img = document.getElementById("return-top");
            var timer = null;
            var leader = 0;

            img.style.display = "none";
            img.style.position = "fixed";
            img.style.right = "0";
            img.style.bottom = "50px";
            console.log(window.pageYOffset);

            window.onscroll = function () {
                if(window.pageYOffset > 1500){
                    img.style.display = "block";
                }else{
                    img.style.display = "none";
                }
                leader = window.pageYOffset;
            }

            img.onclick = function () {
                clearInterval(timer);
                timer = setInterval(function () {
                    var step = (0-leader)/10;
                    step = step>0?Math.ceil(step):Math.floor(step);
                    leader += step;
                    window.scrollTo(0,leader);
                    if(leader === 0){
                        clearInterval(timer);
                    }
                },30);
            }
        })
    })();


})

