/**
 * Created by HP on 2017/3/15.
 */
    //���ǲ�Ʒ��jQuery
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

//ԭ��ji�ֲ�ͼ


    //0.��ȡ���Ԫ��
    var juanAll = document.getElementById("juan-all");
    var juanScreen = juanAll.children[0];
    var juanUl = juanScreen.children[0];
    var juanUlLiArr = juanUl.children;
    var juanOl = juanScreen.children[1];
    var juanArr = juanScreen.children[2];
    var juanLeft = juanArr.children[0];
    var juanRight = juanArr.children[1];
    //ͼƬ�Ŀ��
    var imgWidth = juanScreen.offsetWidth;

    //����1: ��ֵ��һ��ͼƬ��ӵ���ul����ĩβ���Զ�����ol�е�li��
    var newLi = juanUlLiArr[0].cloneNode(true);//��㸳ֵ��һ��li
    juanUl.appendChild(newLi);//��li��ӵ�ul����ĩβ
    for (var i = 0; i < juanUlLiArr.length - 1; i++) {
        //����li��ӵ�ol��
        newLi = document.createElement("li");
        newLi.innerHTML = i + 1;//Ϊli�������������
        juanOl.appendChild(newLi);
    }
    //����ol�еĵ�һ��li
    var juanOlLiArr = juanOl.children;
    juanOlLiArr[0].className = "current";

    for (var i = 0; i < juanOlLiArr.length; i++) {
        juanOlLiArr[i].onmouseover = function () {
            //2.�������ӡ�(����˼��);
            for (var j = 0; j < juanOlLiArr.length; j++) {
                juanOlLiArr[j].className = "";
            }
            this.className = "current";
            key = square = this.innerHTML - 1;

            //3.�ƶ�ul
            animate(juanUl, -imgWidth * (this.innerHTML - 1));
        }
    }

    //����3: ������Ҳ�span��ul������ָ��λ�á�(����14)
    var square = 0;
    var key = 0;

    //Ϊ�Ҳఴť���¼������֮������ֵ������(1.�������ӡ�2.�ƶ�ul)
    juanRight.onclick = autoPlay;

    //����4: ���������span��ul������ָ��λ�á�(����14)
    //ͬ���Ҳఴť��
    juanLeft.onclick = function () {
        square--;//����С����
        key--;//����ͼƬ
        if (square === -1) {
            square = juanOlLiArr.length - 1;
        }
        if (key === -1) {
            //1.ul��leftֵ˲���ƶ���������һ�ŵ�λ�á� 2.�������ڶ��ţ������ڶ��ŵ�����ֵΪ4)
            juanUl.style.left = -imgWidth * (ulLiArr.length - 1) + "px";
            key = juanUlLiArr.length - 2;
        }
        //1.�������ӡ�(����˼��);
        for (var j = 0; j < juanOlLiArr.length; j++) {
            juanOlLiArr[j].className = "";
        }
        juanOlLiArr[square].className = "current";
        //2.�ƶ�ul(�ÿ���ͼƬ������ֵ)
        animate(juanUl, -imgWidth * (key));
    }
    //����5: ���һ����ʱ����(�����뻹�������ʱ�����ƿ�����)
    juanAll.onmouseover = function () {
        juanArr.style.display = "block";
        clearInterval(timer);
    }
    juanAll.onmouseout = function () {
        juanArr.style.display = "none";
        timer = setInterval(autoPlay, 4000);
    }
    //���һ����ʱ������ͼƬ��ʱ���ֲ�
    var timer = setInterval(autoPlay, 4000);
    //�Ҳఴť�Ͷ�ʱ���ķ�װ
    function autoPlay() {
        square++;//����С����
        key++;//����ͼƬ
        if (square === juanOlLiArr.length) {
            square = 0;
        }
        if (key === juanUlLiArr.length) {
            //1.ul��leftֵ˲���ƶ���0��λ�á� 2.����ڶ��ţ��ڶ��ŵ�����ֵΪ1
            juanUl.style.left = 0;
            key = 1;
        }

        //1.�������ӡ�(����˼��);
        for (var j = 0; j < juanOlLiArr.length; j++) {
            juanOlLiArr[j].className = "";
        }
        juanOlLiArr[square].className = "current";
        //2.�ƶ�ul(�ÿ���ͼƬ������ֵ)
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
