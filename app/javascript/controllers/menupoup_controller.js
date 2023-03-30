$("#buttonmenu").on("click", function () {
  $("#menuModal").show();
  document.getElementById("menuModal").style.display = "block";
  console.log("button_clicked")
})

$("#closemenuBtn").on("click", function () {
  $("#menuModal").hide();
})

