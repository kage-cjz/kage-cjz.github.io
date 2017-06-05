/**
 * Created by gibson on 2017/3/16.
 */
//张灵部分js开始
$(window).on("load", function(){
    //1.鼠标移入tab栏切换
    $("#match-tab-title").children("li").on({
        mouseover:function(){
            $(this).addClass("match-title-active");
            var index = $(this).index();
            //移入时，索应值一致的，添加class
            $("#match-content").children("ul").eq(index).removeClass("tab-content-hide").addClass("tab-content-active").siblings().removeClass("tab-content-active").addClass("tab-content-hide");
        },
        mouseleave:function(){
            $(this).removeClass("match-title-active");
        }
    });
    //2.鼠标移入match的cntent部分的li，里面的评论部分显示
    $("#match-content ul").children("li")
        .mouseenter(function(){
        $(this).children("div").eq(1).stop().animate({height: 75, opacity: 1})
    });
    $("#match-content ul").children("li")
        .mouseleave(function(){
            $(this).children("div").eq(1).stop().animate({height: 0, opacity: 0})
    });
})



