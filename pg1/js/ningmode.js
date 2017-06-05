/**
 * Created by BJZT on 2017/3/12.
 */

function animate(ele,obj,fn){
    clearInterval(ele.timer);
    ele.timer = setInterval(function (){
        var flag =true;
        for(var k in obj){

            if(k=="z-index"){
                ele.style.zIndex = obj[k];
            }
            else if(k=="opacity"){
                if(parseInt(getStyle(ele,k)*100)==0){
                    var leader = 0;
                }
                else{
                    var leader = parseInt(getStyle(ele,k)*100)||100;
                }
                var speed = (parseInt(obj[k])-leader)/10;
                speed = speed>0?Math.ceil(speed):Math.floor(speed);
                //console.log(leader+speed);
                ele.style.opacity = (leader+speed)/100;

                ele.style.filter = "alpha(opacity:"+(leader+speed)+")";
                if(parseInt(obj[k])!==leader){
                    flag = false;
                }

            }
            else{
                var stmp = parseInt(getStyle(ele,k))||0;
                var speed = (parseInt(obj[k])-stmp)/10;
                speed = speed>0?Math.ceil(speed):Math.floor(speed);
                ele.style[k] = stmp +speed +'px';
                if(parseInt(obj[k])!==stmp){
                    flag = false;
                }
            }
        }

        if(flag){
            clearInterval(ele.timer)
            if(fn){
                fn();
            }
        }
    },30)


    function  getStyle(ele,sty){
        if(window.getComputedStyle !==undefined){
            return window.getComputedStyle(ele,null)[sty];
        }
        else{
            return ele.currentStyle[sty];
        }
    }
};