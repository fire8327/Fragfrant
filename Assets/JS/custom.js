/*jshint esnext: true */
$("#filter").click(() => {
  $("#filters").slideToggle(500);
  $("#filter").toggleClass("border-b");
});