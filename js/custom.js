
//Add tolltip
$('.follow-us a').tooltip();
//Make text in slider caption responsive
// $('.slider-block h2').fitText(1.4);
// $('.slider-block p').fitText(2.8);
// $('.call-to-action a').fitText(1.1);

$('#carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i=0;i<2;i++) {
    next=next.next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }

    next.children(':first-child').clone().appendTo($(this));
  }
});