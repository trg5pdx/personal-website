let project_toggle = (parent, child1, child2) => {
  let content = parent + ' > ' + child1;
  let project_button = parent + ' > ' + child2;
  $(content).slideToggle();
  $(project_button).toggleClass('project-header-open');
};

$(document).ready(function () {
  $('.project').hide();

  $('.xv6').on('click', function () {
    project_toggle('.xv6', '.project', '.project-header');
  });

  $('.website').on('click', function () {
    project_toggle('.website', '.project', '.project-header');
  });

  $('.chocan').on('click', function () {
    project_toggle('.chocan', '.project', '.project-header');
  });
});
