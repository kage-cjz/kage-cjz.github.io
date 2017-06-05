/**
 * Created by HP on 2017/3/15.
 */
    //明星产品的jQuery
$(window).on('load', function () {


    $('.j-mx-arrow').children('span').mouseenter(function () {
        $(this).addClass('curren2').siblings('span').removeClass('curren2')
        console.log($(this).index())
        var index = $(this).index()
        var width = $('.juan-huadong>div').width()
        console.log($('.juan-huadong>div').width())
        $('.juan-huadong').stop().animate({
            left: index * -width
        }, 500)
    })

//原生ji轮播图


    //0.获取相关元素
    var juanAll = document.getElementById("juan-all");
    var juanScreen = juanAll.children[0];
    var juanUl = juanScreen.children[0];
    var juanUlLiArr = juanUl.children;
    var juanOl = juanScreen.children[1];
    var juanArr = juanScreen.children[2];
    var juanLeft = juanArr.children[0];
    var juanRight = juanArr.children[1];
    //图片的宽度
    var imgWidth = juanScreen.offsetWidth;

    //需求1: 赋值第一张图片添加到到ul的最末尾和自动生成ol中的li。
    var newLi = juanUlLiArr[0].cloneNode(true);//深层赋值第一个li
    juanUl.appendChild(newLi);//新li添加到ul的最末尾
    for (var i = 0; i < juanUlLiArr.length - 1; i++) {
        //生成li添加到ol中
        newLi = document.createElement("li");
        newLi.innerHTML = i + 1;//为li里面添加上内容
        juanOl.appendChild(newLi);
    }
    //点亮ol中的第一个li
    var juanOlLiArr = juanOl.children;
    juanOlLiArr[0].className = "current";

    for (var i = 0; i < juanOlLiArr.length; i++) {
        juanOlLiArr[i].onmouseover = function () {
            //2.点亮盒子。(排他思想);
            for (var j = 0; j < juanOlLiArr.length; j++) {
                juanOlLiArr[j].className = "";
            }
            this.className = "current";
            key = square = this.innerHTML - 1;

            //3.移动ul
            animate(juanUl, -imgWidth * (this.innerHTML - 1));
        }
    }

    //需求3: 鼠标点击右侧span，ul滑动到指定位置。(案例14)
    var square = 0;
    var key = 0;

    //为右侧按钮绑定事件；点击之后索引值自增。(1.点亮盒子。2.移动ul)
    juanRight.onclick = autoPlay;

    //需求4: 鼠标点击做侧span，ul滑动到指定位置。(案例14)
    //同理右侧按钮：
    juanLeft.onclick = function () {
        square--;//控制小方块
        key--;//控制图片
        if (square === -1) {
            square = juanOlLiArr.length - 1;
        }
        if (key === -1) {
            //1.ul的left值瞬间移动到倒数第一张的位置。 2.滑向倒数第二张，倒数第二张的索引值为4)
            juanUl.style.left = -imgWidth * (ulLiArr.length - 1) + "px";
            key = juanUlLiArr.length - 2;
        }
        //1.点亮盒子。(排他思想);
        for (var j = 0; j < juanOlLiArr.length; j++) {
            juanOlLiArr[j].className = "";
        }
        juanOlLiArr[square].className = "current";
        //2.移动ul(用控制图片的索引值)
        animate(juanUl, -imgWidth * (key));
    }
    //需求5: 添加一个定时器。(鼠标进入还得清除定时器，移开加上)
    juanAll.onmouseover = function () {
        juanArr.style.display = "block";
        clearInterval(timer);
    }
    juanAll.onmouseout = function () {
        juanArr.style.display = "none";
        timer = setInterval(autoPlay, 4000);
    }
    //添加一个定时器，让图片定时器轮播
    var timer = setInterval(autoPlay, 4000);
    //右侧按钮和定时器的封装
    function autoPlay() {
        square++;//控制小方块
        key++;//控制图片
        if (square === juanOlLiArr.length) {
            square = 0;
        }
        if (key === juanUlLiArr.length) {
            //1.ul的left值瞬间移动到0的位置。 2.滑向第二张，第二张的索引值为1
            juanUl.style.left = 0;
            key = 1;
        }

        //1.点亮盒子。(排他思想);
        for (var j = 0; j < juanOlLiArr.length; j++) {
            juanOlLiArr[j].className = "";
        }
        juanOlLiArr[square].className = "current";
        //2.移动ul(用控制图片的索引值)
        animate(juanUl, -imgWidth * (key));
    }


    function animate(ele, target) {

        clearInterval(ele.timer);
        ele.timer = setInterval(function () {
            var step = target > ele.offsetLeft ? 10 : -10;
            ele.style.left = ele.offsetLeft + step + "px";
            if (Math.abs(target - ele.offsetLeft) <= Math.abs(step)) {
                ele.style.left = target + "px";
                clearInterval(ele.timer);
            }
        }, 12);
    }
})
