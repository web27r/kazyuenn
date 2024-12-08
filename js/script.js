// メイン画像のスライド設定
$(".slider").slick({
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 1000,
  dots: true,
  fade: true,
  pauseOnHover: false,
});

// ハンバーガーメニュー設定(左右スライド)
// .hmenuをクリックした時
$(".hmenu").click(function () {
  $(this).toggleClass("open");
  return false;
});

$(".container").click(function () {
  $(".hmenu").removeClass("open");
});

// 上下スライド
// .hmenuをクリックした時
// $(".hmenu").click(function () {
// →navにスライドトグル
// $("nav").slideToggle(500);
// →$(this)にクラスclose(自分だけopenというクラス名)をトグル
// $(this).toggleClass("open");
// });

// ページトップボタン設定
$(window).scroll(function () {
  var sc = $(window).scrollTop();
  // 条件式(scが100を超えたら)、ページトップボタンがfadeInで表示される
  if (sc > 100) {
    $("footer p.pagetop").fadeIn(500);
    // そうでない時(else)のパターンを記入する
    // scが100を超えなかったら、トップページボタンがfadeOutするようになる
  } else {
    $("footer p.pagetop").fadeOut(500);
  }
});

// スクロールすると、下からふわっと出現する設定
$(window).scroll(function () {
  var scrollAnimationElm = document.querySelectorAll("div.history section");
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 100;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add("on");
      }
    }
  };
  window.addEventListener("load", scrollAnimationFunc);
  window.addEventListener("scroll", scrollAnimationFunc);
});

