$(function () {
  $(".toggle-links").click(function (e) {
    e.stopPropagation();
    // $(this).toggleClass("animate");
    $(".mob-links").toggleClass("appear");
    // if ($(".mob-links").hasClass("appear")) {
    //   $("body").animate({
    //     paddingLeft: "185px",
    //   }, 500)
    // } else {
    //   $("body").animate({
    //     paddingLeft: 0
    //   }, 500)
    // }
    if ($(".mob-links").hasClass("appear")) {
      $(".navbar-col .bottom-nav .logo").animate({
        opacity: 0
      }, 500);
    } else {
      $(".navbar-col .bottom-nav .logo").animate({
        opacity: 1
      }, 500)
    }
  });

  $(".toggle-links").click(function (e) {
    e.stopPropagation();
  })
  // $("body, html").click(function (e) {
  //   $(".mob-links").removeClass("appear");

  //   if ($(".mob-links").hasClass("appear")) {
  //     $(".navbar-col .bottom-nav .logo").animate({
  //       opacity: 0
  //     }, 500);
  //   } else {
  //     $(".navbar-col .bottom-nav .logo").animate({
  //       opacity: 1
  //     }, 500)
  //   }
  // })

  $(".navbar-col .bottom-nav .side-info .search").click(function () {
    $(".navbar-col .text-search").toggleClass("apper");
  })


  $('.search-button').click(function () {
    $(this).parent().toggleClass('open');
  });

  $(".navbar-col .bottom-nav ul li a").click(function () {
    $(this).parent().addClass("active").siblings().removeClass("active");
  })




  let words = ["Window AC", "Split", "Free Stand", "Cassette"],
    i = 0;
  setInterval(function () {
    $("#changeWord").fadeOut(function () {
      $(this)
        .html(words[(i = (i + 1) % words.length)])
        .fadeIn();
    });
  }, 1500);
  $(".go").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top
      },
      1000
    );
  });

  $(".thumnails img").click(function () {
    $(this)
      .addClass("selected")
      .siblings()
      .removeClass("selected");
    $(".master-img img")
      .attr("src", $(this).attr("src"))
      .fadeIn(700);
    if ($(".thumnails .selected").is(":last-child")) {
      $(".master-img img").css("width", "60%");
    } else {
      $(".master-img img").css("width", "100%");
    }
  });

  $(".minus").click(function () {
    var $input = $(this)
      .parent()
      .find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".plus").click(function () {
    var $input = $(this)
      .parent()
      .find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  $(".product-content .choose .main a").click(function (e) {
    e.preventDefault();
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });
  $(".product-content .warantly .main p").click(function () {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });

  // Full Product Grid
  var $grid = $(".grid").isotope({
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
    getSortData: {
      name: function (element) {
        return $(element).text();
      }
    }
  });

  var $container = $("#shuffle"),
    filters = {};

  $container.isotope({
    itemSelector: ".produkt-element"
  });

  // filter buttons
  $("select").change(function () {
    var $this = $(this);

    // store filter value in object
    // i.e. filters.color = 'red'
    var group = $this.attr("data-filter-group");

    filters[group] = $this.find(":selected").attr("data-filter-value");
    // console.log( $this.find(':selected') )
    // convert object into array
    var isoFilters = [];
    for (var prop in filters) {
      isoFilters.push(filters[prop]);
    }
    console.log(filters);
    var selector = isoFilters.join("");
    $container.isotope({ filter: selector });
    return false;
  });

});
