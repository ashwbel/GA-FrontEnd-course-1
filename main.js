


function sendEmail(){

  let sendmail = $('.formbox');
  sendmail.css('display' ,'block');
}


function closeformsendEmail(){

  let clossendmail = $('.formbox');
  clossendmail.css('display' ,'none');
}


$("#Discover").click(function() {
    $('html, body').animate({
        scrollTop: $(".discover").offset().top
    }, 2000);
});



$("#Activities").click(function() {
    $('html, body').animate({
        scrollTop: $(".Activities").offset().top
    }, 2000);
});



$("#AboutUs").click(function() {
    $('html, body').animate({
        scrollTop: $(".Aboutus").offset().top
    }, 4000);
});



$("#countact").click(function() {
    $('html, body').animate({
        scrollTop: $(".contact")
    }, 4000);
});

$('#myCarousel').carousel()



$('.firstlink').click(function() {
  $('#riyadhcollaps').toggle();
})

$('.Jeddahlink').click(function() {
  $('#Jeddahcollaps').toggle();
})

$('.Makkahlink').click(function() {
  $('#makkahcollaps').toggle();
})

$('.Madinahlink').click(function() {
  $('#Madinahcollaps').toggle();
})

$('.Abahlink').click(function() {
  $('#Abahcollaps').toggle();
})

$('.taboklink').click(function() {
  $('#Tabokcollaps').toggle();
})

$('.send').on('click',sendEmail);
$('.closeformsend').on('click',closeformsendEmail);
