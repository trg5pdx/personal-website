$(document).ready(function () {
  $('.project').hide();

  /*
  let $title = $('h4');
  $title.hide().each(function (index) {
    $(this)
      .delay(700 * index)
      .fadeIn(700);
  });
  $title.on('click', function () {
    $(this).fadeOut(700);
  }); */

  $('.xv6').on('click', function () {
    $('#project + .xv6').slideToggle();
  });

  $('.website').on('click', function () {
    $('#project + .website').slideToggle();
  });

  $('.chocan').on('click', function () {
    $('#project + .chocan').slideToggle();
  });
});
