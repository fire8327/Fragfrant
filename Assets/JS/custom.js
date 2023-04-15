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