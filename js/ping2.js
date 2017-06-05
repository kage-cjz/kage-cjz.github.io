$(window).on('load', function () {
    var json1 = [
        {
            figure: "images/Mi_01.png",
            title: "小米手机5c",
            price: "1499元",
            flags: "新品",
        },
        {
            "figure": "images/xiaomiNOTE2-320-220!160x110.jpg",
            "title": "小米Note 2",
            "price": "2799元起",
            flags: "新品"
        },
        {
            figure: "images/MIX-320-220!160x110.jpg",
            title: "小米MIX",
            price: "3499元起",
            flags: "新品"
        },
        {
            figure: "images/mi5c_320x220.jpg",
            title: "小米5s",
            price: "1999元",
            flags: "新品"
        },
        {
            figure: "images/mi5160x110.jpg",
            title: "小米5s Plus",
            price: "2999元",
            flags: "新品"
        },
        {
            figure: "images/5spluse320_220!160x110.jpg",
            title: "小米手机5",
            price: "1799元",
            flags: "新品"
        }
    ];

    var json2 = [
        {
            figure: "images/hmn4xtb!160x110.jpg",
            title: "红米Note 4X",
            price: "999元起",
            flags: "新品",
        },
        {
            "figure": "images/hongminote4!160x110.jpg",
            "title": "红米Note 4",
            "price": "999元起",
            flags: "新品"
        },
        {
            figure: "images/hm4x320!160x110.jpg",
            title: "红米4X",
            price: "699元起",
            flags: "新品"
        },
        {
            figure: "images/320-2202!160x110.jpg",
            title: "红米4",
            price: "799元起",
            flags: "新品"
        }
    ];
    var json3 = [
        {
            figure: "images/mipad2-16!160x110.jpg",
            title: "小米平板2 16GB",
            price: "999元",
            flags: "新品",
        },
        {
            "figure": "images/bijiben32012.5!160x110.jpg",
            "title": "小米笔记本Air 12.5",
            "price": "3499元",
            flags: "新品"
        },
        {
            figure: "images/bijiben320!160x110.jpg",
            title: "小米笔记本Air 13.3",
            price: "4999元",
            flags: "新品"
        },
        {
            figure: "images/bijiben320!160x110.jpg",
            title: "小米笔记本Air 13.3 尊享版",
            price: "5999元",
            flags: "新品"
        }
    ];
    var json4 = [
        {
            figure: "images/101848.png",
            title: "小米电视3s 48英寸",
            price: "2599元",
            flags: "新品",
        },
        {
            "figure": "images/101855xin.png",
            "title": "小米电视3s 55英寸",
            "price": "3999元",
            flags: "新品"
        },
        {
            figure: "images/101860xin.png",
            title: "小米电视3s 60英寸",
            price: "4699元",
            flags: "新品"
        },
        {
            figure: "images/65yingyuan.png",
            title: "小米电视3s 65英寸",
            price: "6699元",
            flags: "新品"
        },
        {
            figure: "images/70dianshi.png",
            title: "小米电视3 70英寸",
            price: "9999元",
            flags: "新品"
        },
        {
            figure: "images/101865.png",
            title: "查看全部",
            price: "小米电视",
            flags: "新品"
        }
    ];
    var figure = "MIX-320-220160x110.jpg";
    var json5 = [
        {
            figure: "images/mihezi.png",
            title: "小米盒子3s",
            price: "299元",
            flags: "新品",
        },
        {
            "figure": "images/mihezi.png",
            "title": "小米盒子3s",
            "price": "199元",
            flags: "新品"
        },
        {
            figure: "images/hezi3s!160x110.jpg",
            title: "小米盒子3 增强版",
            price: "399元",
            flags: "新品"
        },
        {
            figure: "images/hezimini.png",
            title: "小米盒子mini版",
            price: "179元",
            flags: "新品"
        },
        {
            figure: "images/320x220.png",
            title: "小米家庭影院",
            price: "1999元",
            flags: "新品"
        },
        {
            figure: "images/putonban!160x110.jpg",
            title: "小米家庭音响 标准版",
            price: "699元",
            flags: "新品"
        }
    ];
    var json6 = [
        {
            figure: "images/lyqhd.png",
            title: "小米路由器 HD",
            price: "1299元",
            flags: "新品",
        },
        {
            "figure": "images/pro320x220.png",
            "title": "小米路由器 Pro",
            "price": "499元",
            flags: "新品"
        },
        {
            figure: "images/lyq31.png",
            title: "小米路由器 3",
            price: "149元",
            flags: "新品"
        },
        {
            figure: "images/lyq3c1.png",
            title: "小米路由器 3C",
            price: "99元",
            flags: "新品"
        },
        {
            figure: "images/fdq2!160x110.jpg",
            title: "小米WiFi放大器 2",
            price: "49元",
            flags: "新品"
        },
    ];
    var json7 = [
        {
            figure: "images/tzc320!160x110.jpg",
            title: "小米体脂秤",
            price: "199元",
            flags: "新品",
        },
        {
            "figure": "images/jjy320!160x110.jpg",
            "title": "米家行车记录仪",
            "price": "499元",
            flags: "新品"
        },
        {
            figure: "images/wrj4k320.png",
            title: "小米无人机 4k 版",
            price: "2999元",
            flags: "新品"
        },
        {
            figure: "images/djj320!160x110.jpg",
            title: "小米米家对讲机",
            price: "249元",
            flags: "新品"
        },
        {
            figure: "images/dfb!160x110.jpg",
            title: "米家IH电饭煲",
            price: "399元",
            flags: "新品"
        },
        {
            figure: "images/air2!160x110.jpg",
            title: "查看全部",
            price: "智能硬件",
            flags: "新品"
        }
    ];

//animate(ul,{height:300})
    var list = document.getElementById("nav-list");
    var site_header = document.getElementById("site-header");
    var Mi_navMenu = document.createElement("div");
    Mi_navMenu.className = "Mi_navMenu clearfix";
    Mi_navMenu.id = "Mi_navMenu";
    site_header.appendChild(Mi_navMenu);
    var navMenu = document.createElement("div");
    Mi_navMenu.appendChild(navMenu);
    navMenu.className = "navMenu";
    var ul = document.createElement("ul");
    ul.className = "navMenuUl";
    navMenu.appendChild(ul);
    var lis = list.children[0];

    function productList(json) {
        ul.innerHTML = '';
        for (var arrt in json) {
            console.log(json.length)
            var js = json[arrt];
            var str = '<li class="first">' +
                '<div class="figure">' +
                '<a href="#"><img src=' + js.figure + ' alt=""/>' +
                '</a>' +
                '</div>' +
                '<div class="title">' +
                '<a href="#">' + js.title + '</a>' +
                '</div>' +
                '<div class="price">' + js.price + '</div>' +
                //'<div class="flags">' + js.flags + '</div>' +
                '</li>' +
                '<li class="line"></li>'
            ul.innerHTML += str;
        }
        navMenu.style.display = "none";
    }

    $(".nav-item1").stop(true).mouseenter(function () {
        productList(json1);
        $(".Mi_navMenu").css("display","block");
        $(".navMenu").stop(true).slideDown();
        $('.navMenu').children().stop(true).slideDown();
    });
    $(".nav-item1").mouseleave(function () {
        $(".navMenu").stop(true).slideUp(function () {
            //$(".navMenu").css("display", "none");
        });
        $('.navMenu').children().stop(true).slideUp(function () {
            //$(".navMenu").css("display", "block");
            $(".Mi_navMenu").css("display","none");
        });

    });

    $(".nav-item2").stop(true).mouseenter(function () {
        productList(json2);
        $(".Mi_navMenu").css("display","block");
        $(".navMenu").stop(true).slideDown();
        $('.navMenu').children().stop(true).slideDown();
    });
    $(".nav-item2").mouseleave(function () {
        $(".navMenu").stop(true).slideUp(function () {
            //$(".navMenu").css("display", "none");
        });
        $('.navMenu').children().stop(true).slideUp(function () {
            //$(".navMenu").css("display", "block");
            $(".Mi_navMenu").css("display","none");
        });

    });

    $(".nav-item3").stop(true).mouseenter(function () {
        productList(json3);
        $(".Mi_navMenu").css("display","block");
        $(".navMenu").stop(true).slideDown();
        $('.navMenu').children().stop(true).slideDown();
    });
    $(".nav-item3").mouseleave(function () {
        $(".navMenu").stop(true).slideUp(function () {
            //$(".navMenu").css("display", "none");
        });
        $('.navMenu').children().stop(true).slideUp(function () {
            //$(".navMenu").css("display", "block");
            $(".Mi_navMenu").css("display","none");
        });

    });

    $(".nav-item4").stop(true).mouseenter(function () {
        productList(json4);
        $(".Mi_navMenu").css("display","block");
        $(".navMenu").stop(true).slideDown();
        $('.navMenu').children().stop(true).slideDown();
    });
    $(".nav-item4").mouseleave(function () {
        $(".navMenu").stop(true).slideUp(function () {
            //$(".navMenu").css("display", "none");
        });
        $('.navMenu').children().stop(true).slideUp(function () {
            //$(".navMenu").css("display", "block");
            $(".Mi_navMenu").css("display","none");
        });

    });

    $(".nav-item5").stop(true).mouseenter(function () {
        productList(json5);
        $(".Mi_navMenu").css("display","block");
        $(".navMenu").stop(true).slideDown();
        $('.navMenu').children().stop(true).slideDown();
    });
    $(".nav-item5").mouseleave(function () {
        $(".navMenu").stop(true).slideUp(function () {
            //$(".navMenu").css("display", "none");
        });
        $('.navMenu').children().stop(true).slideUp(function () {
            //$(".navMenu").css("display", "block");
            $(".Mi_navMenu").css("display","none");
        });

    });

    $(".nav-item6").stop(true).mouseenter(function () {
        productList(json6);
        $(".Mi_navMenu").css("display","block");
        $(".navMenu").stop(true).slideDown();
        $('.navMenu').children().stop(true).slideDown();
    });
    $(".nav-item6").mouseleave(function () {
        $(".navMenu").stop(true).slideUp(function () {
            //$(".navMenu").css("display", "none");
        });
        $('.navMenu').children().stop(true).slideUp(function () {
            //$(".navMenu").css("display", "block");
            $(".Mi_navMenu").css("display","none");
        });

    });

    $(".nav-item7").stop(true).mouseenter(function () {
        productList(json7);
        $(".Mi_navMenu").css("display","block");
        $(".navMenu").stop(true).slideDown();
        $('.navMenu').children().stop(true).slideDown();
    });
    $(".nav-item7").mouseleave(function () {
        $(".navMenu").stop(true).slideUp(function () {
            //$(".navMenu").css("display", "none");
        });
        $('.navMenu').children().stop(true).slideUp(function () {
            //$(".navMenu").css("display", "block");
            $(".Mi_navMenu").css("display","none");
        });

    });
    //右边搜索框
    $('#header-search').first().click(function () {
        $('#keyword-list').css('display','block');
       $(this).css('border','1px solid #FF6700').find('button').css({
           'backgroundColor':'#FF6700',
           color:"white",
       });
        $('.search-hot-words').css('display','none');
    })
    $('#keyword-list').find('li').mouseover(function () {
        $(this).css('background','#eeeeee').siblings().css('background','#ffffff');
    }).click(function () {
        $('#header-search').find('input').val($(this).text());
        $('#keyword-list').css('visibility','hidden');
    })
})


