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

var clyster_pos = $("#Clyster").offset().top;
$("#clyster, #clyster_button").click(function () {
  $("html, body").animate({ scrollTop: clyster_pos - 50 }, 500);
});

var games_pos = $("#Games").offset().top;
$("#games").click(function () {
  $("html, body").animate({ scrollTop: games_pos - 50 }, 500);
});

var staff_pos = $("#Staff").offset().top;
$("#staff").click(function () {
  $("html, body").animate({ scrollTop: staff_pos - 50 }, 500);
});

$("#top, .logo").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
});
