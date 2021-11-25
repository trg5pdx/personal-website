let project_toggle = (parent, child) => {
  let selectors = parent + ' + ' + child;
  $(selectors).slideToggle();
  $(parent).add(child).toggleClass('project-header-open', 500);
};

$(document).ready(function () {
  $('.project').hide();

  $('.xv6').on('click', function () {
    project_toggle('#project', '.xv6');
  });

  $('.website').on('click', function () {
    project_toggle('#project', '.website');
  });

  $('.chocan').on('click', function () {
    project_toggle('#project', '.chocan');
  });
});
