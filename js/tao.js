/**
 * Created by Administrator on 2017/3/15 0015.
 */
$(window).on('load', function () {


    //���������(�ֲ����)��
    //�޷������ԭ��: ��ֵ��һ�ŵ���ĩβ��Ȼ��ڶ��ֶ���һ�Ż������ڶ��ŵ�ʱ��ul˲����������һ��ͼƬ


    //��ȡҪ������Ԫ��1
    var dali = document.getElementById("dali");  //��li
    var leirong = document.getElementById("leirong"); //���ݲ���
    var leiLiArr = leirong.getElementsByTagName("li");
    var jiaobiao = document.getElementById("jiaobiao");  //�½Ǳ�
    var jiaoLiArr = jiaobiao.getElementsByTagName("li")
    var daohang = document.getElementById("daohang");  //���Ұ�ť
    var zuo = daohang.children[0];   //��
    var you = daohang.children[1];   //��

    fn(dali, daohang, jiaoLiArr, zuo, you, leirong, leiLiArr)

    //��ȡҪ������Ԫ��2
    var dali2 = document.getElementById("dali2");
    var leirong2 = document.getElementById("leirong2");
    var leirong2Arr = leirong2.getElementsByTagName("li");
    var jiaobiao2 = document.getElementById("jiaobiao2");
    var jiaobiao2Arr = jiaobiao2.getElementsByTagName("li");
    var daohang2 = document.getElementById("daohang2");
    var zuo2 = daohang2.children[0];
    var you2 = daohang2.children[1];

    fn(dali2, daohang2, jiaobiao2Arr, zuo2, you2, leirong2, leirong2Arr)

    //��ȡҪ������Ԫ��3
    var dali3 = document.getElementById("dali3");
    var leirong3 = document.getElementById("leirong3");
    var leirong3Arr = leirong3.getElementsByTagName("li");
    var jiaobiao3 = document.getElementById("jiaobiao3");
    var jiaobiao3Arr = jiaobiao3.getElementsByTagName("li");
    var daohang3 = document.getElementById("daohang3");
    var zuo3 = daohang3.children[0];
    var you3 = daohang3.children[1];

    fn(dali3,daohang3,jiaobiao3Arr,zuo3,you3,leirong3,leirong3Arr)

    //��ȡҪ������Ԫ��4
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
        //������ȥ��ʾ��ť
        ele.onmouseover = function () {
            anliu.style.display = "block";
        }
        //���ȥ���ذ�ť
        ele.onmouseout = function () {
            anliu.style.display = "none";
        }

        //����һ������
        jiaoLiArr[0].id = "ccnndi";

        //����������������һ����С�����ã�һ����ͼƬ�á�
        var key = 0;
        var heikuan = ele.offsetWidth;

        //����ұߺ���ul�����ƶ�
        you.onclick = function () {
            key++;
            // 1.square����4,����5��ʱ���Ҫ����������Ϊ0��
            // 2.key����5,����6��ʱ���Ҫ����������Ϊ1��

            if (key === leiLiArr.length) {
                key = 2;
            }

            //����˼��
            for (var i = 0; i < jiaoLiArr.length; i++) {
                jiaoLiArr[i].id = "";
            }
            //����
            jiaoLiArr[key].id = "ccnndi";
            //����
            animate(leirong, key * -heikuan);
        }

        //�����ߺ���ul�����ƶ�
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


    //���ٶ�����װ
    function animate(ele, target) {
        //bug1:Ҫ�ö�ʱ�������嶨ʱ����
        clearInterval(ele.timer);//һ�����ӣ�һ����ʱ������ز������Ӱ��
        //bug2:�Ѷ�ʱ���󶨵������ϡ�(һ�����ӣ�һ����ʱ����)
        ele.timer = setInterval(function () {
            //bug3:�����Ĵ�������������Զ����10��
            var step = target > ele.offsetLeft ? 10 : -10;
            ele.style.left = ele.offsetLeft + step + "px";
            //bug4:ͣ������Ŀ��λ�ú͵�ǰλ��ֻ���һ��������ʱ��
            //bug5:�������⣻   <�����=
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
