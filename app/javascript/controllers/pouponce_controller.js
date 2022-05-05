setTimeout(showModal, 1000);

function showModal() {
  var is_modal_show = sessionStorage.getItem('alreadyShow');
  if (is_modal_show != 'alredy shown') {
    sessionStorage.setItem('alreadyShow', 'alredy shown');
    $("#myModal").show()
    console.log("not_yet_shown")
  }
  else{
    console.log("is_alredy_shown");
    $("#myModal").hide()
  }
}

$(window).on('load', function () {
  $('#myModal').hide();
});

$("#closeBtn").on("click", function(){
  $("#myModal").hide();
})
