// $(function(){
//   $('navbar-nav nav-link').preventDefault();
// });

function loadMethode(navLink) {
  changeActive(navLink);
  $('#centerPlaceholder').load('./components/methode.html').hide().fadeIn('slow', retournerDebutScroll);
};

function loadQuisuisje(navLink) {
  changeActive(navLink);
  $('#centerPlaceholder').load('./components/quisuisje.html').hide().fadeIn('slow', retournerDebutScroll);
};

function changeActive(navLink) {
  $('.navbar-nav .active').removeClass('active');
  $(navLink).addClass('active');
}

function retournerDebutScroll() {
  $('html, body').animate({
      scrollTop: $("#centerPlaceholder").offset().top - $('.navbar').outerHeight()
  }, 200);
}
