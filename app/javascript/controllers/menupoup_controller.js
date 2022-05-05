$(window).on('load', function () {
  $('#menuModal').hide();
});

$("#buttonmenu").on("click", function () {
  $("#menuModal").show();
  console.log("button_clicked")
})

$("#closemenuBtn").on("click", function () {
  $("#menuModal").hide();
})

