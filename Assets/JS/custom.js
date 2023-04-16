/*jshint esnext: true */
$("#filter").click(() => {
  $("#filters").slideToggle(500);
  $("#filter").toggleClass("border-b");
});

/* dropdown */
$(".dropdown").each((i,el) => { 
  let list =  $(el).find('.dropdown-list');
  let dropdown = $(el).find('.dropdown-toggler');
  dropdown.click(() => {
    $(el).toggleClass("bg-[#A7A1E9]");
    $(el).toggleClass("text-white");
    list.slideToggle(500);
  });
});

/* filter */
$(document).ready(function(){
  $(".filter").click(function(){
    var value = $(this).attr("data-filter");
    var elem = $(".dropdown");
    if(value == "all"){
      $(elem).show("500");
    }
    else{
      $(elem).not("."+value).hide("500");
      $(elem).filter("."+value).show("500");
    }
  });
})