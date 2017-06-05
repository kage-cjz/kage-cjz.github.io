/**
 * Created by BJZT on 2017/3/12.
 */
//$(function (){
//    $("#slider>.v-play>ul")
//
//
//
//})









window.onload = function (){

///----------------购物车开始-------------------------//
    var shopcart = document.getElementById("shopcart");
    var cart = document.getElementById("cart");
    shopcart.onmouseover = function (){

        shopcart.style.background = "#fff";
        shopcart.style.color = "#ff6700";
        cart.style.display = "block";
    };
    shopcart.onmouseout = function (){

        shopcart.style.background = "#424242";
        shopcart.style.color = "#b0b0b0";
        cart.style.display = "none";
    };
///----------------购物车结束-------------------------////

    ///--------------头部导航开始------------------------////
    var head = document.getElementById("head");
    var logo = head.getElementsByClassName("logo")[0];
    logo.onmouseenter = function (){
        this.style.background = "#ff6700 url(images/mi-home.png) no-repeat 3px 3px"
    };
    logo.onmouseout = function (){
        this.style.background ="#ff6700 url(images/mi-logo.png) no-repeat 3px 3px";
    }

    var search = document.getElementById("top-search");
    var ningscroll = document.getElementById("scrollTop");
    var sider = document.getElementById("slider");

    window.onscroll = function (){

        if(scroll().top>search.offsetHeight){
            search.className = "top-search";
        }
        if(scroll().top<search.offsetHeight){
            search.className = "";
        }
        if(scroll().top>sider.offsetHeight){
            var top = scroll().top-sider.offsetHeight;

            top/=10;
            if(top)
            animate(ningscroll,{
                bottom:top
            })
        }

    }
    function scroll(){
        return{
            top:window.pageYOffset || document.documentElement.scrollTop,
            left:window.pageXOffset || document.documentElement.scrollLeft
        }
    }

    ///--------------头部导航结束------------------------////


//--------------------视频部分开始---------------------//
   var ningul = document.getElementById("autoplay");
    var ningLis = ningul.children;
    var vleft = document.getElementById("v-left");
    var vright = document.getElementById("v-right");
    var num = 2;
    var flag = true;
    var aUl = document.getElementById("presentation-ul");
    var ningLiArr = aUl.children;
    var oDot = document.getElementById("dot");
    var aSpan = oDot.children;
    //console.log(ningLiArr);
    console.log(aSpan);
    autoPlay();
    vleft.onclick =function(){
        if(flag){
            vright.style.display = "block";
            flag=false;
            num--;
            autoPlay();
        }

    }
    vright.onclick = function (){
        if(flag){
            flag = false;
        num++;
        vleft.style.display = "block";

            autoPlay();
        //if(num==ningLis.length-1){
        //    vright.style.display = "none";
        //    num=ningLis.length-1;
        //}
        //for(var i=0;i<ningLis.length;i++){
        //    ningLis[i].children[0].pause();
        //    ningLis[i].style.filter="blur(3px)";
        //    ningLiArr[i].style.display="none";
        //}
        //ningLis[num].children[0].play();
        //ningLis[num].style.filter = "none";
        //ningLiArr[num].style.display= "block";
        //    animate(ningul,{
        //        marginLeft:-898*num
        //    },function(){
        //        flag = true;
        //    })
        }

    }
    function autoPlay (){


        //console.log(ningLis);
        if(num==0){
            vleft.style.display = "none";
            num=0;
        };
        if(num==ningLis.length-1){
            vright.style.display = "none";
            num=ningLis.length-1;
        }
        for(var i=0;i<ningLis.length;i++){
            ningLis[i].children[0].pause();
            ningLis[i].style.filter="blur(3px)";
            ningLiArr[i].style.display = "none";
            aSpan[i].style.borderColor = "";
        };
        ningLis[num].children[0].play();
        ningLis[num].style.filter = "none";
        aSpan[num].style.borderColor = "#04b4a1";
        ningLiArr[num].style.display = "block";

            animate(ningul,{
                marginLeft:-898*num
            },function(){
                flag = true;
            })
        }



//--------------------视频部分结束---------------------//
//-------------------------滚动区域开始-----------------//
    var ningscroll = document.getElementById("scrollTop");


//-------------------------滚动区域结束-----------------//
    //----------------轮播图开始----------------------//
//    var styArr = [
//        {   //  1
//            width: 600,
//            height:250,
//            top: 70,
//            left: 50,
//            opacity: 20,
//            "z-index": 2
//        },
//        {  // 2
//            width: 800,
//            height:375,
//            top: 120,
//            left: 0,
//            opacity: 80,
//            "z-index": 3
//        },
//        {   // 3
//            width: 1000,
//            height:500,
//            top: 100,
//            left: 200,
//            opacity: 100,
//            "z-index": 4
//        },
//        {  // 4
//            width: 800,
//            height:375,
//            top: 120,
//            left: 600,
//            opacity: 80,
//            "z-index": 3
//        },
//        {   //5
//            width: 600,
//            height:250,
//            top: 70,
//            left: 750,
//            opacity: 20,
//            "z-index": 2
//        }
//    ];
//
//    var wrap = document.getElementById("wrap");
//    var ul = wrap.getElementsByTagName("ul")[0];
//    var arrow = document.getElementById("arrow");
//    var left = document.getElementById("left");
//    var right = document.getElementById("right");
//    var flage = true;
//
//    var liArr = ul.children;
//    var timer = null;
//    auto();
//    timer = setInterval(function (){
//        auto(false);
//    },1500);
//    wrap.onmouseover = function (){
//        arrow.style.display = "block";
//        clearInterval(timer);
//    };
//    wrap.onmouseout = function (){
//        arrow.style.display = "none";
//        timer = setInterval(function (){
//            auto(false);
//        },1500);
//    };
//    left.onclick = function (){
//        if(flage){
//            auto(true);
//        }
//        flage = false;
//
//    }
//    right.onclick = function (){
//
//        if(flage){
//            auto(false);
//        }
//        flage = false;
//    }
//
//
//    function auto(flag){
//        if(flag !==undefined){
//            if(flag){
//                styArr.push(styArr.shift());
//            }else{
//                styArr.unshift(styArr.pop());
//            }
//        };
//        for(var i =0;i<styArr.length;i++){
//            animate(liArr[i],styArr[i],function (){
//                flage = true;
//            });
//        };
//    }
}
    //----------------轮播图结束--------------------//
