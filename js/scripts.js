$(document).ready(function() {
  $("#1").click(function() {
    $("img#taco1").slideToggle();
  });
  $("button#green").click(function() {
    $("body").removeClass ();
    $("body").addClass("green-background");
  });
  $("button#yellow").click(function() {
    $("body").removeClass ();
    $("body").addClass("yellow-background");
  });
  $("button#red").click(function() {
    $("body").removeClass ();
    $("body").addClass("red-background");
  });
  
  $("#2").click(function() {
    $("img#taco2").fadeToggle();
  });
  $("button#gray").click(function() {
    $("body").removeClass ();
    $("body").addClass("lightgray-background");
  });
});