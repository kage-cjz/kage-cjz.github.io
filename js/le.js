/**
 * Created by ASUS on 2017/3/15.
 */
//获取要操作的对象
$(window).on('load', function () {


      var leUl  = document.getElementById("hezi");
      var leLiArr = leUl.getElementsByClassName("category-bigLi");
      var leOld;
      for(var i = 0; i < leLiArr.length; i++) {
          leLiArr[i].onmouseenter= function () {
              leOld = this.style.background;
              this.style.background="#FF6700";
              for(var j = 0; j < leLiArr.length; j++) {
                  leLiArr[j].children[1].style.display="none";
              }
              this.children[1].style.display="block";
          }
          leLiArr[i].onmouseleave= function () {
              this.style.background=leOld;
              this.children[1].style.display="none";
          }
      }
  })