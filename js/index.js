$(function(){
  
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 1600,
      dots: true,
      arrows: false,
      infinite: true,
      pauseOnHover: false,
      fade: true
    });
  // ローディングアニメーション
  $(window).on('load', function(){
    $('.loading').fadeOut();	
  });

  // テキストアニメーション
  $(".big-text").textillate({
    in: {
      effect: 'fadeIn',
      delay: 80,
    }
  }, 1000);
  $(".big-e-text").css({opacity:'0'});
  setTimeout (function(){
    $(".big-e-text").css({opacity:'1'}).textillate({
      in: {
        effect: 'fadeIn',
        delay: 30,
      }
    });
  }, 2500);

  
  jQuery(document).ready(function(){
    jQuery('#hamburger').click(function(){
      jQuery('.sm').slideToggle();
    });
  });

  // ヘッダー

  // $('.header').each(function(i, elem){
  //   var contentsPOS = $(elem).offset().top;
  //   $(window).on('load scroll resize', function(){
  //       var winHeight = $(window).height();
  //       var scrollTop = $(window).scrollTop();
  //       var showClass = 'show';
  //       var timing = 100; // 100pxコンテンツが見えたら次のif文がtrue
  //       if (scrollTop >= contentsPOS - winHeight + timing){
  //         $(elem).addClass(showClass);
  //       } else {
  //         $(elem).removeClass(showClass);
  //       }
  //   });
  // });
 $('.background').each(function () {
    var $window = $(window),
    $header = $(this), // ヘッダーのデフォルト位置を取得
    headerOffsetTop = $header.offset().top;
    // ウィンドウのスクロールイベントを監視
      $window.on('scroll', function () {
        // ウィンドウのスクロール量をチェックし、クラスを付加と削除を行う
        if ($window.scrollTop() > headerOffsetTop) {
          $header.css({"top": '-90px'});
          $header.addClass('transform');
          $header.animate({"top": 0},600);
        } else {
          
          $header.removeClass('transform');
          
        } 
      });
        // ウィンドウのスクロールイベントを発生させる
        // (ヘッダーの初期位置を調整するため)
        $window.trigger('scroll');
 });
 
   
  // 要素の登場アニメーション
  ScrollReveal().reveal('.about-text, .about-text-sub, .left', { 
    origin: 'left',
    distance: '100px',
    duration: 2000, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
  });
  ScrollReveal().reveal('.right', { 
    origin: 'right',
    distance: '100px',
    duration: 2000, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
  });

  ScrollReveal().reveal('.about-image, .shadow', { 
    duration: 2000,
    viewFactor: 0.2,
  });
});
