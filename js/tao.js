/**
 * Created by Administrator on 2017/3/15 0015.
 */
$(window).on('load', function () {


    //需求分析！(分部完成)；
    //无缝滚动的原理: 赋值第一张到最末尾，然后第二轮动第一张滑动到第二张的时候，ul瞬间闪动到第一张图片


    //获取要操作的元素1
    var dali = document.getElementById("dali");  //大li
    var leirong = document.getElementById("leirong"); //内容部分
    var leiLiArr = leirong.getElementsByTagName("li");
    var jiaobiao = document.getElementById("jiaobiao");  //下角标
    var jiaoLiArr = jiaobiao.getElementsByTagName("li")
    var daohang = document.getElementById("daohang");  //左右按钮
    var zuo = daohang.children[0];   //左
    var you = daohang.children[1];   //右

    fn(dali, daohang, jiaoLiArr, zuo, you, leirong, leiLiArr)

    //获取要操作的元素2
    var dali2 = document.getElementById("dali2");
    var leirong2 = document.getElementById("leirong2");
    var leirong2Arr = leirong2.getElementsByTagName("li");
    var jiaobiao2 = document.getElementById("jiaobiao2");
    var jiaobiao2Arr = jiaobiao2.getElementsByTagName("li");
    var daohang2 = document.getElementById("daohang2");
    var zuo2 = daohang2.children[0];
    var you2 = daohang2.children[1];

    fn(dali2, daohang2, jiaobiao2Arr, zuo2, you2, leirong2, leirong2Arr)

    //获取要操作的元素3
    var dali3 = document.getElementById("dali3");
    var leirong3 = document.getElementById("leirong3");
    var leirong3Arr = leirong3.getElementsByTagName("li");
    var jiaobiao3 = document.getElementById("jiaobiao3");
    var jiaobiao3Arr = jiaobiao3.getElementsByTagName("li");
    var daohang3 = document.getElementById("daohang3");
    var zuo3 = daohang3.children[0];
    var you3 = daohang3.children[1];

    fn(dali3,daohang3,jiaobiao3Arr,zuo3,you3,leirong3,leirong3Arr)

    //获取要操作的元素4
    var dali4 = document.getElementById("dali4");
    var leirong4 = document.getElementById("leirong4");
    var leirong4Arr = leirong4.getElementsByTagName("li");
    var jiaobiao4 = document.getElementById("jiaobiao4");
    var jiaobiao4Arr = jiaobiao4.getElementsByTagName("li");
    var daohang4 = document.getElementById("daohang4");
    var zuo4 = daohang4.children[0];
    var you4 = daohang4.children[1];

    fn(dali4,daohang4,jiaobiao4Arr,zuo4,you4,leirong4,leirong4Arr)



    function fn(ele, anliu, jiaoLiArr, zuo, you, leirong, leiLiArr) {
        //鼠标放上去显示按钮
        ele.onmouseover = function () {
            anliu.style.display = "block";
        }
        //鼠标去隐藏按钮
        ele.onmouseout = function () {
            anliu.style.display = "none";
        }

        //给第一个点亮
        jiaoLiArr[0].id = "ccnndi";

        //定义两个计数器，一个给小方块用，一个给图片用。
        var key = 0;
        var heikuan = ele.offsetWidth;

        //点击右边盒子ul向右移动
        you.onclick = function () {
            key++;
            // 1.square超过4,等于5的时候就要处理。让他变为0；
            // 2.key超过5,等于6的时候就要处理。让他变为1；

            if (key === leiLiArr.length) {
                key = 2;
            }

            //排他思想
            for (var i = 0; i < jiaoLiArr.length; i++) {
                jiaoLiArr[i].id = "";
            }
            //点亮
            jiaoLiArr[key].id = "ccnndi";
            //匀速
            animate(leirong, key * -heikuan);
        }

        //点击左边盒子ul向左移动
        zuo.onclick = function () {
            key--;

            if (key === -1) {
                key = 0;
            }
            for (var i = 0; i < jiaoLiArr.length; i++) {
                jiaoLiArr[i].id = "";
            }
            jiaoLiArr[key].id = "ccnndi";

            animate(leirong, key * -heikuan);
        }

    }


    //匀速动画封装
    function animate(ele, target) {
        //bug1:要用定时器，先清定时器。
        clearInterval(ele.timer);//一个盒子，一个定时器。想回不会产生影响
        //bug2:把定时器绑定到盒子上。(一个盒子，一个定时器。)
        ele.timer = setInterval(function () {
            //bug3:步长的处理：步长不能永远都是10；
            var step = target > ele.offsetLeft ? 10 : -10;
            ele.style.left = ele.offsetLeft + step + "px";
            //bug4:停下来：目标位置和当前位置只差不足一个步长的时候
            //bug5:抖动问题；   <后面加=
            if (Math.abs(target - ele.offsetLeft) <= Math.abs(step)) {
                ele.style.left = target + "px";
                clearInterval(ele.timer);
            }
        }, 30);
    }


    //
    //$('#home-hero-sub ').("li").eq(2).css({
    //    borderRight:"0px",
    //})
    //$('#home-hero-sub ').("li").eq(3).css({
    //    borderBottom:"0px",
    //})
    //$('#home-hero-sub ').("li").eq(4).css({
    //    borderBottom:"0px",
    //})
    //$('#home-hero-sub ').("li").eq(5).css({
    //    borderBottom:"0px",
    //    borderRight:"0px",




})
