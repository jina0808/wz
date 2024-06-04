//menu
$(document).ready(function() {
    $(".lnb").mouseover(function(){
      $(this).find('.submenu').stop().slideDown(350);
      $("#lnb_wrap").stop().animate({"height":"280px"},400);
      $('.top').find('.menu_bg').stop().slideDown(400);
    }).mouseleave(function(){
      $(this).find('.submenu').stop().slideUp(350);
      $("#lnb_wrap").stop().animate({"height":"100px"},400);
      $('.top').find('.menu_bg').stop().slideUp(400);
    });
  });/* document end */

  //모바일 메뉴
$(document).ready(function() {
  // 아코디언메뉴 제이쿼리
  $(".submenu1").hide();
  $("div.title").click(function(){
      if($(this).next().css("display")=="none"){
       $(".submenu1").slideUp("fast");
      } 
       $(this).next().slideDown("fast");
  

  })
  //햄버거메뉴 (모바일메뉴)
      $("#ham").click(function(){
           $(".mobile_lnb").show("slide",{direction:"up"},300,null);
           });
           $(".mobile_lnb > i.img2").click(function(){
                $(".mobile_lnb").hide("slide",{direction:"up"},300,null);
     });
  });//모바일메뉴 end



//카운트
$(window).scroll(function(){ 
  var scrT = $(window).scrollTop(); 
  if(scrT == $(document).height() - $(window).height()){ 
      var memberCountConTxt= 320000;
      var memberCountConTxt2= 12000;
      var memberCountConTxt3= 6000;
      
      $({ val : 0 }).animate({ val : memberCountConTxt }, {
          duration: 2000,
          step: function() {
              var num = numberWithCommas(Math.floor(this.val));
              $(".counter_num").text(num);
          },
          complete: function() {
              var num = numberWithCommas(Math.floor(this.val));
              $(".counter_num").text(num);
          }
      });
      
      $({ val : 0 }).animate({ val : memberCountConTxt2 }, {
          duration: 2000,
          step: function() {
              var num = numberWithCommas(Math.floor(this.val));
              $(".counter_num2").text(num);
          },
          complete: function() {
              var num = numberWithCommas(Math.floor(this.val));
              $(".counter_num2").text(num);
          }
      });
      
      $({ val : 0 }).animate({ val : memberCountConTxt3 }, {
          duration: 2000,
          step: function() {
              var num = numberWithCommas(Math.floor(this.val));
              $(".counter_num3").text(num);
          },
          complete: function() {
              var num = numberWithCommas(Math.floor(this.val));
              $(".counter_num3").text(num);
          }
      });
      
      function numberWithCommas(x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
  } 
});//카운트 end

/* family_site */
$(document).ready(function(){
  $("family").hide();
  $(function(){
    $(".family_site").on("click focus",function(){
      $(".family").toggle();
    });
    $(".family_site").on("mouseleave",function(){
      $(".family").css({"display":"none"});
    });
  })
});/* family_site end */

/* 스크롤탑 */
$(document).ready(function(){
  $(".return-top").hide(); // 탑 버튼 숨김

   $(function () {
        $(window).scroll(function () {
           if ($(this).scrollTop() > 100) { // 스크롤 내릴 표시
               $('.return-top').fadeIn();
           } else {
               $('.return-top').fadeOut();
           }
       });
       $('.return-top').click(function () {
           $('body,html').animate({
               scrollTop: 0
           }, 800);  // 탑 이동 스크롤 속도
           return false;
       });
   });
});/* 스크롤탑 끝 */

/* aos */
$(document).ready(function(){
  AOS.init();
});
