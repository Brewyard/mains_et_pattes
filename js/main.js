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

function loadEducCanine(navLink) {
  changeActive(navLink);
  $('#centerPlaceholder').load('./components/educationCanine.html').hide().fadeIn('slow', retournerDebutScroll);
}

function loadEducComport(navLink) {
  changeActive(navLink);
  $('#centerPlaceholder').load('./components/educationComportementale.html').hide().fadeIn('slow', retournerDebutScroll);
}

function loadEducChiot(navLink) {
  changeActive(navLink);
  $('#centerPlaceholder').load('./components/educationChiot.html').hide().fadeIn('slow', retournerDebutScroll);
}

function loadBalades(navLink) {
  changeActive(navLink);
  $('#centerPlaceholder').load('./components/balades.html').hide().fadeIn('slow', retournerDebutScroll);
}

function loadBienEtre(navLink) {
  changeActive(navLink);
  $('#centerPlaceholder').load('./components/bienetre.html').hide().fadeIn('slow', retournerDebutScroll);
}

function loadMassages(navLink) {
  changeActive(navLink);
  $('#centerPlaceholder').load('./components/massages.html').hide().fadeIn('slow', retournerDebutScroll);
}

function loadEngagement(navLink) {
  changeActive(navLink);
  $('#centerPlaceholder').load('./components/engagement.html').hide().fadeIn('slow', retournerDebutScroll);
}

function loadTarifs(navLink) {
  changeActive(navLink);
  $('#centerPlaceholder').load('./components/tarifs.html').hide().fadeIn('slow', retournerDebutScroll);
}

function loadContact(navLink) {
  changeActive(navLink);
  $('#centerPlaceholder').load('./components/contact.html').hide().fadeIn('slow', retournerDebutScroll);
}

function changeActive(navLink) {
  $('.navbar-nav .active').removeClass('active');
  $(navLink).parents('.nav-item').addClass('active');
}

function retournerDebutScroll() {
  $('html, body').animate({
      scrollTop: $("#centerPlaceholder").offset().top - $('.navbar').outerHeight()
  }, 200);
}
