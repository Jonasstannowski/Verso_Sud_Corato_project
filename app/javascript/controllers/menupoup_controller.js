$(window).on('load', function () {
  $('#menuModal').hide();
  console.log("realod")
});

$("#buttonmenu").on("click", function () {
  $("#menuModal").show();
  console.log("button_clicked")
})

$("#closemenuBtn").on("click", function () {
  $("#menuModal").hide();
})

$(".link-in-menupopup").on("click", function () {
  $("#menuModal").hide();
})
