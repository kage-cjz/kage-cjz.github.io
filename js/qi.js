$(window).on('load', function () {

    $('#ul1>li').first().css({
        color: "#FF6700",
        borderBottom: 'solid 2px #FF6700'
    })
    $('#ul2>li').first().css({
        color: "#FF6700",
        borderBottom: 'solid 2px #FF6700'
    })
    $('#ul1>li').mouseenter(function () {

        $(this).css({
            color: "#FF6700",
            borderBottom: 'solid 2px #FF6700'
        })
        $('.wq1').eq($(this).index()).css('display', 'block')
        $('.wq1').eq($(this).index()).siblings('.wq1').css('display', 'none')
        $(this).siblings().css({
            color: '#424242',
            borderBottom: 'none'

        })
    })
    $('#ul2>li').mouseenter(function () {

        $(this).css({
            color: "#FF6700",
            borderBottom: 'solid 2px #FF6700'
        })
        $('.wq2').eq($(this).index()).css('display', 'block')
        $('.wq2').eq($(this).index()).siblings('.wq2').css('display', 'none')
        $(this).siblings().css({
            color: '#424242',
            borderBottom: 'none'
        })
    })
    $('.ul2>li').mouseenter(function () {
        if ($(this).attr('class') != 'five five1') {
            $(this).stop(true).animate({
                top: "-10px"
            })
            $(this).css({
                'background': '#E4E4E4',
                'boxShadow': '10px 10px 20px'
            })
        }
        $(this).children('.fq').stop().slideToggle()
    }).mouseleave(function () {
            if ($(this).attr('class') != "five five1") {
                console.log($(this).attr('class'))
                $(this).stop(true).animate({
                    top: "0px"
                })
                $(this).css({
                    'background': '#fff',
                    'boxShadow': 'none'
                })
            }
            $(this).children('.fq').stop().slideToggle()
        }
    )
    $('.five1').children().mouseenter(function () {
        $(this).stop(true).animate({
            top: "-10px"
        })
        $(this).css({
            'background': '#E4E4E4',
            'boxShadow': '10px 10px 20px'
        })
    }).mouseleave(function () {
        $(this).stop(true).animate({
            top: "0px"
        })
        $(this).css({
            'background': '#fff',
            'boxShadow': 'none'
        })

    })
    $('.ul2>li').css('cursor', 'pointer')

})

