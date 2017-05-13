// Header  Collapse Function

function headerCollapse() {
  var scroll_pos = $("body").scrollTop();

  if (scroll_pos > 0) {
    $("header").addClass("header_collapse");
    $(".header_content").addClass("header_collapse");
    $(".logo").addClass("logo_small");
    $("#top").show();
  }
  else {
    $("header").removeClass("header_collapse");
    $(".header_content").removeClass("header_collapse");
    $(".logo").removeClass("logo_small");
    $("#top").hide();
  }
}
setInterval(headerCollapse, 1);

// Top Content Fade Function

$(window).scroll(function() {
    $(".top_content").css({'opacity' : 1-(($(this).scrollTop())/350)});
});

$(window).scroll(function() {
    $(".top_logo").css({'opacity' : 1-(($(this).scrollTop())/350)});
});

// Scroll Slide Functions

$(".clyster, #clyster_button").click(function () {
  var clyster_pos = $("#Clyster").offset().top;
  $("html, body").animate({ scrollTop: clyster_pos - 50 }, 500);
});

$(".games").click(function () {
  var games_pos = $("#Games").offset().top;
  $("html, body").animate({ scrollTop: games_pos - 50 }, 500);
});

$(".staff").click(function () {
  var staff_pos = $("#Staff").offset().top;
  $("html, body").animate({ scrollTop: staff_pos - 50 }, 500);
});

$(".autoscroll_down_button").click(function () {
  var news_pos = $("#News").offset().top;
  $("html, body").animate({ scrollTop: news_pos - 50 }, 500);
});

$("#top, .logo, #footer_top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
});

// Copy Ip Function

$(".copy").click(function () {
  $(".copied_ip").css( "display", "flex" );
  $(".copied_ip").fadeIn(200, function () {
    $(".copied_ip").delay(2000).fadeOut(200);
  });
});

// Copy To Clipboard Function
new Clipboard('.copy');

// Mobile Menu Function

$(".mobile_header").click(function () {
  $(".mobile_menu_list").toggleClass("mobile_menu_list_open");
});
