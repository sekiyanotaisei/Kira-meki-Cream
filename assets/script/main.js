$(document).ready(function() {
  $(".slide__items").slick({
    autoplay: true,     // 自動再生
    slidesToShow: 3,    // 表示するスライド枚数
    slidesToScroll: 3,  // スライドする数
    arrows: true,       // 矢印
    dots: true,         // インジケーター
    prevArrow: '<img src="/assets/image/arrow_left.png" class="slick-prev">',
    nextArrow: '<img src="/assets/image/arrow_right.png" class="slick-next">',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
